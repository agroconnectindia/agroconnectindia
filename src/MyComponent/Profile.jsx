
import React, { useState } from 'react';
import gra from './icon/gradient.png'
import DashboardWrapper from './DashboardWrapper'
import Header from './Header'
import Footer from './Footer'

function Profile() {

return (
<DashboardWrapper>



<div className=' md:w-[1250px] md:absolute md:top-6 md:left-[200px]  overflow-y-auto'>
  <Header pagename="LatestNews"/>
 

<Footer/>
</div>



</DashboardWrapper>
);
}

export default Profile;