-- Supabase Database Schema for StackSaman Projects (Updated with Case Study Fields)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- TABLE: projects
-- ==========================================
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  description text,
  
  -- Case Study Detailed Fields
  role text,
  scope text,
  overview text,
  problem text,
  approach text,
  build_details text,
  challenges text,
  outcome text,
  learnings text,

  -- Metadata
  category text NOT NULL,
  subcategory text,
  project_type text NOT NULL,
  status text DEFAULT 'published',
  
  -- Media & Links
  thumbnail_url text,
  preview_image_url text,
  live_url text,
  github_url text,
  case_study_url text,
  
  -- Sorting & Filtering
  featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  
  -- Timestamps
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();


-- ==========================================
-- RELATIONAL TABLES (Tags, Technologies, Features)
-- ==========================================

-- Tags (Search keywords, e.g., 'ecommerce', 'ai', 'healthcare')
CREATE TABLE IF NOT EXISTS project_tags (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  tag text NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_project_tags_tag ON project_tags(tag);
CREATE INDEX IF NOT EXISTS idx_project_tags_project_id ON project_tags(project_id);

-- Technologies (e.g., 'React', 'Node.js', 'PostgreSQL')
CREATE TABLE IF NOT EXISTS project_technologies (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  technology text NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_project_tech_tech ON project_technologies(technology);
CREATE INDEX IF NOT EXISTS idx_project_tech_project_id ON project_technologies(project_id);

-- Key Features (e.g., 'Real-time synchronization', 'RBAC')
CREATE TABLE IF NOT EXISTS project_features (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  feature text NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_project_features_project_id ON project_features(project_id);


-- ==========================================
-- ROW LEVEL SECURITY (RLS)
-- ==========================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_features ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published projects and their relations
CREATE POLICY "Public projects are viewable by everyone."
  ON projects FOR SELECT
  USING ( status = 'published' );

CREATE POLICY "Public tags are viewable by everyone."
  ON project_tags FOR SELECT
  USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_tags.project_id AND projects.status = 'published'));

CREATE POLICY "Public technologies are viewable by everyone."
  ON project_technologies FOR SELECT
  USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_technologies.project_id AND projects.status = 'published'));

CREATE POLICY "Public features are viewable by everyone."
  ON project_features FOR SELECT
  USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_features.project_id AND projects.status = 'published'));
