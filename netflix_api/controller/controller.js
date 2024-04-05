

const model = require('../model/db')
exports.create = (req,res)=>{

    const{userEmail,name,imageUrl,genres,vote_average,release_date} = req.body
    let createdata =new model({userEmail,details:{name,imageUrl,genres,vote_average,release_date}})

    createdata.save()
    .then(data=>{
        res.json(data)
        
    })}

    exports.getData = (req,res)=>{

        const userEmail = req.query.userEmail;
        model.find({userEmail})
        .then(data=>{
            res.json(data)
            // console.log(data)
        })
    }

    //req.body => refers to it stores the request data into body 
    //The req object contains the request, that is, the thing the client sends to your server
    exports.updatedata = (req,res)=>{
        const{userEmail,details:{name,imageUrl,genres,vote_average,release_date}} = req.body 

        const getid = req.params.id
        // console.log(getid)
        model.findByIdAndUpdate(getid,{userEmail,details:{name,imageUrl,genres,vote_average,release_date}})
        .then(data=>{
            res.json(data)
            console.log(data)
        })
        
    }

    exports.deleteData = (req,res)=>{
        const getid = req.params.id
        // console.log(getid)
        model.findByIdAndDelete(getid)
        .then(data=>{
            res.json(data)
            console.log(data)
        })
    }