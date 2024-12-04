import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import S from './footer.module.scss';

export default function footer() {
  return (
    <footer>
      <section className={S.boxSocial}>
        <h3>4004-4404</h3>
        <nav>
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={youtube} alt="YouTube" /></a>
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
