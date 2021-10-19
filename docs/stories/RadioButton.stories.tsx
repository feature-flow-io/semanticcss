import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioButton } from './RadioButton'

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Select this option',
  note: '',
}
