import React, {useState, useRef} from "react";
import './PostShare.css'
import ProfileImg from '../../img/ProfileImg.jpg'
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons"; 

const PostShare =()=>{
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  /*image select from files */
  const onImageChange =(event)=>{
    if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        setImage({
            image: URL.createObjectURL(img),
        });
    }

  };
    return(
        <div className="PostShare">
                 <img src={ProfileImg} alt=""/>
                 <div>
                    <input type="text" placeholder="What's happening"/>
                 
                 <div className="PostOption">
                    <div className="Option" style={{color: "var(--photo)"}}
                    /*this is use to click on uploade image and show driver choose image from files*/
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilScenery/>
                        Photo
                    </div>


                    <div className="Option"style={{color: "var(--video)"}}>
                        <UilPlayCircle/>
                        Video
                    </div>{" "}


                    <div className="Option"style={{color: "var(--location)"}}>
                        <UilLocationPoint/>
                        Location
                    </div>{" "}


                    <div className="Option"style={{color: "var(--shedule)"}}>
                        <UilSchedule/>
                        Shedule
                    </div>
                    <button className="button ps-button">Share</button>
                     {/* hidde image using display: "none*/}
                    <div style={{display: "none"}}>
                        <input type="file"
                         name="myImage" 
                         ref={imageRef} 
                         onChange={onImageChange}/>
                    </div>
                    </div>
 
                {/* (<UilTimes>) => (X) cross icon with share image*/}
                {image && (
                    <div className="PreviewImage">
                        {/*onClick={()=>setImage(null)} use to click on cross and image is disable ya delete*/}
                    <UilTimes onClick={()=>setImage(null)}/>
                    {/*show image on screen */}
                    <img src={image.image} alt=""/>
                    </div>
                )}

         </div>
        </div>
    );
};

export default PostShare;