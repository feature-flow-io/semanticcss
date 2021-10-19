import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    scheme: {
      options: ['default', 'primary', 'danger'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Base = Template.bind({})
Base.args = {
  scheme: 'default',
  size: 'md',
  label: 'Sign up',
  disabled: false,
  block: false,
}
