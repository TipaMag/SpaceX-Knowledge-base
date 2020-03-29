import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'

const NavbarContainer = (props) => {
  return (
    <Navbar {...props}/>
  )
}

let mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps,{
  
})(NavbarContainer)
