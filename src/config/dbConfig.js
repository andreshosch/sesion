
// //CONEXION A LA DB EN MONGO

const config = {
    mongoDb: {
        url: 'mongodb+srv://andres:Dorian23@cluster0.ohq5xhd.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

module.exports=config;

// const mongoose = require('mongoose');

// //  function to connect to the database
// const connect = async () => {
//   await mongoose.connect('mongodb+srv://andres:Dorian23@cluster0.ohq5xhd.mongodb.net/ecommerce?retryWrites=true&w=majority');
// };

// module.exports = { connect };