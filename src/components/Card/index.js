import { Container } from './styles';

export function Card({id, title, body}) {

  return (
    <Container key={id}>
      <h2>
        {title}
      </h2>
      <p>
        {body}
      </p>
    </Container>
  )
}