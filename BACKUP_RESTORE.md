# Database Backup & Restore

## Automated Backups

Daily backups run at 2 AM UTC via GitHub Actions and are stored in S3 with 30-day retention.

**Required Secrets:**
- `DATABASE_URL` - PostgreSQL connection string
- `S3_BACKUP_BUCKET` - S3 bucket name
- `AWS_REGION` - AWS region (default: us-east-1)
- `AWS_ACCESS_KEY_ID` - AWS credentials
- `AWS_SECRET_ACCESS_KEY` - AWS credentials

## Manual Backup

```bash
export DATABASE_URL="postgresql://user:pass@host/db"
export S3_BACKUP_BUCKET="my-bucket"
npx ts-node scripts/db-backup.ts
```

## Restore from Backup

```bash
# Download backup from S3
aws s3 cp s3://my-bucket/backups/db-backup-2026-03-25.sql ./backup.sql

# Restore to database
psql "$DATABASE_URL" < backup.sql
```

## Backups Location

All backups are stored in `s3://bucket-name/backups/` with format `db-backup-YYYY-MM-DD.sql`
