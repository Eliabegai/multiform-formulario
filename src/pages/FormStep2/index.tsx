import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import * as C from './styles'
import { SelectOption } from '../../components/SelectOption'
import FaceIcon from '@mui/icons-material/Face';
import Person4Icon from '@mui/icons-material/Person4';
import { Link } from 'react-router-dom'

export const FormStep2 = () => {

  const navigate = useNavigate()
  const { state, dispatch }= useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  },[])

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate('/step3')
    } else {
      alert('Preencha os Dados!')
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/4</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr/>

        <SelectOption
          title='Sou Iniciante'
          description='Comecei a programar a menos de 2 anos'
          icon={<FaceIcon fontSize='large' />}
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title='Sou Programador'
          description='Já programa à 2 anos ou mais'
          icon={<Person4Icon fontSize='large' />}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link className='backButton' to='/' > Previous </Link>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  )
}