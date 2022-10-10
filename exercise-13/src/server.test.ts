import supertest from "supertest";
import { expect, test } from '@jest/globals';
import app from './app'

const request = supertest(app)

test("GET /planets", async()=>{
    const response = await request
    .get("/planets")
    .expect(200)
    .expect('Content-Type', /application\/json/)
expect(response.body).toEqual(
    [
        {'name': "Mercury"},
        {'name': "Uranus"},
        {'name': "Pluto"},
        {'name': "Venus"}
    ]
)
});
