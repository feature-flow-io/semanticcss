import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from './TextField'

export default {
  title: 'Forms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Base = Template.bind({})
Base.args = {
  size: 'md',
  placeholder: 'Search...',
  icon: 'none',
  contrast: true,
}
