import { Table } from "sst/node/table";
import handler from "@try-sst/core/handler";
import dynamoDb from "@try-sst/core/dynamodb";


export const main = handler(async (_) => {
  const params = {
    TableName: Table.Notes.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return JSON.stringify(result.Items);
});
