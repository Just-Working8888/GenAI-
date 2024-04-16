import { Button } from "Components";
import classes from "./Result.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Result: FC = () => {
   
    const navigate = useNavigate()
    return (
        <div className={classes.Result}>
            <div className={classes.Result_image}>
                <img src="https://tochka.by/upload/resize_cache/iblock/2e7/768_512_1/ggyawgg2glfew3bbtvs5947wlpj6978v.jpg" alt="" />
            </div>
            <Button>
                Save
            </Button>
            <button onClick={() => navigate('/')} className={classes.Result_btn}>
                More pics
            </button>
        </div>
    );
};

export default Result;
