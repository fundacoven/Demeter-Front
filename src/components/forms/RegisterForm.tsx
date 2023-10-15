import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/definitions/schemas/register";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    const onSubmit = async (data: any) => {

        // llamar API para registrar al usuario 
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // redireccionar a página de inicio de sesión o mostrar mensaje de éxito
        } else {
            // mostrar mensaje de error de registro fallido
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")}/>
            <p>{errors.name?.message}</p>

            <input {...register("email")}/>
            <p>{errors.email?.message}</p>

            <input type="password" {...register("password")}/>
            <p>{errors.password?.message}</p>

            <input type="submit" />

        </form>
    );
}

export { RegisterForm };