import { ComponentStory, ComponentMeta } from '@storybook/react'
import Home from '../../pages/index'
import moduleData from '../../components/moduleData'
import React from 'react'

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} moduleData={moduleData} />

export const Default = Template.bind({})
Default.args = {}
