import React from 'react'

export const Card = () => {
  return (
   <>
   
   <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{ borderRadius: '20px'}}>
      <div class="card-body" >

      <img src="/image/w.jpg" alt="Description" width="100%" />
        <p class="card-text">Alexa</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{ borderRadius: '20px'}}>
      <div class="card-body">
      <img src="/image/w.jpg" alt="Description" width="100%"  />

        <p class="card-text">Alex Pereira</p>
        
      </div>
    </div>
  </div>
</div>
   
   </>
  )
}
