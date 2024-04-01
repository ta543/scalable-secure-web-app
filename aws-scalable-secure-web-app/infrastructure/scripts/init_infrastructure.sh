#!/bin/bash

# Example: Create an S3 bucket for static files
BUCKET_NAME=my-app-static-files-$(date +%s) 

aws s3 mb s3://$BUCKET_NAME

echo "S3 bucket '$BUCKET_NAME' created."

# Example: Create a DynamoDB table for application data
DYNAMODB_TABLE_NAME="MyAppDataTable-$(date +%s)"

aws dynamodb create-table \
    --table-name $DYNAMODB_TABLE_NAME \
    --attribute-definitions AttributeName=Id,AttributeType=S \
    --key-schema AttributeName=Id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

echo "DynamoDB table '$DYNAMODB_TABLE_NAME' created."

# Example: Launch an EC2 instance
AMI_ID="ami-9832bdbwub" 
INSTANCE_TYPE="t2.micro"
KEY_NAME="ec2873278" 

aws ec2 run-instances \
    --image-id $AMI_ID \
    --instance-type $INSTANCE_TYPE \
    --key-name $KEY_NAME \
    --count 1 \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=MyAppInstance}]'

echo "EC2 instance launched."
