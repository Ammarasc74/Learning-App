const Lesson = require('../../models/learn/lesson');




exports.all_lessons = (res) => {
    Lesson
    .find()
    .select("name  section pdf  test _id")
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            questions: docs.map( doc => { 
                return {
                    _id: doc._id,
                    name: doc.name,
                    section: doc.section,
                    pdf: doc.pdf,
                    test: doc.test,
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