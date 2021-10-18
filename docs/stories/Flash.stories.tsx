import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flash } from './Flash'

export default {
  title: 'Flash',
  component: Flash,
} as ComponentMeta<typeof Flash>

const Template: ComponentStory<typeof Flash> = (args) => <Flash {...args} />

export const Base = Template.bind({})
Base.args = {
  text: 'This is a really long flash message and it should wrap comfortably.',
  scheme: 'notice',
  full: false,
  dismissable: true,
}
