import React, { useEffect } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import Container from '../../Container/Container';
import { useQuery } from '../../common/hooks/useQuery';
import { loginUser } from './../../Services/loginService';
import { useAuth, useAuthDispatch } from './../../Context/AuthContextProvider';
import './Auth.scss'


const initialValues = {
    email: '', password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('ایمیل اشتباه است').required('لطفا ایمیل خود را وارد کنید'),
    password: Yup.string().min(6, 'رمز عبور کوتاه است').required('لطفا رمز عبور خود را وارد کنید')
})

const Auth = () => {

    const auth = useAuth();
    const setAuth = useAuthDispatch();
    const navigate = useNavigate();
    const query = useQuery();
    const redirect = query.get("redirect") || "/panel"

    useEffect(() => {
        if (auth) navigate(redirect)
    }, [redirect, auth])

    const onSubmit = async (values) => {
        const { data } = await loginUser(values)
        setAuth(data);
        navigate("/panel");

    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnMount: true,
        validationSchema
    })

    return (
        <Container>
            <section className="form">
                <form className="form-wrap" onSubmit={formik.handleSubmit}>
                    <h3 className="form-wrap__title">Login to access the files</h3>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('email')} placeholder=" " name="email" />
                        <label htmlFor="email" className="form-wrap__box-label">Email</label>
                        {formik.errors.email && formik.touched.email && <div className='form-wrap__box-error'>{formik.errors.email}</div>}
                    </div>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('password')} placeholder=" " name="password" />
                        <label htmlFor="password" className="form-wrap__box-label">Password</label>
                        {formik.errors.password && formik.touched.password && <div className='form-wrap__box-error'>{formik.errors.password}</div>}

                    </div>
                    <input type="submit" className="form-wrap__button" value="Create Account" disabled={!formik.isValid} />
                </form>
            </section>
        </Container>
    );
};

export default Auth;
