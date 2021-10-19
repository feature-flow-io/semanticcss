import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from './TextField'
import { TextFieldWithLabel } from './TextFieldWithLabel'

export default {
  title: 'Forms/TextFieldWithLabel',
  component: TextFieldWithLabel,
  subcomponents: { TextField },
} as ComponentMeta<typeof TextFieldWithLabel>

const Template: ComponentStory<typeof TextFieldWithLabel> = (args) => <TextFieldWithLabel {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Email address',
  placeholder: 'xyz@example.com',
}
