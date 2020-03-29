import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Launches from './Launches'

import { getLaunches } from './../../redux/launches-reducer'


const LaunchesContainer = (props) => {

    useEffect(() => {
        props.getLaunches()
    }, [])

    return (
        <Launches {...props}/>
    )
}

let mapStateToProps = (state) => ({
    launches: state.launches.launchesData
})
export default compose(
    connect(mapStateToProps, {
        getLaunches
    }),

)(LaunchesContainer)