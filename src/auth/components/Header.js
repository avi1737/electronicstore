import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles ,MenuItem,IconButton, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router-dom';


const StyledAppBar = withStyles({
    root:{
        backgroundColor:"#047BD5",
        color:"white",
        justifyContent:"center",
        alignItems:"right"
    }
})(AppBar);

const Header = (props) => {

    const history = useHistory();

    const redirectToCart = () => {
        const url = '/Cart';
        history.push(url);
    }

    const redirectToMyAccount = () => {
        const url = '/Account';
        history.push(url);
    }

    return(
        <>
        <StyledAppBar>
        <Toolbar>
            
          <Typography>
            { props.heading }
          </Typography>

          <IconButton aria-label="cart">
        <Badge badgeContent={1} color="secondary">
         <ShoppingCartIcon  style = {{ color:"white"}} onClick = {redirectToCart}/>
         </Badge>
         </IconButton>

        
         <IconButton aria-label="cart">
        <Badge color="secondary">
         <PersonIcon style = {{ color:"white"}} onClick = {redirectToMyAccount}/>
         </Badge>
         </IconButton>

         <IconButton aria-label="cart">
        <Badge color="secondary">
         <SettingsIcon style = {{ color:"white"}} onClick = {redirectToMyAccount}/>
         </Badge>
         </IconButton>

         <IconButton aria-label="cart">
        <Badge badgeContent = {2} color="secondary">
         <NotificationsIcon style = {{ color:"white"}} onClick = {redirectToMyAccount}/>
         </Badge>
         </IconButton>

        </Toolbar>
      </StyledAppBar>
        </>
    )
}

export default Header;