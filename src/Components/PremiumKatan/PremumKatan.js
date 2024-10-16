import React from 'react'
import data from "../../data/PremiumKatanData"
import Card from '../Sheard/Card/Card'


function PremumKatan({ftion}) {

  return (
    <section className='container m-auto px-5 py-10'>

      <div className=" mb-5 ">
        <h4 className='font-[400] text-text text-2xl ' >Premium katan sharee combo</h4>
        <div className='bg-green-500 h-[1.4px] mt-1 '> </div> 
      </div>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ">
        {
          data.map(data => <Card ftion={ftion} key={data.id} data={data} />)
        }
      </div>
    </section>
  )
}

export default PremumKatan
