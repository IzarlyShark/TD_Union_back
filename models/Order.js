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
        },
        userName: {
            type: String,
        },
})

export default mongoose.model('Order', OrderSchema)