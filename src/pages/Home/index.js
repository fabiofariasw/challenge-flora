import { useEffect, useState } from 'react';
// import {} from './styles';

import { Main } from '../../components/Main';
import { TitleCont } from '../../components/TitleCont';
import { CardsCont } from '../../components/CardsCont';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Api } from '../../services/Api';
import { Button } from '../../components/Button';
import { ContainerSearch } from './styles';

import { FiSearch } from 'react-icons/fi'

export function Home() {

  const [data, setData] = useState([]);
  const [dataAux, setDataAux] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  async function getData() {
    try {
      const { data } = await Api.get('/posts');
      setData(data);
      setDataAux(data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleFilterInput() {
    if (currentInput.trim().length === 0) {
      return setDataAux(data);
    }
    
    const fabio = data.filter(item => {
      return item.title.toLowerCase().includes(currentInput.toLowerCase());
    })
    setDataAux(fabio);
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <Main>
      <TitleCont>
        <h2>
          Bem Vindo ao teste da <span>Flora Energia</span>
        </h2>
      </TitleCont>
      <ContainerSearch>
        <Input
          type="text"
          onChange={(e) => setCurrentInput(e.target.value)}
          placeholder="Pesquisar"
        />
        <Button
          type="submit"
          onClick={() => handleFilterInput()}
        > 
          <FiSearch />
        </Button>
      </ContainerSearch>
      {/* Insira o INPUT SEARCH aqui */}
      <CardsCont>
        {dataAux && (
          dataAux.map(item => (
            <Card
              title={item.title}
              body={item.body}
              id={item.id}
            />   
          ))
        )}
        {/* adicionar logica para quando nao tiver resultados */}
      </CardsCont>
    </Main>
  );
}
