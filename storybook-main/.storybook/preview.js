import '../styles/globals.css'
import * as NextImage from 'next/image'

/* import Image from 'next/image'

Image.propTypes = {
    unoptimized: null,
}

Image.defaultProps = {
    unoptimized: true,
} */

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
