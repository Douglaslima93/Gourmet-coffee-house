import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
                <li><a href="horario">HORÁRIO</a></li>
            </ul>
        </div>
    </header>

    <main>
        <section className='banner'>
            
            <h1>GOURMET-COFFEE HOUSE</h1>

        </section>

        <section>

            <h2>EXPERIMENTE O MELHOR CAFÉ DA CIDADE!</h2>
            <p>O café não é apenas uma simples bebida que foi preparada por alguém. O café é momento e nós mostraremos isso.
                Frases como "Que tal tomarmos um café" ou até então "Vamos fazer um café?" são demonstrações de que um dos
                momentos que mais reforçam os laços para com o próximo está finalmente para por acontecer. Fraco ou forte?
                Com ou sem açucar? Você deseja açucar ou adoçante? Estas são frases que ouvimos em vários lugares. Em quase
                todos os locais onde a pessoas há também café. Pareceos intrinsecos ao café. Aqui na <strong>Gourmet-Coffee House</strong>
                serviremos para você com muito carinho o nosso querido e amado Amaro's Coffee diretamnete do nosso cafezal em 
                Minas Gerais. Para todos nós, café é coisa séria e merece todo o cuidado.
            </p>
        </section>

        <section>
            <h2>Um bom café é o motivo de alegria!</h2>
        </section>

        <section>
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

        <section>
            <h2>A vida só começa depois do café!</h2>
        </section>

        <section>
            <div>
                <h2>Contatos & Endereço</h2>
            </div>

            <div>Localização</div>

            <div>
                <p>Telefone & Whatsapp: <a href="tel:+5515996017070">(15)99601-7070</a></p>
                <p>E-mail:<a href="mailto:gourmet.coffeehouse@gmail.com">gourmet.coffeehouse@gmail.com</a></p>
                <p>Endereço: Av Café Brasileiro, 1650 - Boituva - SP</p>
            </div>
        </section>

        <section>
            <h2>HORÁRIO DE FUNCIONAMENTO</h2>
            <ul>
                <li>Segunda</li>
                <li>Terça</li>
                <li>Quarta</li>
                <li>Quinta</li>
                <li>Sexta</li>
                <li>Sábado</li>
                <li>Domingo</li>
            </ul>
        </section>

        <section>
            <footer>
                <span>Gourmet - Coffee House - Todos os direitos reservados</span>
                <p>Desenvolvido por: Douglas Lima</p>
                <p>Link</p>
            </footer>
        </section>


    </main>
      </div>
      
  )
}

export default App
