const mongoose = require("mongoose");
const url = "mongodb+srv://vaahwan:vaahwan@cluster0.xxaleu8.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(url)

module.exports = {connection};