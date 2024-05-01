import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormLogin = (props) => {
  const HandelLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email',event.target.email.value);
    localStorage.setItem('password',event.target.password.value);
    window.location.href = "/product";
  }
    return(
        <form onSubmit={HandelLogin}>
          <InputForm label="Email" type="email" placeholder="Email@gmail.com" name="email"/>
          <InputForm label="Password" type="password" placeholder="***********" name="password"/>
          <Button warna="bg-blue-600 w-full " type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;