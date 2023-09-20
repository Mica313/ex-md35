import Rest from '../../Models/Rest'
import ladolce from '../../assets/images/ladolce.png'
import sushi from '../../assets/images/sushi.png'
import ListaRestaurantes from '../../components/ListaRestaurantes'

const listaHome: Rest[] = [
  {
    id: 1,
    category: 'sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: ladolce
  }
]

const Home = () => (
  <>
    <ListaRestaurantes rest={listaHome} />
  </>
)
export default Home
