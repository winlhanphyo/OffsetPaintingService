import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import multer from 'multer';
import { v4 } from 'uuid';
import passport from 'passport';
import { orderController } from "./controllers/order";
import { config } from './config';
import { router } from './routes';
import authRouter from './routes/auth/auth.router';
import { PRODUCT_PATH, CATEGORY_PATH } from './utils/constant';
// import { userService } from './services/user';
// const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
require('./config/passport');
const swaggerDocument = YAML.load('./api.yaml');


const fileStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {

    if (_file?.fieldname == "categoryImage") {
      cb(null, CATEGORY_PATH);
    } else if (_file?.fieldname == "media") {
      if (_file.mimetype.startsWith('image')) {
        cb(null, PRODUCT_PATH);
      }
    }
  },
  filename: (_req, file, cb) => {
    cb(null, `${v4()}_${file.originalname}`);
  }
});

/**
 * check file filter.
 * @param _req 
 * @param file 
 * @param cb 
 */
const fileFilter = async (_req: any, file: any, cb: any) => {
  const files: any = _req.files;
  // if (_req.isAuthenticated()) {
  if (files?.image || files?.categoryImage) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      return cb(new Error('Invalid file type. Only image files are allowed.'), false);
    }
  } else if (files?.media) {
    cb(null, true);
  }
}

export default class Server {
  app: Express;
  httpServer: http.Server;

  constructor() {
    this.app = express();

    const corsOptions = {
      origin: '*', // Allow all origins
      allowedHeaders: ['Content-Type', 'Authorization', 'userid', 'mode'], // Add 'userid' to the allowed headers
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these HTTP methods
    };
    this.app.use(cors(corsOptions));
    // this.app.use(helmet());
    this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // this.app.use(multer({ storage: fileStorage, fileFilter }).fields([{ name: 'profile', maxCount: 1 }, { name: 'video', maxCount: 1 }]));
    this.app.use(passport.initialize());

    this.app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    // this.app.use(session({
    //   secret: 'secrect', // Replace this with a secure secret key
    //   resave: false,
    //   saveUninitialized: false
    // }));
    this.app.use(passport.session());

    this.app.use((req, res, next) => {
      try {
        const maxVideoLength = 15 * 1024 * 1024;
        multer({ storage: fileStorage, fileFilter }).fields([
          { name: 'image', maxCount: 1 },
          { name: 'categoryImage', maxCount: 1 },
          { name: 'media', maxCount: 6 }
        ])
          (req, res, (err) => {
            if (err) {
              res.status(400).json({ message: err.message });
            } else {
              next();
            }
          });
      } catch (error) {
        // Handle any synchronous errors here
        res.status(500).json({ message: 'Internal server error.' });
      }
    });

    this.app.use("/upload", express.static("upload"));

    this.app.use('/api', authRouter);
    // this.app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    // this.app.use(passport.authenticate('jwt', { session: true }), router);
    this.app.use(router);

    this.app.set('views', __dirname + '/views');
    this.app.set('view engine', 'pug');

    this.app.get('/', (req, res) => {
      res.send('Welcome to My Website')
    });

    // this.app.get('/api/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // this.app.get('/api/auth/google/callback', 
    //   passport.authenticate('google', { failureRedirect: '/error' }),
    //   function(req: any, res: any) {
    //     // res.redirect('/success');
    //     res.send("google signin success");
    //   });

    this.httpServer = http.createServer(this.app);
  }

  start(cb?: () => void) {
    this.httpServer.listen(config.PORT, () => {
      console.log(`Server started at ${config.HOST}:${config.PORT}`);
      if (typeof cb === 'function') {
        cb();
      }
    });
  }
  stop() {
    this.httpServer.close();
  }
}

