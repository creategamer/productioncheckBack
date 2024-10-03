import express from 'express'
import cors from 'cors'

const app = express()

// const port = 3000


// Allow all origins (Not recommended for production)
app.use(cors());

// OR better: allow specific origin (Netlify in your case)
const corsOptions = {
    origin: 'https://checkfront.netlify.app', // Replace with your Netlify domain
    methods: 'GET,POST', // Specify allowed methods
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


//get a list a 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A jokes',
            content: 'This is a jokes'
        },
        {
            id: 2,
            title: 'Another jokes',
            content: 'This is Another jokes'
        },
        {
            id: 3,
            title: 'third jokes',
            content: 'This is third jokes'
        },
        {
            id: 4,
            title: 'fourth jokes',
            content: 'This is fourth jokes'
        },
        {
            id: 5,
            title: 'fifth jokes',
            content: 'This is fifth jokes'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})