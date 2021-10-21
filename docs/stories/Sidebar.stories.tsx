import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sidebar } from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {
    itemCount: {
      control: { type: 'number', min: 4, step: 1 },
    },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Base = Template.bind({})
Base.args = {
  itemCount: 4,
  header: true,
  footer: false,
  className: '',
}

Base.parameters = {
  layout: 'fullscreen',
}
