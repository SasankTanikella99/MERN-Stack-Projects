import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import Logo from './shared/Logo'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
               to="/chat" 
               bg="#00fffc" 
               text="Go To Chat" 
               textColor="black" 
              />
              <NavigationLink 
                to= "/"
                bg= "#51538f" 
                text= "Logout"
                textColor= "white" 
                onClick = {auth.logout}
              />
            
            </>
           ) : (
            <>
              <NavigationLink
               to="/login" 
               bg="#088398" 
               text="Login" 
               textColor="black" 
              />
              <NavigationLink 
                to= "/signup"
                bg= "#23a90e" 
                text= "Signup"
                textColor= "white" 

              />
            </> 
            )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
