import Button from '@restart/ui/esm/Button';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';




const googleImg = 'https://i.ibb.co/p3C2Tq2/google.jpg';



const SignIn = () => {
    const { signInUsingGoogle, user, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                console.log(user)
                history.push(redirect_uri);
            })
    }


    console.log(user);

    return (
        <div className="">
            <h1>Signin</h1>

            <div className="border border-gray rounded-pill px-5 py-1 mb-3 fw-bold d-flex justify-content-center">
                <img src={googleImg} alt="" />
                <Button onClick={handleGoogleSignin} className="ps-3 fw-bold border-0">Sign In With Google</Button>
            </div>
        </div>
    );
};

export default SignIn;