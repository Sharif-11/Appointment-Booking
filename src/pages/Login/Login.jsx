import React from 'react';
import loginSchema from '../../formValidator/login.yup';
import CustomForm from '../../components/Formik/CustomForm';
import CustomField from '../../components/Formik/CustomField';

const Login = () => {
    const initialValues={
        phoneNo:"",
        password:""
    }
    const handleSubmit=(values)=>{

    }
    return (
        <div className='m-7 mt-24'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login Now!</h1>
                    </div>

                    <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
                        <CustomForm initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
                             <CustomField 
                             type="tel" 
                             name='phoneNo' 
                             labelText='Phone'  
                             className="bg-white w-full input input-bordered" 
                             placeholder="Enter Phone Number"/>
                            <CustomField 
                             type="password" 
                             name='password' 
                             labelText='Password'  
                             className="bg-white w-full input input-bordered" 
                             placeholder="Enter Password"/>
                             <div className="form-control mt-6">
                                   <button className="btn bg-success glass text-white" type='submit'>Login</button>
                             </div> 
                        </CustomForm>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;