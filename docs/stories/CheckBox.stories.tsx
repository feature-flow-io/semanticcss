import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckBox } from './CheckBox'

export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Available for hire',
  note: '',
}
