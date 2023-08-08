import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect(
           'mongodb+srv://maxwellbarboza:110278max@cluster0.ubw96yt.mongodb.net/code',
            
        );
        console.log('Connect database seccess.')
    } catch (error) {
        console.log("error", error)
        
        
    }
}
