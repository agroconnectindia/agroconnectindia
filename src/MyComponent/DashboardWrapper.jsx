import Side from "./Side"
import Header from "./Header"
import Footer from './Footer'

const DashboardWrapper = ({children})=>{
    return(
        <div>
            <Side/>
            

            {children}
            </div>
    )
}

export default DashboardWrapper