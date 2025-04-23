import React from 'react'

export default function Main() {
  return (
    <>
    <body className='bg-slate-300 inline-block w-full h-full'>
      
    
    <h2 className="text-3xl font-bold  flex md:ml-32 m-6 mb-10">Farm App</h2>
    <div className="container mx-auto md:ml-32 bg-slate-300  ">
      {/* Farm Statistics */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4 ml-5 md:ml-0 ">
        <h2 className="text-2xl font-bold mb-2">Farm Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">Net Profit</h3>
            <p>Rs. 456780</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">Expenditure</h3>
            <p>Rs. 10020</p>
          </div>
          {/* Add more statistics as needed */}
        </div>
      </div>

      {/* Farm Weekly Record */}
      <div className=" border p-4 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Farm Weekly Record</h2>
        {/* Inventory table or other display */}
      </div>

      {/* Safety Notice */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Safety Notice</h3>
        <p>While I can provide general safety guidelines, it's crucial to consult with legal and agricultural experts to ensure your   safety notice  complies with  <br /> specific regulations and adequately protects your users.</p>
      </div>

      {/* Daily Farm Record */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Daily Farm Record</h2>
        {/* Form or input fields for daily records */}
      </div>
    </div>
    </body>
    </>
  )
}
