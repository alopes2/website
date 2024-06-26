resource "vercel_project" "website" {
  name           = "website"
  framework      = "nextjs"
  root_directory = "src"

  git_repository = {
    type = "github"
    repo = "alopes2/website"
  }
}

resource "vercel_project_domain" "andrelopes_vercel" {
  project_id = vercel_project.website.id
  domain     = "andrelopes.vercel.app"
}

resource "vercel_project_domain" "default" {
  project_id = vercel_project.website.id
  domain     = "andrevitorlopes.com"
}

resource "vercel_project_domain" "default" {
  project_id = vercel_project.website.id
  domain     = "www.andrevitorlopes.com"
}
