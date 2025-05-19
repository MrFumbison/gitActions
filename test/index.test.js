const request = require('supertest');
const express = require('express');
const path = require('path');

describe('Server Tests', () => {
    let app;

    beforeAll(() => {
        app = express();
        app.use(express.static('public'));
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    });

    test('GET / should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    test('GET / should return HTML content', async () => {
        const response = await request(app).get('/');
        expect(response.type).toMatch(/html/);
    });
}); 