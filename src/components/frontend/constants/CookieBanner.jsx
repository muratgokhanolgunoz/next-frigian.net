import React from 'react'
import Context from '../../context/Context'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'

const CookieBanner = (props) => {

    const { t } = useTranslation('translation')

    return (
        <Context.Consumer>
            {(context) => (
                props.funcGetCookie().language === undefined && context.state.cookie.language === undefined
                    ?
                    (
                        <div id="cookie-banner">
                            <div className="cookie-banner" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                <h5>{t('privacy.PRIVACY_HEADER')}</h5>
                                <p>{t('privacy.PRIVACY_TEXT')}</p>
                                <Button className="cookie_banner_button template-button template-button-dark" onClick={() => props.funcSetCookie(window.navigator.language.substr(0, 2) === "en" ? "us" : window.navigator.language.substr(0, 2))}>{t('privacy.PRIVACY_BUTTON')}</Button>
                                <h6 onClick={() => context.setCookie({ language: null })}>Kapat</h6>
                            </div>
                        </div>
                    )
                    : null
            )}
        </Context.Consumer >
    )
}

CookieBanner.propTypes = {
    funcSetCookie: PropTypes.func.isRequired,
    funcGetCookie: PropTypes.func.isRequired,
}

export default CookieBanner