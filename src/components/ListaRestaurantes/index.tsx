import Rest from '../../Models/Rest'
import Restaurante from '../Restaurante'
import { Container, List } from './styles'

export type Props = {
  rest: Rest[]
}

const ListaRestaurantes = ({ rest }: Props) => (
  <Container>
    <div className="container">
      <List>
        {rest.map((rest) => (
          <Restaurante
            key={rest.id}
            title={rest.title}
            image={rest.image}
            description={rest.description}
            infos={rest.infos}
            category={rest.category}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaRestaurantes
