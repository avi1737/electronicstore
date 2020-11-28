import { React , Component} from 'react';
import '../styles/main.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import adminimage from '../styles/Muallem.PNG';
import { Link ,Route, Switch, useRouteMatch} from 'react-router-dom';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';

const Admin = () => {

    let { path, url} = useRouteMatch();
    return(
        <>
        <div className='body__pd'>
         <header className='admin__header' id="header">
             
             <h4>Admin Dashboard</h4>
             <div className='admin__logout'>
             <h4>Hello, Muallem</h4>
             </div>
         </header>

         <div className='admin__sidebar'>
             <nav className='admin__nav'>
                 <ul>
                     <li><Link className='item' to={`${path}`}>Home <HomeIcon/></Link></li>
                     <li><Link className='item' to={`${url}/Add-Product`}>Add Products</Link></li>
                     <li><Link className='item' to={`${url}/Add-Category`}>Add Category</Link></li>
                     <li><Link className='item' to={`${url}/Ordered-Product-Details`}>Ordered Product Details</Link></li>
                     <li><Link className='item' to={`${url}/Curtomer-Details`}>Customer Details</Link></li>
                     <li><Link className='item' to={`${url}/Logout`}>Logout <ExitToAppIcon/></Link></li>
                 </ul>
             </nav>
         </div>

         <div className='admin__content'>
                <Switch>
                <Route exact path={`${path}/Add-Product`}>
                     <AddProduct/>
               </Route>

               <Route exact path={`${path}/Add-Category`}>
                     <AddCategory/>
               </Route>
                </Switch>
         </div>

        </div>
        </>
    )
}

export default Admin;