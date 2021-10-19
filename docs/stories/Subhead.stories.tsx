import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Subhead } from './Subhead'

export default {
  title: 'Subhead',
  component: Subhead,
} as ComponentMeta<typeof Subhead>

const Template: ComponentStory<typeof Subhead> = (args) => <Subhead {...args} />

export const Base = Template.bind({})
Base.args = {
  heading: 'Subhead component',
  description: 'The subhead is a subdued header style with a light bottom border.',
}
