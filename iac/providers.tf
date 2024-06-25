terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "1.11.1"
    }
  }
}

provider "vercel" {}
