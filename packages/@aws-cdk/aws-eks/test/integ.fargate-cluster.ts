/// !cdk-integ pragma:ignore-assets
import { App } from '@aws-cdk/core';
import * as eks from '../lib';
import { TestStack } from './util';

class EksFargateClusterStack extends TestStack {

  constructor(scope: App, id: string) {
    super(scope, id);

    new eks.FargateCluster(this, 'FargateCluster', {
      version: eks.KubernetesVersion.V1_17,
    });
  }
}

const app = new App();

new EksFargateClusterStack(app, 'aws-cdk-eks-fargate-cluster-test');

app.synth();