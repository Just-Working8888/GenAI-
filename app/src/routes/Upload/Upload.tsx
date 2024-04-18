import classes from "./Upload.module.scss";
import { FC, useEffect, useState } from "react";
import gallary from '../../assets/icon/icons8-gallery-64.png'
import photo from '../../assets/icon/icons8-camera-50.png'
import { useNavigate, useParams } from "react-router-dom";
import { api } from "api";
import Survey from "Components/Test/Test";
interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

interface Category {
    id: number;
    title: string;
    questions: Question[];
}
const Upload: FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Category>();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getQuetionById(Number(id))
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    console.log(categories);

    return (
        <div className={classes.Upload}>
            <button className={classes.back} onClick={() => navigate('/')}><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png" width={40} alt="" />Go back</button>
            <Survey questions={categories?.questions || []} />
            
            <div></div>
        </div>
    );
};

export default Upload;
