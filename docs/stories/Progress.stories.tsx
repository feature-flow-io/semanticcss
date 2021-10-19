import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Progress } from './Progress'

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export const Base = Template.bind({})
Base.args = {
  width: 50,
  color: '#16a34a',
  size: 'md',
}
