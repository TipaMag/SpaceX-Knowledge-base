import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Header from './Header'

const HeaderContainer = (props) => {
   return (
      <Header {...props}/>
   )
}

let mapStateToProps = (state) => ({
   
})
export default compose(
   connect(mapStateToProps, {

   })
)(HeaderContainer)