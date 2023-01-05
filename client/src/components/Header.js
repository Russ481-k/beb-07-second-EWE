
import '../assets/css/header.css'

const Header = ({user}) => {
    // const [isLogin, setIsLogin] = useState()
    const isLogin = true;



    return(
        <header>
            <div className="CI">
                <div className="logo" >
                    <a href="/"><i className='fas fa-drumstick-bite fa-2xl' 
                    ></i></a>
                </div>
                <div className="ICName">
                    <a href="/" className="bigName">
                    <h1>EWE</h1></a>
                    <a href="/" className="smallName">
                    <h5>Eat Write Earn</h5></a>
                </div>
            </div>
                {isLogin?
                <div className="userMenu">
                    <div className='user'>
                        <div>
                            <i className='fas fa-user '></i>
                            {/* <img src='{userImg}'></img> */}
                        </div>
                        <div className="userTab">
                            <h3>{user.nickname}</h3>
                            <a href="/mypage">My Page</a>
                            <a href="/market">NFT Market</a>
                            <a href="/">ETH Faucet</a>
                            <a href="/">Log Out</a>
                            <a href="/">Secession</a>
                        </div>
                    </div>
                </div>    
                :
                    <div className="userMenu">
                        <div className="Login">
                            <a href="/">
                            <h4>Login</h4>
                            </a>
                            <div className='user_info'>
                                <input placeholder='ID'></input>
                                <input placeholder='PW'></input>
                            </div>
                        </div>
                        <div className="signup">
                            <a href="/signup">
                            <h4>SignUp</h4>
                            </a>
                        </div>
                        <div className='user'>
                            <div>
                                <i className='fas fa-user '></i>
                                {/* <img src='{userImg}'></img> */}
                            </div>
                        </div>
                    </div> 
                }
        </header>
    );
}
export default Header;