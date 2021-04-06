const Subject = require('../../models/learn/subject');




exports.subject_get_All = (req, res, next) => {
    Subject
    .find()
    .select("name description _id")
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            subjects: docs.map( doc => { 
                return {
                    _id: doc._id,
                    name: doc.name,
                    description: doc.description,
                    request: {  
                        type: 'GET',
                        url: 'http://localhost:3000/semester/' + doc._id
                    } 
                } 
            }) 
        });  
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    }) 
}