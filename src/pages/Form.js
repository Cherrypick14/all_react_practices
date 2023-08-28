import {useForm} from 'react-hook-form';


export const Form = ()=>{
    const {register, handleSubmit} = useForm();

    const onSubmit = () =>{
        console.log("Hi, it is a Monday");
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter your Full Name..." {...register("fullName")} />
            <input type="text" placeholder=" Enter your Email ..." {...register("email")}/>
            <input type="text" placeholder=" Age ..."{...register("age")}/>
            <input 
            type="password"
            placeholder="Password..." 
            {...register("password")}/>
            <input 
            type="password"
            placeholder="Confirm password..."
            {...register("confirm password")}/>
            <input type="submit" />
        </form>
    )
}