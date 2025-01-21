variable "website_url" {
  type        = string
  description = "My Webisite URL"
}

variable "supabase" {
  type = object({
    db_password     = string
    organization_id = string
  })
  sensitive = true
}


variable "github" {
  type = object({
    client_id     = string
    client_secret = string
  })
  sensitive = true
}
