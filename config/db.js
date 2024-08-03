const mongoose = require("mongoose")
const connectDB = async () => {
await mongoose.connect("mongodb://mongodb.hackuser41.svc.cluster.local");
}
module.exports = {
  connectDB
};


