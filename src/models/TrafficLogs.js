const mongoose = require('mongoose');

const actionsSchema = new mongoose.Schema({
  J4: { type: Number, required: true },
  J5: { type: Number, required: true },
  J6: { type: Number, required: true },
  J7: { type: Number, required: true },
  clusterJ8_J9: { type: Number, required: true }
}, { _id: false }); // Disable _id for subdocument

const trafficDataSchema = new mongoose.Schema({
  actions: { type: actionsSchema, required: true },
  step: { type: Number, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['fixed-controller', 'running'] // Add more statuses if needed
  },
}, { timestamps: true }); // Adds createdAt and updatedAt

const TrafficData = mongoose.model('TrafficData', trafficDataSchema);

module.exports = TrafficData;
