// AWS SDK for accessing DynamoDB
const AWS = require('aws-sdk');
// Creating a DynamoDB document client
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const noteId = event.pathParameters.noteId;
    const params = {
        TableName: 'NotesTable',
        Key: {
            noteId
        }
    };
    await docClient.delete(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Note deleted successfully" })
    };
};
