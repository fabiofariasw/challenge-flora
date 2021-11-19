import { useHistory } from 'react-router-dom';

import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaFileSignature } from 'react-icons/fa'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FiVideo } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'

import { Container, Circle, SpanLabel, SubCont, LittleButton, ContButton1, BigButton, ContButton2, ContCircle } from './styles';

import { Main } from '../../components/Main'

import valorFormatado from '../../util/FormatValue';

export function Proposta() {

  const history = useHistory();

  function handlePreviousPage() {
    history.push('/');
  }

  return (
    <Main>
      <Container>
        <h1 style={{ fontWeight: '500', fontFamily: 'Roboto', color: '#4d5f63'}}>Proposta</h1>
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', width: '279px', borderBottom: '1px solid #5e8487', top: '25px', left: '56px'}} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>          
          <ContCircle>
            <Circle>
              <AiOutlineUserAdd />
            </Circle>
            <label>
              Cadastro
            </label>
          </ContCircle>
          <ContCircle>
            <Circle>
              <RiFilePaper2Line />
            </Circle>
            <label>
              Proposta
            </label>
          </ContCircle>
          <ContCircle>
            <Circle>
              <FaFileSignature />
            </Circle>
            <label>
              Assinatura
            </label>
          </ContCircle>
        </div>
        </div>

        <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <SpanLabel>
            <div>
              <label>Quanto você paga para a CPFL Paulista?</label>
              {/* <div> */}
              <p>
                (media histórica)
              </p>
              {/* </div> */}

            </div>
            <span>{valorFormatado(1000)}</span>

          </SpanLabel>

          <SpanLabel>
            <label>Com a solução da Flora</label> <span>{valorFormatado(909.53)}</span>
          </SpanLabel>

          <SpanLabel>
            <label>Conta de luz da CPFL Paulista</label> <span>{valorFormatado(371)}</span>
          </SpanLabel>

          <SpanLabel>
            <label>Fatura Flora</label> <span>{valorFormatado(537.79)}</span>
          </SpanLabel>

          <SpanLabel>
            <label>Economia no mês</label> <span>{valorFormatado(90.47)}</span>
          </SpanLabel>

          <SpanLabel>
            <label>Economia no ano</label> <span>{valorFormatado(1085.64)}</span>
          </SpanLabel>
        </div>

        <div style={{marginTop: '32px'}}>
          <SubCont>
            <label>Garantia de economia</label>
            <p>Sua conta de luz com a distribuidora somada a fatura Flora, será <b>sempre menor</b> do que a sua conta de luz atual.</p>
          </SubCont>

          <SubCont>
            <label>Sem prazo ou multa contratual</label>
            <p>Basta solicitar seu desligamento com um aviso prévio de 90 dias.</p>
          </SubCont>
        </div>

        <div style={{marginTop: '32px'}}>
          <ContButton1>
            <LittleButton>Faq <FiHelpCircle/></LittleButton>
            <LittleButton>Video <FiVideo/></LittleButton>
          </ContButton1>
        </div>

        <div style={{marginTop: '32px'}}>
          <p style={{fontSize: '12px', color: '#4d5f63'}}>*Ao avançar, você ainda não estará contratando.</p>

          <ContButton2>
            <BigButton onClick={() => handlePreviousPage()}>Voltar</BigButton>
            <BigButton>Avançar</BigButton>
          </ContButton2>
        </div>
      </Container>
    </Main>
  );
}