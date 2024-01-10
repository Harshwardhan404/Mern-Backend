// require('dotenv').config({path : './env'})

import * as dotenv from 'dotenv'
dotenv.config()

import connectDB from "./db/index.js";




connectDB()