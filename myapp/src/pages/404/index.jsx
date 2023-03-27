import React from 'react'

import Layout from '../../containers/Layout'
import StyleWrapper from './style'

export default function () {
    return (
        <Layout>
            <StyleWrapper>
                <div className='page-not-found'>
                    <h1>404</h1>
                    <a href='/delivery'>go to delivery page</a>
                </div>
            </StyleWrapper>
        </Layout >
    )
}
