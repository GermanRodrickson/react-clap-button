import React from 'react'
import styled, {css} from 'styled-components'
import {storiesOf} from '@storybook/react'
import {Star} from 'react-feather'

import centered from '@storybook/addon-centered'

import ClapButton from '../src'

const CustomIcon = styled(Star)`
  stroke: ${props => props.secondaryColor};
  stroke-width: 1px;
  fill: none;
  ${props =>
    props.isClicked &&
    css`
      fill: ${props => props.secondaryColor};
      stroke: white;
    `};
`

storiesOf('ClapButton', module)
  .addDecorator(centered)
  .addWithJSX('default', () => <ClapButton />)
  .addWithJSX('custom icon', () => (
    <ClapButton
      iconComponent={(props) => <CustomIcon size={40} {...props} />}
    />
  ))
  .addWithJSX('custom color', () => (
    <ClapButton
      primaryColor='#5f27ae'
      secondaryColor='#5f27ae'
    />
  ))
