import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectField } from './SelectField'

export default {
  title: 'Forms/SelectField',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />

export const Base = Template.bind({})
Base.args = {
  size: 'md',
}
