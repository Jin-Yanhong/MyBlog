import React from 'react'

import { Tab, Button } from '../../components/basic'

import { ReactDOM } from 'react'

import { getUrlParams } from '../../static/js/util'

export default class ArticlePage extends React.Component {
    render() {
        return (
            <div>
                ArticlePage
                <div>
                    <Button></Button>
                    <Tab></Tab>
                </div>
            </div>
        )
    }
}
