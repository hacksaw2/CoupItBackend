import mongoose from "mongoose";

const CouponSchema =  new mongoose.Schema({
    couponId:Number,
    coupon:String,
    type:String,
    expiry:String,
    reward:String
})

const CouponModel =  mongoose.model("coupon",CouponSchema)
export default CouponModel;