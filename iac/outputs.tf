output "cloudfront_url" {
  description = "CloudFront URL"
  value       = aws_cloudfront_distribution.website_assets.domain_name
}
