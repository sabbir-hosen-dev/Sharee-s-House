import React from 'react'
import data from "../../data/PremiumKatanData"
import Card from '../Sheard/Card/Card'


function PremumKatan() {

  return (
    <section className='container m-auto px-5 py-10'>

      <div className=" mb-5 ">
        <h4 className='font-bold text-text text-xl ' >Premium katan sharee combo</h4>
        <hr className='text-gray' />
      </div>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ">
        {
          data.map(data => <Card key={data.id} data={data} />)
        }
      </div>
    </section>
  )
}

export default PremumKatan
