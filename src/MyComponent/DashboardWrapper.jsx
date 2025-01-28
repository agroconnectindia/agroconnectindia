import Side from "./Side"
import Header from "./Header"
import Footer from './Footer'
import Sidebar from './Sidebar'

const DashboardWrapper = ({children})=>{
    return(
        <div>
            <div className="hidden md:block"><Side /></div>
            <Sidebar/>

            {children}
            </div>
    )
}

export default DashboardWrapper