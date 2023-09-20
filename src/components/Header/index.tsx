import { HeaderBKG } from './styles'
import ImgFundo from '../../assets/images/Hero.png'

const Header = () => (
  <>
    <HeaderBKG style={{ backgroundImage: `url(${ImgFundo})` }} />
    <div className="container"></div>
  </>
)

export default Header
