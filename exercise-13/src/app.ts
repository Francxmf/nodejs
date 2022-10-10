import express, {response} from 'express';
import "express-async-errors";

const app = express();

app.get('/planets', (request, response) => {
    response.json([
        {'name': "Mercury"},
        {'name': "Uranus"},
        {'name': "Pluto"},
        {'name': "Venus"}
    ])
});

export default app;