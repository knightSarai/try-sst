import { Table } from "sst/node/table";
import handler from "@try-sst/core/handler";
import dynamoDb from "@try-sst/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Notes.tableName,
    Key: {
      userId: "123", 
      noteId: event?.pathParameters?.id, 
    },
  };

  await dynamoDb.delete(params);

  return JSON.stringify({ status: true });
});
