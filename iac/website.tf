resource "vercel_project" "website" {
  provider       = vercel
  name           = "website"
  framework      = "nextjs"
  root_directory = "src"

  git_repository = {
    type = "github"
    repo = "alopes2/website"
  }
}

resource "vercel_project_domain" "andrelopes_vercel" {
  provider   = vercel
  project_id = vercel_project.website.id
  domain     = "andrelopes.vercel.app"
}

resource "vercel_project_domain" "default" {
  provider   = vercel
  project_id = vercel_project.website.id
  domain     = "andrevitorlopes.com"
}

resource "vercel_project_domain" "www" {
  provider   = vercel
  project_id = vercel_project.website.id
  domain     = "www.andrevitorlopes.com"
}

resource "vercel_deployment" "init" {
  provider   = vercel
  project_id = vercel_project.website.id
  ref        = "main"
}
