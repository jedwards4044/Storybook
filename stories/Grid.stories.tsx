import { ComponentStory, ComponentMeta } from '@storybook/react'
import Grid from '../components/Grid'

export default {
    title: 'Modules/Grid',
    component: Grid,
    argTypes: {},
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

const Default = Template.bind({})
Default.args = {
    items: [
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-1.jpg',
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-3.jpg',
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-4.jpg',
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
    ],
    themeStyles: {
        mainColor: '#365070',
        textColor: 'rgb(46, 46, 46)',
        headingColor: 'rgb(46, 46, 46)',
        textColorAccent: '#fff',
        linkColor: 'rgb(230, 211, 65)',
        accentBackgroundColor: '#000',
        accentColor2: 'rgb(230, 211, 65)',
        altColor: 'rgb(230, 211, 65)',
        headerBackground: 'rgb(64,64,64)',
        footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
        navBackground: 'rgb(64,64,64,.9)',
    },
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}

export const Border = Template.bind({})
Border.args = {
    ...Default.args,
    items: [
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-1.jpg',
            border: true,
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-3.jpg',
            border: true,
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-4.jpg',
            border: true,
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
    ],
}

export const Large = Template.bind({})
Large.args = {
    ...Default.args,
    items: [
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-1.jpg',
            border: true,
            headline: 'Headline',
            textSize: 'lg',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-3.jpg',
            border: true,
            textSize: 'lg',
            headline: 'Headline',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
        {
            body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-4.jpg',
            border: true,
            headline: 'Headline',
            textSize: 'lg',
            themeStyles: {
                mainColor: '#365070',
                textColor: 'rgb(46, 46, 46)',
                headingColor: 'rgb(46, 46, 46)',
                textColorAccent: '#fff',
                linkColor: 'rgb(230, 211, 65)',
                accentBackgroundColor: '#000',
                accentColor2: 'rgb(230, 211, 65)',
                altColor: 'rgb(230, 211, 65)',
                headerBackground: 'rgb(64,64,64)',
                footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                navBackground: 'rgb(64,64,64,.9)',
            },
        },
    ],
}
