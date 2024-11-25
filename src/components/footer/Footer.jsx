import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'


export default function footer() {
  return (
    <footer>
    <section>
      <h3>4004-4404</h3>
      <nav>
        <a href=""> <img src={facebook} alt="" /> </a>
        <a href=""> <img src={twitter} alt="" /> </a>
        <a href=""> <img src={youtube} alt="" /> </a>
        <a href=""> <img src={linkedin} alt="" /> </a>
        <a href=""> <img src={instagram} alt="" /> </a>

      </nav>
    </section>
    <section>
      <p> Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
    </section>
    </footer>
  );
}