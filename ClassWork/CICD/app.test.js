import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import app from './app';

describe('GET /', () => {
    it(`should return 'Works on my machine.'`, async () => {
        const res = await request(app).get('/').expect(200);

        expect(res.text).toBe('Works on my machine.');
    });
});
