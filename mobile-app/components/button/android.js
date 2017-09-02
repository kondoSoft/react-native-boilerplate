import React from 'react'
import styled from 'styled-components/native'

const ButtonText = styled.Text`
  color:black;
`
const ButtonView = styled.View`
  border: 1px solid #E6E6E6;
  border-bottom-color: #A4A4A4;
  padding: 15px 30px;
  background: #D6D6D6;
`
const Button = (props)=>{
  const {children} = props
  return (
    <ButtonView>
      <ButtonText>{children}</ButtonText>
    </ButtonView>
  )
}
export {Button}
