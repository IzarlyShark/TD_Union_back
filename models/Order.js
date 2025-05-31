import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
       squareWarehouse: {
            type: Number,

       },
        heightWarehouse: {
            type: Number,

        },
        heightPallet: {
            type: Number,

        },
        weightPallet: {
            type: Number,

        },
        typePallet: {
            type: String,

        },
        typeTech: {
            type: String,

        },
        userPhone: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
})

export default mongoose.model('Order', OrderSchema)