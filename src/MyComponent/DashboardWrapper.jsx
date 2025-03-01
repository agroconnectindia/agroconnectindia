import Side from "./Side"
import Header from "./Header"
import Footer from './Footer'
import Sidebar from './Sidebar'


const DashboardWrapper = ({children})=>{

    

    return(
        <div>
            <div className="block md:hidden absolute top-20 px-3 left-0 right-0 z-50">
            <Header pagename="Agro-Connect"/>
            </div>
            <Side />
            

            <div >
            {children}
            </div>
            </div>
    )
}

export default DashboardWrapper