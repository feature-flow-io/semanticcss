import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextArea } from './TextArea'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Base = Template.bind({})
Base.args = {
  placeholder: 'Search...',
  contrast: true,
}
