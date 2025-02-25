import Side from "./Side"
import Header from "./Header"
import Footer from './Footer'
import Sidebar from './Sidebar'
import { gsap } from "gsap";
import {useRef} from 'react'
import { useGSAP } from '@gsap/react';

const DashboardWrapper = ({children})=>{

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);

    useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(
      box1Ref.current,
      { opacity: 0, x: -10 }
      
    )
     
      .from(
        box2Ref.current,
        { opacity: 0, scale: 0.5 },
        
      )
    }, []);

    return(
        <div>
            <div  className="hidden md:block"><Side /></div>
            <Sidebar/>

            <div >
            {children}
            </div>
            </div>
    )
}

export default DashboardWrapper