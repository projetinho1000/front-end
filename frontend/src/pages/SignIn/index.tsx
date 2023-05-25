import './styles.css'

function SignIn() {
    return (
        <div className="market-container-login">
            <div className='market-user'>
                <strong>ola</strong>
                <small>email</small>
            </div>

            <h1>Acesse sua conta </h1>

            <div className="market-input">
                <input type="email" placeholder='Email' />
                <p />
                <input type="password" placeholder='Senha' />
            </div>

            <div className="btn-container">
                <button type="button" className="market-button-login">
                    Entra
                </button>

                <button type="button" className="market-button-google">
                    Entra com Google
                </button>
            </div>

        </div>
    )
}

export default SignIn;