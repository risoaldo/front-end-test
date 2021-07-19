import { FormEvent, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import InputMask from 'react-input-mask';


import { Container, Content } from '../styles/index.style';
import { Button } from '../components/Button';
import { ShowResultCep } from '../components/ShowResultCep';

interface DataProps {

  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;

}
export default function Home() {

  const [dataCep, setDataCep] = useState({} as DataProps)

  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [logradouro, setLogrdouro] = useState('');

  const [validCep, setValidCep] = useState(false);


  async function handleSearchCep(e: FormEvent) {
    e.preventDefault()
    let cepFormated = cep.replace(/[^0-9]/g, '')


    if (cepFormated.length < 8) {
      alert("Digite um CEP válido!");
      return;
    }

    const response = await axios.get(`http://localhost:3000/api/cep/${cepFormated}`);
    const { data } = response;

    if (data.error) {
      alert(data.message);
      setCep('')
      setDataCep(data)
      return;
    }


    if (!!data) {
      setDataCep(data)
      setCep('')
    }



  }

  return (
    <>
      <Head>
        <title>Buscar Cep</title>
      </Head>

      <Container>
        <Content>
          <InputMask name="cep" mask="99999-999" value={cep} onChange={e => setCep(e.target.value)} />
          <Button onClick={handleSearchCep} name="buscar">
            Buscar CEP
          </Button>
        </Content>

        {
          dataCep ? <ShowResultCep data={dataCep} /> : ''
        }
      </Container>
    </>
  )
}

