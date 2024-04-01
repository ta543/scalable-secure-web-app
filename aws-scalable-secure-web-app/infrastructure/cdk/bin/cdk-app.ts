import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { YourStack } from '../lib/your-stack';

const app = new cdk.App();
new YourStack(app, 'YourStack');
