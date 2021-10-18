import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Base = Template.bind({})
Base.parameters = {
  layout: 'centered',
}

Base.args = {
  label: 'Tooltip',
  position: 's',
}
