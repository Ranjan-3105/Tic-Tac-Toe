import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       backgroundColor : 'black',
    }
  }
  changeBg = (col)=>{
    this.setState({
      backgroundColor : col,
    })
  }
  render() {
    return (
      <div className='w-screen h-screen flex flex-col justify-end insetb-11' style={{backgroundColor : this.state.backgroundColor}}>
        <div className='rounded-3xl bg-white bg-opacity-20 justify-center flex flex-wrap inset-11'>
          <button className='rounded-full px-4 py-3 text-white bg-red-600 justify-center items-center'
          onClick={()=>{this.changeBg('red')}}
          >RED</button>

          <button className='rounded-full px-4 py-3 text-white bg-green-600 justify-center items-center'
          onClick={()=>{this.changeBg('green')}}
          >GREEN</button>
          
          <button className='rounded-full px-4 py-3 text-white bg-blue-600 justify-center items-center'
          onClick={()=>{this.changeBg('blue')}}
          >BLUE</button>
        </div>
      </div>
    )
  }
}

export default App
