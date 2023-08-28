import {useForm} from 'react-hook-form';
import * as yup from 'yup';

export const Form = ()=>{
    const {register, handleSubmit} = useForm();

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email:yup.string().required(),
        age: yup.number(),
        password:yup.string().required()
    })

    const onSubmit = (data) =>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter your Full Name..." {...register("fullName")} />
            <input type="text" placeholder=" Enter your Email ..." {...register("email")}/>
            <input type="number" placeholder=" Age ..."{...register("age")}/>
            <input 
            type="password"
            placeholder="Password..." 
            {...register("password")}/>
            <input 
            type="password"
            placeholder="Confirm password..."
            {...register("confirmPassword")}/>
            <input type="submit" />
        </form>
    )
}