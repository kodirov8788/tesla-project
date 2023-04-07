import React from 'react'
import Tesla from '../../components/teslaShop/Tesla/Tesla'
import Detalies from '../../components/teslaShop/Detalies/Detalies'
import Del from '../../components/teslaShop/Del/Del'
import Lear from '../../components/teslaShop/Lear/Lear'
import Modelx from '../../components/teslaShop/Modelx/Modelx'
import ModelY from '../../components/teslaShop/ModelY/ModelY'
import Chargin from '../../components/teslaShop/Chargin/Chargin'
import Banner from '../../components/teslaShop/Banner/Banner'
import Lif from '../../components/teslaShop/Lif/Lif'
import Footer from '../../components/teslaShop/Footer/Footer'

function ShopPage() {
    return (
        <div>
            <Tesla />
            <Detalies />
            <Del />
            <Lear />
            <Modelx />
            <ModelY />
            <Chargin />
            <Banner />
            <Lif />
            <Footer />
        </div>
    )
}

export default ShopPage