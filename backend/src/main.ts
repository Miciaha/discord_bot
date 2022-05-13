import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const PORT = process.env.PORT ?? 3000;

try {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    });
} catch (Error) {
    console.error(`Error occured: ${Error}`);
}

