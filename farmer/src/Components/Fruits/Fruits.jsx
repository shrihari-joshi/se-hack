import React from 'react'

const Fruits = () => {
  return (
    <div>
            <div className='mainbase'>
                <p className='base'>Discover Your Seed Sanctuary</p>
            </div>
            <ul className='products'>
                {seeds.map((seed, index) => (
                    <li key={index}>
                        <div> 
                            <SeedProduct
                                seed={seed}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
        </div>
  )
}

export default Fruits