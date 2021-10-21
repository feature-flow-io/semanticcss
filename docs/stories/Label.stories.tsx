import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label } from './Label'

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Base = Template.bind({})
Base.args = {
  text: 'Label',
  scheme: 'default',
  circle: false,
  dismissable: false,
}
