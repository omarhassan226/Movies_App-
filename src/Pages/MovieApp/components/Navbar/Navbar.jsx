import React from 'react'
import Logo from './components/Logo/Logo'
import Search from './components/Search/Search'
import Result from './components/Result/Result'

const NavStyle = {
    container:{
        display:'flex' , 
        // gridTemplateColumns:'1fr 1fr 1fr', 
        width:'90%', 
        padding:'32px', 
        height:'72px', 
        backgroundColor:'#6741D9', 
        borderRadius:'9px', 
        margin:'24px auto', 
        textAlign:'center',
        alignItems:'center',
        justifyContent:'space-between'
    }
}

const Navbar = () => {
    return (
        <div style={NavStyle.container}>
            <Logo/>
            <Search/>
            <Result/>
        </div>
    )
}

export default Navbar
