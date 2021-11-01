import Button from '@restart/ui/esm/Button';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';




const googleImg = 'https://i.ibb.co/p3C2Tq2/google.jpg';



const SignIn = () => {
    const { signInUsingGoogle, user, setUser, setIsLoading } = useAuth();

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
            .finally(() => setIsLoading(false));
    }


    console.log(user);

    return (
        <div>
            <div class="alert alert-warning fs-4" role="alert">
                Sign To Continue
            </div>
            <div className='d-flex justify-content-center'>
                <div className="btn btn-danger px-5 py-1 mb-3 fw-bold w-25">
                    <img src={googleImg} alt="" />
                    <Button onClick={handleGoogleSignin} className=" fw-bold text-white btn">Sign In With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;