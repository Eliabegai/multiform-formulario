import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import * as C from './styles'
import { Link } from 'react-router-dom'

export const FormStep3 = () => {
  const navigate = useNavigate()
  const { state, dispatch }= useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  },[])

  const handleConfirm = () => {
    if(state.email !== '' && state.github !== '') {
      navigate('/step4')

    } else {
      alert('Preencha os dados!')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo.</p>

        <hr/>

        <label>
          Qual seu email?
          <input 
            type='email'
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input 
            type='url'
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className='backButton' to='/step2' > Previous </Link>
        <button onClick={handleConfirm}>Confirm</button> 
      </C.Container>
    </Theme>
  )
}