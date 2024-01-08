import React  from 'react'
import Cover from '../../img/Cover.jpg'
import ProfileImg from '../../img/ProfileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () =>{
    const ProfilePage = true;
    return(
        <div className='ProfileCard'>
              
        <div className='ProfileImages'>
            <img src={Cover} alt=""/>
             <img src={ProfileImg} alt=""/>
        </div> 

        <div className='ProfileName'>
                <span>Faizan Saifi</span>
                <span>Seniar UI/UX Designer</span>
        </div>

        <div className='followStatus'>
            <hr/>
            <div>
                <div className='follow'>
                    <span>9,879</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>1</span>
                    <span>Followers</span>
                </div>

             {ProfilePage && (
                <>
                <div className='vl'>

                </div>
                <div className="follow">
                    <span>3</span>
                    <span>Post</span>
                </div>
                </>
             )}

            </div>
            <hr/>
        </div>

        {ProfilePage ? "" : <span> My Profile </span>}
    </div>

    )
}

export default ProfileCard