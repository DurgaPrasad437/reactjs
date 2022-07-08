import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
        super(props)

        this.state ={
            isLoggedIn: true
        }
    }

    render(){
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
       //best one to use
        //return this.state.isLoggedIn ?(
         //   <div>Welcome Prasad</div> 
           // ):(
          //  <div> Welcome Guest </div>
        //)
        //let message 
        //if (this.state.isLoggedIn) {
        //    message = <div>Welcome Prasad</div>
       // } else {
        //    message = <div>Welcome Guest</div>
       // }
        //return <div>{message}</div>

      //  if (this.state.isLoggedIn) {
      //      return  <div>Welcome Prasad</div>

      //  } else {
       //     return <div>
       //             welcome Guest
       //         </div>
            
        //}
        //return(
         //   <div>
          // <div>Welcome Prasad</div>
          // <div>Welcome Guest</div>
          //  </div>
        //)
    }
}
export default UserGreeting