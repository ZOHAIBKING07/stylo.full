import React from 'react'

const Chart = () => {
  return (
    <div className='chart container-fluid' style={{marginTop:'30px'}}>
        <div className="row">
            <img className='col-6 col-lg-3 col-md-6 col-sm-6 py-2' src="https://stylo.pk/cdn/shop/files/Shoes-360x400_360x.jpg?v=1719915291" />
            <img className='col-6 col-lg-3 col-md-6 col-sm-6 py-2' src="https://stylo.pk/cdn/shop/files/Pret-360x400_360x.jpg?v=1719915291" />
            <img className='col-lg-6 col-md-12 col-sm-12 py-2' src="https://stylo.pk/cdn/shop/files/Bag_b1fc123c-c4ba-4710-9ac9-00dcd262f6f6_720x.jpg?v=1719915290" />
        </div>
        <div className="row">
            <img className='col-lg-6 col-md-12 col-sm-12 py-2' src="https://stylo.pk/cdn/shop/files/Ath_1512x.jpg?v=171411706" />
            <img className='col-6 col-lg-3 col-md-6 col-sm-6 py-2' src="https://stylo.pk/cdn/shop/files/360x400-Wedding_720x.jpg?v=1714117060" />
            <img className='col-6 col-lg-3 col-md-6 col-sm-6 py-2' src="https://stylo.pk/cdn/shop/files/wedding_1870e41a-b094-4571-ac53-a797436335e0_360x.jpg?v=1719915290" />
        </div>
    </div>
  )
}

export default Chart;

