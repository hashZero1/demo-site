import {Routes,Route} from 'react-router-dom'
import Home from './Components/HomeComponent'
import Automation from './Components/AutomationComponent'
import CloudNativeComponent from './Components/CloudNativeComponent'
import DevComponent from './Components/DevopsComponent'
import CloudComponent from './Components/CloudComponent'
import Navigation from './Components/Navigation'

export default function Routers(){
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='/services/automation' element={<Automation/>}/>
            <Route path='/services/cloud-native' element={<CloudNativeComponent/>}/>
            <Route path='/services/devops' element={<DevComponent/>}/>
            <Route path='/services/cloud-transition' element={<CloudComponent/>}/>
            </Route>
        </Routes>
    )
}