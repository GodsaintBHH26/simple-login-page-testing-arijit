const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel