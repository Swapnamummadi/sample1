

const db = require('mongoose')

const data = db.Schema({

    userEmail:String,
    details:{
        name:String,
        imageUrl:String,
        genres:[],
        vote_average:Number,
        release_date:String,

        
    }
   
    

})

const dbdata = new db.model('MovieDetails',data)

module.exports = dbdata