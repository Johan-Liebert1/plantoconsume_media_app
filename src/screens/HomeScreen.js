import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'

const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        dispatch( getAnimeDetails(1) )

    }, [dispatch])

    return (
        <div>
            <h1>This is the home screen</h1>



        </div>
    )
}

export default HomeScreen
