import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectMenu } from './SelectMenu'

export default {
  title: 'SelectMenu',
  component: SelectMenu,
  argTypes: {
    itemSize: {
      control: { type: 'number', min: 1, step: 1 },
    },
  },
} as ComponentMeta<typeof SelectMenu>

const Template: ComponentStory<typeof SelectMenu> = (args) => <SelectMenu {...args} />

export const Base = Template.bind({})
Base.args = {
  itemSize: 3,
  position: 'left',
  header: true,
  filter: true,
  footer: true,
  selected: true,
}
