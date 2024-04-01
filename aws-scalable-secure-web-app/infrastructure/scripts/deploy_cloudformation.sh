#!/bin/bash

# Check for required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 STACK_NAME TEMPLATE_FILE"
    exit 1
fi

STACK_NAME=$1
TEMPLATE_FILE=$2

# Deploy the CloudFormation template
aws cloudformation deploy \
    --template-file $TEMPLATE_FILE \
    --stack-name $STACK_NAME \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --parameter-overrides \
    (Add your parameter overrides here)

echo "CloudFormation stack '$STACK_NAME' has been deployed."
