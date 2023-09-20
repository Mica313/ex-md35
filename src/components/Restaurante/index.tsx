import Tag from '../Tag'
import { Card, Descrcao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const Restaurante = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Descrcao>{description}</Descrcao>
  </Card>
)

export default Restaurante
