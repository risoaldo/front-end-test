import { Container } from './styles'

interface DataProps {
  data: {
    cep: string;
    logradouro: string;
    localidade: string;
    uf: string;
  }
}
export function ShowResultCep({ data }: DataProps) {
  return (
    <Container>
      <ul>
        <li><h4>CEP:</h4>{data.cep}</li>
        <li><h4>Estado:</h4>{data.uf}</li>
        <li><h4>Cidade:</h4>{data.localidade}</li>
        <li><h4>Logradouro:</h4>{data.logradouro}</li>
      </ul>
    </Container>
  )
}