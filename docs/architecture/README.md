# AWS Visitor Counter Architecture
## Architecture Diagram

![AWS Visitor Counter](aws-visitor-counter.png)

## Objective
Display a live visitor count on my Cloud Resume Portfolio using AWS serverless services.

## Architecture

GitHub Pages
      │
      ▼
JavaScript (Fetch API)
      │
      ▼
Amazon API Gateway
      │
      ▼
AWS Lambda (Python)
      │
      ▼
Amazon DynamoDB

## AWS Services

- GitHub Pages – Hosts the portfolio
- API Gateway – Public API endpoint
- Lambda – Updates and returns visitor count
- DynamoDB – Stores the visitor count
- IAM – Grants secure permissions
- CloudWatch – Logs and monitoring

## Status
🚧 In Progress