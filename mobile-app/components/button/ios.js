import React from 'react'

import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Ionicons'

const ButtonText = styled.Text`
  color:#007AFF;
  flex:1;
`
const ButtonView = styled.View`
  border: 1px solid #C7C7CC;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`

const IconStyled = styled(Icon)`
  display: inline-block;
  flex:1;
`
const Button = (props)=>{
  const {
    children,
    iconColor,
    icon
  } = props
  return (
    <ButtonView>
      {icon ?
        <IconStyled name={`ios-${icon}`} size={30} color={iconColor ? iconColor : null} /> :
        null
      }
      <ButtonText>{children}</ButtonText>
    </ButtonView>
  )
}
export {Button}
