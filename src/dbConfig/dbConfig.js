import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to MongoDB');
        })
        connection.on('error', (e) => {
            console.log('MongoDB error',e);
        })

    } catch (e) {
        console.log('Ope');
        console.log(e);
    }
}