locals {
  website_origin_id = "WebsiteBucket"
}

resource "aws_s3_bucket" "website_assets" {
  provider = aws
  bucket   = "website-assets"
}


resource "aws_s3_object" "website_assets" {
  provider = aws
  bucket   = aws_s3_bucket.website_assets.bucket
  key      = "images/"
}

resource "aws_s3_object" "profile_picture" {
  provider = aws
  bucket   = aws_s3_bucket.website_assets.bucket
  key      = "andre_lopes.jpg"
  source   = "../src/public/images/andre_lopes.jpg"
}

resource "aws_s3_bucket_public_access_block" "website_bucket_public_access" {
  provider                = aws
  bucket                  = aws_s3_bucket.website_assets.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "public_bucket_policy" {
  provider = aws
  bucket   = aws_s3_bucket.website_assets.id
  policy   = data.aws_iam_policy_document.bucket_policy.json
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "${aws_s3_bucket.website_assets.arn}/*"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.website_assets.arn]
    }
  }
}

resource "aws_cloudfront_origin_access_control" "oac" {
  provider                          = aws
  name                              = "WebsiteAssets"
  description                       = "Website Assets S3 Bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "website_assets" {
  provider = aws
  origin {
    domain_name              = aws_s3_bucket.website_assets.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    origin_id                = local.website_origin_id
  }

  enabled         = true
  is_ipv6_enabled = true
  comment         = "My Website Assets Distribution"

  # logging_config {
  #   include_cookies = false
  #   bucket          = "mylogs.s3.amazonaws.com"
  #   prefix          = "myprefix"
  # }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.website_origin_id

    cache_policy_id = aws_cloudfront_cache_policy.website.id

    viewer_protocol_policy = "redirect-to-https"

    # response_headers_policy_id = aws_cloudfront_response_headers_policy.cors.id
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Sends to the origin and caches it
resource "aws_cloudfront_cache_policy" "website" {
  provider = aws
  name     = "website_assets_cache_policy"

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }
    cookies_config {
      cookie_behavior = "all"
    }

    query_strings_config {
      query_string_behavior = "all"
    }
  }
}

# resource "aws_cloudfront_response_headers_policy" "cors" {
#   provider = aws
#   name     = "My-Website-Alow"
#   cors_config {
#     access_control_allow_credentials = true

#     access_control_allow_headers {
#       items = ["Accept", "Accept-Language", "Content-Language", "Content-Type"]
#     }

#     access_control_allow_methods {
#       items = ["GET"]
#     }

#     access_control_allow_origins {
#       items = [var.website_url]
#     }

#     origin_override = true
#   }
# }
