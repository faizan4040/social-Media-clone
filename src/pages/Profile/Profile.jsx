import React from 'react'
import './Profile.css'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import RightSide from '../../Components/RightSide/RightSide'
const Profile =()=>{
    return(
        <div className="Profile">
        <ProfileLeft/>
<div className="Profile-center">
        <ProfileCard/>
        <PostSide/>
           
</div>
      <RightSide/>
        </div>
    )
}

export default Profile