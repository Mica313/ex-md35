class Rest {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.infos = infos
    this.title = title
    this.image = image
  }
}
export default Rest
