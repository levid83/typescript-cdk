import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda-nodejs";
import { Runtime } from "@aws-cdk/aws-lambda";
import * as s3 from "@aws-cdk/aws-s3";
import * as path from "path";
import * as iam from "@aws-cdk/aws-iam";

interface DocumentManagementAPIProps {
  documentBucket: s3.IBucket;
}

export class DocumentManagementAPI extends cdk.Construct {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: DocumentManagementAPIProps
  ) {
    super(scope, id);

    const getDocumentsFunction = new lambda.NodejsFunction(
      this,
      "GetDocumentsFunction",
      {
        runtime: Runtime.NODEJS_12_X,
        entry: path.join(__dirname, "..", "api", "getDocuments", "index.ts"),
        handler: "getDocuments",
        environment: {
          DOCUMENTS_BUCKET_NAME: props.documentBucket.bucketName,
        },
      }
    );
  }
}
