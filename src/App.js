import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        helptext: 1,
        
    }
    this.onCclick = this.onCclick.bind(this)
}

  render() {
  return( 
  <div>
    <h1 onClick={this.onCclick}>{this.state.helptext} Times clicked</h1>
  </div>
  )    
  }
onCclick(){
  this.setState({helptext:( this.state.helptext +=1
  )})
}
}



export default App