import React from 'react'
import './App.scss'

import ArticlePage from './pages/article/index'
import ThreejsPage from './pages/threejs/index'
import OpenLayersPage from './pages/openLayers/index'

function App() {
    return (
        <div className="App">
            <ArticlePage></ArticlePage>
            <ThreejsPage></ThreejsPage>
            <OpenLayersPage></OpenLayersPage>
        </div>
    )
}

export default App
