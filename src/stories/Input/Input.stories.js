import { action, actions } from '@storybook/addon-actions'
import React from 'react'
import Input from './Input'


export default {
    title: 'Form/Input-Component/Input',
    component: Input,
}

export const Small = () => <Input onClick={action('Click handler')} size='sm' placeholder='Small size' />
export const Medium = () => <Input {...actions('onClick', 'onMouseHover')} size='md' placeholder='Medium size' />
export const Large = () => <Input size='lg' placeholder='Large size' />

const Template = args => <Input {...args} />

Small.storyName = 'Small Input'

Medium.storyName = "Medium Input"

export const CustomInput = Template.bind({})

CustomInput.args = {
    placeholder: 'Custom Message Type Below ...'
}

CustomInput.argTypes = {
    placeholder: {
        control: {
            type: 'text',
        },

    },
    size: {
        options: ['xs', 'sm', 'md', 'lg'],
        control: { type: 'radio' },
    },
}