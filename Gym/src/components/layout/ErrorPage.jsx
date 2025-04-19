import { useNavigate, useNavigation } from "react-router-dom";

export const ErrorPage = () => {
    let navigate = useNavigate();
    return (
        <div className="container1">
            <section className="gymErrorSection">
                <button className="errorPageButton btn btn-outline-danger  " onClick={() => { navigate(-1) }}>Click Here to Go Back</button>
                <img className="gymErrorImage" src="images/gymErrorImage.webp" alt="" />
            </section>
        </div>
    );
}