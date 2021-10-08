import {
  APIGatewayProxyEventV2,
  Context,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";

const bucketName = process.env.DOCUMENTS_BUCKET_NAME;

export const getDocuments = async (
  event: APIGatewayProxyEventV2,
  context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  return {
    statusCode: 200,
    body: "success",
  };
};
