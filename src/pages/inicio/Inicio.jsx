import S from './inicio.module.scss';
import read from '../../assets/read.png'
import balance from '../../assets/balance.png'
import transform from '../../assets/transform.png'
import read from '../../assets/network.png'

export default function Inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={network} alt="Descrição da imagem" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>
          <article>
            <img src="" alt="Descrição da imagem" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src="" alt="Descrição da imagem" />
            <p>.</p>
          </article>
          <article>
            <img src="" alt="Descrição da imagem" />
            <p>.</p>
          </article>
        </section>
      </section>
    </main>
  )
}
