import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapPage from './Pages/MapPage'
import Tabela from './components/Tabela'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <header>
        <div className='menu-header'>
            <img src='./img/coffee.png'/>
            <ul>
                <li><a href="#informacoes">INFORMAÇÕES</a></li>
                <li><a href="#contatos">CONTATOS</a></li>
                <li><a href="#horario">HORÁRIO</a></li>
            </ul>
        </div>
    </header>

    <main>
        <section className='banner'>
            
            <h1>GOURMET-COFFEE HOUSE</h1>

        </section>

        <section id='informacoes'>
            <div className='cidade'>
            <h2>EXPERIMENTE O MELHOR CAFÉ DA CIDADE!</h2>
            <p>O café não é apenas uma simples bebida que foi preparada por alguém. O café é momento e nós mostraremos isso.
                Frases como "Que tal tomarmos um café" ou até então "Vamos fazer um café?" são demonstrações de que um dos
                momentos que mais reforçam os laços para com o próximo está finalmente para por acontecer. Fraco ou forte?
                Com ou sem açucar? Você deseja açucar ou adoçante? Estas são frases que ouvimos em vários lugares. Em quase
                todos os locais onde a pessoas há também café. Pareceos intrinsecos ao café. Aqui na <strong> Gourmet-Coffee House</strong> serviremos 
                para você com muito carinho o nosso querido e amado Amaro's Coffee diretamnete do nosso cafezal em 
                Minas Gerais. Para todos nós, café é coisa séria e merece todo o cuidado.
            </p>
            </div>
        </section>

        <section className='alegria'>
            <h2>Um bom café é o motivo de alegria!</h2>
        </section>

        <section className='cafe-gourmet'>
            <h2>O QUE É O CAFÉ GOURMET?</h2>
            <p>Segundo  a Metodologia de Avaliação Sensorial da SCA (Specialty Coffee Association), usada no mundo
                todo, um café especial é todo aqule que atinge, no minimo, 80 pontos na escala de pontuação da Metodologia
                (que vai até 100). O café <strong>Gourmet</strong> destaca-se nos atributos fragrância, corpo, harmonia, doçura
                e sabor, nesse caso, possuindo sabores e aromas que podem ser trufados, herbais, doces com caramelo e chocolate.
                Podemos fazer uma analogia com o vinho, pois o café <strong>Gourmet</strong> também pode ser apreciado por suas
                caracteristicas sensoriais e não apenas pela cafeina. Através do excelente padrão de cultivo, cuidado pós-colheita e da torra,
                você poderá experimentar diferentes e deliciosos tipos de café.
            </p>
        </section>

        <section className='vida'>
            <h2>A vida só começa depois do café!</h2>
        </section>

        <section className='conheca'>
            <h2>CONHEÇA O CAFÉ GOURMET-COFFEE-HOUSE</h2>
            <p>As caracteristicas desse tipo do café gourmet da <strong>Coffee House</strong> são muito marcantes.
            O seu corpo vai depender da variedade do blend: quanto mais "pesado" ele for na boca, maior o corpo.
            Quanto menor a sua pesagem menor o corpo. O nosso café gourmet é o mais bem avaliado no processo de produção,
            para que ele não venha com nenhum tipo de defeito. O aroma é bem perceptivel e o consumidor consegue sentir nitidamente
            , sendo que ele pode variar entre 4 aromas: florado, citrico, achocolatado, frutado. Essa variação são consequências
            dos grãos do tipo Arábico. Tudo isso vai depender da torra, quanto mais clara ela for, maior será a acidez.</p>
        </section>

        <section className='mapa' id='contatos'>
            <div className='contato-endereco'>
                <h2>Contatos & Endereço</h2>
            </div>

            <div className='localizacao'>
                <MapPage/>
            </div>

            <div className='contato'>
                <p>Telefone & Whatsapp: <a href="tel:+5515996017070">(15)99601-7070</a></p>
                <p>E-mail:<a href="mailto:gourmet.coffeehouse@gmail.com">gourmet.coffeehouse@gmail.com</a></p>
                <p>Viale Europa, 32, 24048 Treviolo BG, Itália</p>
            </div>
        </section>

        <section className='funcionamento' id='horario'>
            <h2>HORÁRIO DE FUNCIONAMENTO</h2>
            <div className='dias-horas'>
            <Tabela/>
            </div>
        </section>

        <section className='rodape'>
            <footer>
                <span>Gourmet - Coffee House - Todos os direitos reservados</span>
                <p>Desenvolvido por: <strong>Douglas Lima</strong></p>
                <div className='rede-social'>
                <a href='https://www.linkedin.com/in/douglas-lima-95073aa2/'><img src='./img/linkedin.png'/></a>
                <a href='https://github.com/Douglaslima93'><img src='./img/github.png'/></a>
                <a className='seta' href=''><img src='./img/send-letter.png'/></a>
                </div>
                
            </footer>
        </section>


    </main>
      </div>
      
  )
}

export default App
