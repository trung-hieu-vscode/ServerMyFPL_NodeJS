const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SubsSchema = new Schema({
    id: { type: ObjectId },
    tenmonhoc: { type: String, require: true },
    gvdunglop: { type: String, require: true },
    loaimon: { type: String, require:true }

});

module.exports = mongoose.models.subjects || mongoose.model('subjects', SubsSchema);