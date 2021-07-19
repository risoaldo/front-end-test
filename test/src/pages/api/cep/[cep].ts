// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


interface DataProps {
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { cep } = req.query;

  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const { data } = response;

  if (data.erro) {
    return res.send({error: 406, message: 'Cep Inválido'})
  }
  //console.log(data.erro)

  const dataResult: DataProps = {
    cep: data.cep,
    logradouro: data.logradouro,
    localidade: data.localidade,
    uf: data.uf,
  }

  return res.json(dataResult)

}
