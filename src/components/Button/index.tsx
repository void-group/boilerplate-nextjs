import { stitchesStyle } from '../../pages/styles'

export const SButton = stitchesStyle('button', {
  background: '$primary',
  color: '$primary',

  padding: '$16'
})

export const Button = () => {
  return <SButton>OPAI VEI</SButton>
}