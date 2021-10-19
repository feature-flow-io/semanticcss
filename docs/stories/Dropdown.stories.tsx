import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'centered',
}

Base.args = {
  direction: 'se',
  icon: false,
}
