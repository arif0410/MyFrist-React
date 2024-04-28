import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
    return(
        <form action="">
          <InputForm label="Email" type="email" placeholder="Email@gmail.com" name="email"/>
          <InputForm label="Username" type="text" placeholder="RUDIY" name="username"/>
          <InputForm label="Password" type="password" placeholder="***********" name="password"/>
          <Button warna="bg-blue-600 w-full">Daftar</Button>
        </form>
    )
}

export default FormRegister;