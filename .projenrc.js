const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mauricio Villaescusa',
  authorAddress: 'maurovc@amazon.com',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  cdkVersion: '2.59.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-backup-plan',
  description: 'CDK construct to create AWS Backup Plans',
  repositoryUrl: 'https://github.com/aws-samples/cdk-backup-plan.git',
  autoApproveOptions: {
    allowedUsernames: ['github-bot', 'vaughngit', 'github-actions'],
  },
  license: 'MIT-0',
  releaseToNpm: false,
    //   packageName: 'vaughntech-nodejs-lambda-construct', 
  //  description: 'AWS Node.js Lambda functions baselined with powertool powered tracing, structured logging, custom metrics, and cloudwatch dashboards to help visualize
  // publishToNuget: {
  //   dotNetNamespace: 'VaughnTech.CDK',
  //   packageId: 'VaughnTech.CDK.NodeJsLambdaConstruct',
  // }, 
  // publishToPypi: {
  //   distName: 'cdk-backup-plan',
  //   module: 'cdk_backup_plan',
  // },
  gitpod: true,
});


project.gitignore.addPatterns('.dev/','cdk.out');
project.npmignore.addPatterns('cdk.out', 'examples', 'gitpod_scripts')


project.gitpod.addCustomTask({
  init: 'yarn install && yarn run build',
  command: 'yarn run watch',
});

project.gitpod.addCustomTask({
  name: 'ConfigAlias',
  command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
});

project.gitpod.addCustomTask({
  name: 'Initialize & Configure AWS',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_aws.sh',
});

project.gitpod.addCustomTask({
  name: 'Install DOTNET 6.0',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_dotnet.sh',
});

project.gitpod.addVscodeExtensions(
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

project.synth();
