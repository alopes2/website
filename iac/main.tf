resource "vercel_project" "with_git" {
  name      = "personal-website"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = "alopes2/personal-website"
  }
}
