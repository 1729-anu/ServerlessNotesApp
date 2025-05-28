// AWS SDK for accessing DynamoDB
const AWS = require('aws-sdk');
// Creating a DynamoDB document client
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const params = {
        TableName: 'NotesTable'
    };
    const data = await docClient.scan(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(data.Items)
    };
};
