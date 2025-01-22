resource "supabase_project" "website" {
  organization_id   = var.supabase.organization_id
  name              = "website"
  database_password = var.supabase.db_password
  region            = "eu-central-1"
  # instance_size     = "nano" Instance sizes cannot be specified for free plan orgs
}

resource "supabase_settings" "played_it_settings" {
  project_ref = supabase_project.website.id

  # Don't want to have a an API
  # api = jsonencode({
  #   db_schema            = "public,storage,graphql_public"
  #   db_extra_search_path = "public,extensions"
  #   max_rows             = 1000
  # })

  auth = jsonencode({
    site_url                     = "https://andrevitorlopes.com",
    password_min_length          = 8,
    password_required_characters = "abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789"
    uri_allow_list               = "http://localhost:3000,https://andrevitorlopes.com"
  })

  # auth = jsonencode({
  #   site_url                  = "http://localhost:3000",
  #   external_github_client_id = var.github.client_id,
  #   external_github_enabled   = true,
  #   external_github_secret    = var.github.client_secret,
  #   uri_allow_list            = "http://localhost:3000,https://andrevitorlopes.com"
  # })
}
