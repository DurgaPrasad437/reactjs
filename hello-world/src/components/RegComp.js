import React, { Component} from 'react'

class RegComp extends Component{

    render(){
        console.log('Reg Comp render')
        return(
            <div>
         Regular Compnent{this.props.name}
            </div>
        )
    }    
}

export default RegComp