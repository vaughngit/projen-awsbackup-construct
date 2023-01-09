import { App, Stack, aws_backup as bk } from 'aws-cdk-lib';
//import { aws_ec2 as ec2, aws_backup as bk } from 'aws-cdk-lib';
import { vtBackupConstruct } from './index';

const aws_region = 'us-east-2';
const solution = 'backupByTag';
const environment = 'dev';
const costcenter = 'cdkappdev';

export class IntegTesting {
  readonly stack: Stack[];
  constructor() {

    const env = {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: aws_region || process.env.CDK_DEFAULT_REGION,
    };


    const app = new App();
    const stack = new Stack(app, 'IntegratedBackupTestStack', {
      env,
      tags: {
        solution,
        environment,
        costcenter,
      },
    });


    new vtBackupConstruct(stack, 'integration-test-construct', {
      backupPlanName: 'intgtestBkPlan',
      startHour: 3,
      startMinute: 0,
      resources: [bk.BackupResource.fromTag('solution', 'awsbackuparch', bk.TagOperation.STRING_EQUALS)],
    });


    //inline lambda function integration
    // new InlineLambdaConstruct(stack, 'InlineLambdaConstruct', {
    //   inlineCode: 'exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };',
    // });


    this.stack = [stack];

  }
}

new IntegTesting();