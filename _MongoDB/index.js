const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDatabase')
.then(() => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt Connect to mongodb' , err))


//Schema

const courseSchema = new mongoose.Schema({
    name : {type : String ,  required : true , minlength : 5 , maxlength : 100},
    tags : {type: Array , validate : {
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category:{
        type: String,
        require: true,
        enum:['DSA' , 'Web' , 'Mobile' ,  'DS & ML']

    },
    creator : {type : String ,  required : true},
    publishedDate : {type:Date , default:Date.now},
    isPublished : {type: Boolean ,  required:true},
    rating :{type : Number , required : function(){return this.isPublished}}
}) 

// bluprint
const Course = mongoose.model('Course' , courseSchema) 


async function createCourse(){

    const course = new Course({
        name:'Nodejs',
        tags:['express' , 'mongoDB'],
        category:'Web',
        creator:'Eren Yeager',
        isPublished: true,
        rating:4.9
    
    })

    try {
        const result = await course.save()
        console.log(result)

        // await course.validate()
        
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
        
    }
}

createCourse()

// >>> COMPARISION OPERATOR

// eq(equal)
//gt(greater than)
//gte(greater than equal to)
//lt
//lte

//in >> range
//not in


// LOGICAL OPERATOR

// OR 
// AND




// Query Documents 
async function getCourses(){
    const courses = await (await Course.find({rating : {$gt : 4}}).select({name : 1}))
    console.log(courses)
}

// getCourses()




async function updateCourse(id){

    let course = await Course.findById(id)
    if(!course) return ;
    course.name = 'DS & ML'
    course.creator = 'Ram Prakash'
    const updatedCourse = await course.save()
    console.log(updatedCourse)

}

// updateCourse('65c5a94c1127941e5f915bbd')


// DELETE

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)

    console.log(course)


}

// deleteCourse('65c5a94c1127941e5f915bbd')