// jshint esversion:8
const Express = require("express");
const { createLogger, format, transports } = require('winston');
const BodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.MONGO_URL}/?retryWrites=true&w=majority&compressors=snappy,zlib`;
const fetch = require("node-fetch");

const DB_NAME = 'data';
const ROUTES = [ 'students', 'teachers', 'classes', 'experts', 'questions', 'subjects' ];

// Set up logger
const logger = createLogger({
    level: 'debug',
    format: format.combine(
        // format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
        format.errors({ stack: true }),
        format.splat(),
        format.colorize(),
        format.printf(({ level, message }) => {
            return `${level}: ${message}`;
        }),
    ),
    transports: [
        new transports.Console()
    ]
});

// function logRequest(req, res, next) {
//     logger.debug(`Request: ${req.url} from ${req.ip}`);
//     next();
// }

function logReqErr(err, req, res, next) {
    logger.error(`Request error: ${err}`);
    next();
}


// Set up web server
const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
// app.use(logRequest);
app.use(logReqErr);
app.listen(5000, () => {
    logger.info("Started Express server.");
});


// Set up database client
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
let db; 


// Connect to database
async function init() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        logger.info("Pinged your deployment. You successfully connected to MongoDB!");

        db = client.db(DB_NAME);
    } catch (error) {
        logger.error('Database connection failed!', error);
    }
}
init().catch(console.dir);


// Set up routes
ROUTES.forEach(route => {
    app.get(`/${route}`, (req, res) => {
        if (db == null) res.status(500).send("ERROR: Server is starting.");
        else
        (async function () {
            res.send(await db.collection(route).find({}).toArray());
        })();
    });
});

// Set up base route
app.get('/', (req, res) => {
    res.send("There is nothing at the root! Try requesting a path, like /students")
})

// Send intermittent web requests to keep the web service alive (I hope)
const keepalive = setInterval(() => {
    fetch("https://api.equitylab.io");
}, 600_000);


// Close database when program exits and log output
[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `SIGTERM`].forEach((eventType) => {
    process.on(eventType, exit.bind(null, eventType));
});

process.on('uncaughtException', (err, origin) => {
    client.close();
    logger.error(`Uncaught exception - App has crashed!\n${err.stack}`);
    process.exit();
});
  

function exit(options, exitCode) {
    if (options != "exit") logger.warn('Received program exit signal! Shutting down.');
    client.close();
    clearInterval(keepalive);
    process.exit();
}