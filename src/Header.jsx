import logo from '../src/assets/logo.png'
export default function Header(){
    return(
        <header id='header'>
        <img src={logo} alt="image" />
        <h1>investment calculator</h1>
        </header>
    );
}