
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h1>My Landing Page</h1>
            </div>
            <div className='item-menu'>
              <a href='https://www.smarttreine.com.br/'>Login</a>
            </div>
  
          </div>
          <div className='form'>
              <h2>Entre em contato:</h2>
              <form>
                <div className='items-form'>
                  <input type='text' placeholder='Seu nome...' />
                  <input type='text' placeholder='Seu e-mail...'/>
                  <input type='text' placeholder='Seu WhatsApp...' />
                  <input type='text' placeholder='Seu interesse...' />
                  <input type='submit' />
                </div>
              </form>
            </div>
        </div>

      </div>
      <div className='container-cards'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
