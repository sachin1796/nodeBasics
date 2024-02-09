const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDatabase')
.then(() => console.log('Connection is Successful'))
.catch(err => console.error('Couldnt Connect to mongodb' , err))


//Schema

const courseSchema = new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : {type:Date , default:Date.now},
    isPublished : Boolean,
    rating :Number
}) 

// bluprint
const Course = mongoose.model('Course' , courseSchema) 


async function createCourse(){

    const course = new Course({
        name:'BhaiLang',
        creator:'Bhai',
        isPublished: true,
        rating: 3.6
    })
    
    const result = await course.save()
    console.log(result)

}

// createCourse()

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

deleteCourse('65c5a94c1127941e5f915bbd')