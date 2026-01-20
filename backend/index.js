import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'



dotenv.config();


const app = express()
const PORT = process.env.PORT || 8080;
// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
 //connecting with frontend
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));



//apis
 app.use('/api/v2/user', userRoute);
// app.use('/api/v1/company', companyRoute);


// checkig working of backend app.get('/', (req, res) => {
//     res.send('Welcome to the Alumni Network API');
// });

app.listen(PORT, () => {
     connectDB();
    console.log(`Server is running on port ${PORT}`);
    
   
});