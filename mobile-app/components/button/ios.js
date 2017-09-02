import React from 'react'
import styled from 'styled-components/native'

const ButtonText = styled.Text`
  color:#007AFF;
`
const ButtonView = styled.View`
  border: 1px solid #C7C7CC;
  padding: 5px;
  border-radius: 3px;
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
