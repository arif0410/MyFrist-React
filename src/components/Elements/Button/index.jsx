const Button = (props) => {
    const {children = "tombol", warna ="bg-slate-700"} = props;
        return(
          <button className={`h-10 px-6 font-semibold rounded-md ${warna} text-white`} type="submit">
          {children}
          </button>
          );
    }

    export default Button;