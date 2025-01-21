terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.11"
    }

    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.84"
    }

    supabase = {
      source  = "supabase/supabase"
      version = "~> 1.5"
    }
  }

  backend "s3" {
    bucket = "andre-lopes-iac"
    key    = "website.tfstate"
  }
}

provider "vercel" {
}

provider "aws" {
}

provider "supabase" {
}
