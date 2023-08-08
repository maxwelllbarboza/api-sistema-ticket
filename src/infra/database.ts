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

echo "# api-sistema-ticket" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/maxwelllbarboza/api-sistema-ticket.git
git push -u origin main