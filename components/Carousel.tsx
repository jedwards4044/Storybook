//import Slider from 'react-slick'
import Slider from 'react-slick'
import styles from './carousel.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselProps, ThemeStyles } from './types'
import theme from '../pages/theme.json'
import RendererContext from './RendererContext'
import { useContext } from 'react'

function Carousel(carouselData: CarouselProps, themeStyles: ThemeStyles) {
    const { domainImage } = useContext(RendererContext)
    const themeStylesObj = {
        color: `${themeStyles['textColor']}`,
        borderColor: `${themeStyles['textColor']}`,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 0',
    }
    const imageStyles = {
        borderColor: `${themeStyles['mainColor']}`,
        borderStyle: 'solid',
        borderWidth: '0 2px 0 2px',
    }

    //Sets slide count to 1 if there are more slides than items to show, or if text shows
    function setSlide() {
        if (carouselData.modLayout === 'images' && carouselData.items.length >= carouselData.slideCount) {
            return carouselData.slideCount
        } else {
            return 1
        }
    }

    const settingsImage = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: setSlide(),
        slidesToScroll: 1,
        nextArrow: <NextArrowImage />,
        prevArrow: <PrevArrowImage />,
        autoplay: carouselData.autoPlay || false,
        autoplaySpeed: 2600,
    }

    const settingsText = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: setSlide(),
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.hasImage]: carouselData.modLayout === 'images',
                    [styles.hasText]: carouselData.modLayout === 'text',
                })}
                /* style={carouselData.modLayout === 'images' ? imageStyles : themeStyles} */
                style={carouselData.modLayout === 'images' ? imageStyles : themeStylesObj}
            >
                {carouselData.modLayout === 'images' && (
                    <div className={styles.slideItems}>
                        <Slider {...settingsImage}>
                            {carouselData.items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    {item.imageUrl && (
                                        <div className={styles.imageTile}>
                                            <Image src={domainImage(item.imageUrl)} layout="fill" objectFit="cover" alt={item.altText || ''} quality="50" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
                {carouselData.modLayout === 'text' && (
                    <div className={styles.slideItems}>
                        <Slider {...settingsText}>
                            {carouselData.items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.text}>
                                        <p>{item.text}</p>
                                        <h3>{item.byline}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </div>
    )
}

function NextArrow(props: any) {
    const { className, style, onClick, themeStyles } = props

    const themeStylesObj = {
        color: `${theme['textColor']}`,
    }
    const themeStyles2 = {
        color: `${theme['textColorAccent']}`,
    }

    return (
        <div className={cn(className, styles.nextBtn)} style={{ color: `${theme['textColor']}`, ...style, themeStyles2 }} onClick={onClick}>
            next &gt;
        </div>
    )
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.prevBtn)} style={{ ...style }} onClick={onClick}></div>
}

function NextArrowImage(props: any) {
    const { className, style, onClick, themeStyles } = props
    return (
        <div
            className={cn(className, styles.imageBtns, styles.nextImageBtn)}
            style={{ ...style, backgroundColor: `${theme['mainColor']}` }}
            onClick={onClick}
        ></div>
    )
}

function PrevArrowImage(props: any) {
    const { className, style, onClick, themeStyles } = props
    return (
        <div
            className={cn(className, styles.imageBtns, styles.prevImageBtn)}
            style={{ ...style, backgroundColor: `${theme['mainColor']}` }}
            onClick={onClick}
        ></div>
    )
}

export default Carousel
