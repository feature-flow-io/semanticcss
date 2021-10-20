import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from './Box'

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    rowCount: {
      control: { type: 'number', min: 0, step: 1 },
    },
  },
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Base = Template.bind({})
Base.args = {
  rowCount: 2,
  scheme: 'default',
  body: true,
  header: true,
  footer: true,
}
