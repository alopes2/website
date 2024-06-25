resource "vercel_project" "website" {
  name           = "website"
  framework      = "nextjs"
  root_directory = "src"

  git_repository = {
    type = "github"
    repo = "alopes2/website"
  }
}
