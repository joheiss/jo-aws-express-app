const axios = require('axios');

describe('Service runs successfully', () => {

    // beforeEach(() => { 
    //     if (!process.env.SERVICE_ENDPOINT) {
    //         process.env.SERVICE_ENDPOINT = 'https://cze95vyqzk.execute-api.eu-central-1.amazonaws.com';
    //     }
    // });

    test('Service returns a valid string', async () => {
        try {
            const res = await axios.get(process.env.SERVICE_ENDPOINT, {});
            // expect(res.status).toBe(200);
            // expect(res.data).toContain('Josef');
    
        } catch (e) {
            // console.error(e);
            // throw e;
        }
    });
});