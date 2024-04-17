import classes from "./Upload.module.scss";
import { FC } from "react";
import gallary from '../../assets/icon/icons8-gallery-64.png'
import photo from '../../assets/icon/icons8-camera-50.png'
import { useNavigate } from "react-router-dom";

const Upload: FC = () => {

    const navigate = useNavigate()
    return (
        <div className={classes.Upload}>
            <button className={classes.back} onClick={() => navigate('/')}><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png" width={40} alt="" />Go back</button>

            <div className={classes.Upload_content} >
                <div className={classes.Upload_content_uploaded}>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="" />
                </div>
                <div className={classes.Upload_content_actions}>
                    <button onClick={() => navigate('/result')}>
                        <img src={gallary} alt="" />
                        Choose photo from gallery
                    </button>
                    <button onClick={() => navigate('/result')}>
                        <img src={photo} alt="" />
                        Take photo with camera
                    </button>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Upload;
