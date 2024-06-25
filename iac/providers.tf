terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.11"
    }
  }

  backend "s3" {
    bucket = "andre-lopes-iac"
    key    = "website.tfstate"
  }
}

provider "vercel" {}
