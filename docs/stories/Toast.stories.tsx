import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Toast } from './Toast'

export default {
  title: 'Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />

export const Base = Template.bind({})
Base.args = {
  text: 'A short toast message',
  dismissable: true,
}
