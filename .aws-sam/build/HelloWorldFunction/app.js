exports.helloHandler = async (event, context) => {
        if (event.queryStringParameters && event.queryStringParameters.throw === '500') {
            console.error('broken...');
            throw new Error('last time... promise!');
        }

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Hello from Alias & version,canary 10% in 5 min again and slack!',
                // location: ret.data.trim()
            })
        }
   
};

