import React from 'react'
import Person from './Person'

function NameList(){
    const names =['Tony', 'Rogers', 'tChala','Tony']
    const persons =[]
    const nameList = names.map((name, index) => <h2 key ={index}> {index} {name}</h2>)
    return <div>{nameList}</div>
}
export default NameList

  // const persons =[
    //{
      //  id:1,
        //name: 'Tony',
        //age: 30,
         //skill: 'React'
    //},
    //{
      //  id:2,
        //name: 'Rogers',
        //age: 25,
         //skill: 'Angular'
    //},
    //{
      //  id:1,
       // name: 'tchala',
       // age: 28,
        // skill:'vue'
    //}
//]
//const personList = persons.map(person => <Person key={person.name} person={person} />)
 //return <div>{personList}</div>
//}
