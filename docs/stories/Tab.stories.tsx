import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tab } from './Tab'

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    tabItemCount: {
      control: { type: 'number', min: 1, step: 1 },
    },
  },
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'fullscreen',
}

Base.args = {
  icon: false,
  counter: false,
  tabItemCount: 1,
}
