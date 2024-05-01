const Button = (props) => {
    const {children = "tombol", warna ="bg-slate-700", onClick =() => {}, type="button" } = props;
        return(
          <button className={`h-10 px-6 font-semibold rounded-md ${warna} text-white`} type={type} onClick={ onClick}>
          {children}
          </button>
          );
    }

    export default Button;