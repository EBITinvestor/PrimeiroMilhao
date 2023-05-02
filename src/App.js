
import './App.css';
import chamada from './chamada.png'
import enrique from './enrique.png'
import header from './HEADER.png'
import vector from './Vector.png'
import sobre from './sobremim.png'
import final from './chamadafinal.png'
import group from './group.png'

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <div style={{ width: '100VW', backgroundColor: '#F90000', display: 'flex', justifyContent: 'center' }}>
          <div style={{ height: '600px', width: '1080px', backgroundColor: '#F90000', display: 'flex' }}>
            <img src={header} style={{ position: 'absolute', width: '650px', height: '33px', marginTop: '27px', marginLeft: '75px' }}></img>
            <img src={chamada} style={{ width: '460px', height: '211px', marginTop: '178px', marginLeft: '75px' }}></img>
            <img src={enrique} style={{ width: '426px', height: '521px', marginTop: '79px', marginLeft: '75px' }}></img>
            <a style={{ width: '65px', height: '65px', position: 'absolute', marginTop: '562px', marginLeft: '940px' }} href='https://api.whatsapp.com/send?phone=5511989420800&text=Estou%20interessado%20no%20seu%20curso%20EBITinvestor,%20por%20favor,%20me%20revele%20o%20segredo'> <img src={vector} style={{ width: '100%', height: '100%' }}></img></a>
          </div>
        </div>
        <div style={{ width: '100VW', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div style={{ height: '480px', width: '1080px', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
            <img src={sobre} style={{ position: 'absolute', width: '616px', height: '392,17px', marginTop: '46px', marginLeft: '75px' }}></img>
          </div>
        </div>
        <div style={{ width: '100VW', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div style={{ height: '320px', width: '1080px', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
            <img src={final} style={{ position: 'absolute', width: '616px', height: '392,17px', marginTop: '27px', marginLeft: '75px' }}></img>
          </div>
        </div>
        <div style={{ width: '100VW', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '1080px', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
            <div class="container" style={{ width: '1080px', marginLeft: '325px' }}>
              <form id="conclude-form" method="POST">
                <h3>Fique Por dentro das Novidades</h3>
                <div class="message-container">
                  <p id="status-message"></p>
                </div>
                <form-element>
                  <label for="name">Nome</label>
                  <input type="text" name="name" id="name" />
                </form-element>
                <form-element>
                  <label for="email" class="req">Email</label>
                  <input type="email" name="email" id="email" required />
                </form-element>
                <form-element>
                  <label for="message" class="req">Menssagem</label>
                  <textarea name="message" id="message" required></textarea>
                </form-element>
                <form-element class="center">
                  <button type="submit" name="submit-button" id="submit-button">Submit</button>
                </form-element>
                <input type="hidden" name="recaptcha" id="recaptcha" />
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: '100VW', backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <div style={{ height: '240px', width: '1080px', backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
            <img src={group} style={{ position: 'absolute', width: '1080px', height: '198px', marginTop: '27px', marginLeft: '75px' }}></img>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
