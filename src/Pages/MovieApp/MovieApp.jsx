import React from 'react'

const style = {
    moveContainer:{
        display:'flex', 
        flexDirection:'column', 
        height:'100vh',
        backgroundColor:'#212529'
    }
}

const MovieApp = ({children}) => {
    return (
        <div style={style.moveContainer}>
            {children}
        </div>
    )
}

export default MovieApp
