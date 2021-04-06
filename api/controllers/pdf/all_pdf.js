const PDF = require('../../models/learn/pdf');




exports.all_pdf = (res) => {
    PDF
    .find()
    .select("name content _id")
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            Pdfs: docs.map( doc => { 
                return {
                    _id: doc._id,
                    name: doc.name,
                    content: doc.content,
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