// db.js
const mongoose = require('mongoose');
mongoose.set('debug', true);


// Replace 'your_database' with your actual database name
const mongoURI = 'mongodb://127.0.0.1:27017/your_database_name';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = connectDB;
