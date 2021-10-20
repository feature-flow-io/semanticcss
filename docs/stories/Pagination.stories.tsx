import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = () => <Pagination />

export const Base = Template.bind({})
