import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import * as C from './styles'
import { Link } from 'react-router-dom'

export const FormStep4 = () => {
  const navigate = useNavigate()
  const { state, dispatch }= useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      })
    }
  },[])

  const handleConfirm = () => {
    if(state.email !== '' && state.github !== '') {
      alert('CONFIRM')
    } else {
      alert('Preencha os dados!')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>{state.name}, agora para finalizar!</h1>
        <p>Conferir os Dados.</p>

        <hr/>

        <label>
          <strong>Name:</strong> {state.name}
        </label>
        <label>
          <strong>Level:</strong> {state.level === 0 ? 'Sou Iniciante' : 'Sou Programador'}
        </label>
        <label>
          <strong>Email:</strong> {state.email}
        </label>
        <label>
          <strong>Email:</strong> {state.github}
        </label>

        <Link className='backButton' to='/step3' > Previous </Link>
        <button onClick={handleConfirm}>Confirm</button> 
      </C.Container>
    </Theme>
  )
}