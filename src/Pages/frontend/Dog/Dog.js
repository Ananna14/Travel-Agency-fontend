import React from 'react';
import './Dog.css'

const Dog = () => {
  return <div>
      <div className="container">
      <h1 className='page-title text-start mt-5'>Dog-friendly</h1>
      <p className='text-start'>Companion dog usually describes a dog that does not work, providing only companionship
         as a pet, rather than usefulness by doing specific tasks. Many of the toy dog breeds 
         are used only for the pleasure of their company, not as workers. Any dog can be a 
         companion dog, and many working types such as retrievers are enjoyed primarily for 
         their friendly nature as a family pet, as are mixed breed dogs. The American Kennel 
         Club also offers a Companion dog title for judged dog obedience competitions.</p>
         <p className='text-start'>Breed groups argue that any dog in the working group type is inherently a “working”
            dog, while others argue that only a dog with an active occupation, either in a
             breed-related field (such as water trials for retrievers or herding trials for 
             herding dogs) or in a breed-nonspecific field that requires training and 
             discipline, such as being assistance dogs or participating in dog agility, 
             can be considered a working dog.</p>
             <p className='text-start'>Dogs that have been chosen for traits that make a convenient pet are generally 
               smaller breeds, and the tradition of keeping pretty dogs for no purpose other 
               than to be court decorations stems back thousands of years to Chinese nobility. 
               The Pekingese and the Pug are both examples of canines chosen for their ability
                to be pets. In the case of the Pekingese, it was for their lion-like demeanor;
                 for the Pugs, it was for their “lucky” wrinkles and their monkey-like face.</p>
      </div>
      {/* CARSD_DESIGN */}
     <div className="container mt-5 margin-btm">
     <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card half-width shadow bg-body rounded text-start pb-5">
             <div className="inner">
             <img src="https://rarathemesdemo.com/travel-agency/wp-content/uploads/sites/117/2017/10/soroush-karimi-2913531-1-1024x683.jpg" class="card-img-top" alt="..."/>
             </div>
              <div class="card-body">
                <h4 class="card-title fw-bold">Everest Base Camp Trek</h4>
                <div className='d-flex mt-5'>
                  {/* part-1-start */}
                    <div className=''>
                     <p> <i class="fas fa-map-marker-alt mx-2"></i>Nepal<br/></p>
                     <p> <i class="far fa-clock mx-2"></i><span>15 - 14</span><br/><span>Days Nights </span></p>
                    </div>
                  
                      {/* part-1-end */}
                  {/* part-2-start */}
                    <div className='margin'>
                      <span className='offer'> 24% off</span><br/><br/>
                      <h3 className='fw-bold'>$ 1,300</h3>
                    </div>
                      {/* part--end */}
                </div>
                <button className='btn w-100 mt-5'>View Details</button><br/><br/>
                <hr/><br/>
                <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                <small class="card-text gray-color ">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</small>
              </div>
            </div>
          </div>
  {/* 1st-card-end */}
          <div class="col">
            <div class="card half-width shadow bg-body rounded text-start pb-5">
             <div className="inner">
             <img src="https://rarathemesdemo.com/travel-agency/wp-content/uploads/sites/117/2017/11/pavel-l-8641-1-1024x683.jpg" class="card-img-top" alt="..."/>
             </div>
              <div class="card-body text-start">
                <h5 class="card-title fw-bold">Annapurna Base Camp Trek</h5>
                {/* offer */}
                <div className='d-flex mt-5'>
                  {/* part-1-start */}
                    <div className=''>
                     <p> <i class="fas fa-map-marker-alt mx-2"></i>Nepal<br/></p>
                     <p> <i class="far fa-clock mx-2"></i><span>15 - 14</span><br/><span>Days Nights </span></p>
                    </div>
                  
                      {/* part-1-end */}
                  {/* part-2-start */}
                    <div className='margin'>
                      <span className='offer'> 24% off</span><br/><br/>
                      <h3 className='fw-bold'>$ 1,200</h3>
                    </div>
                      {/* part--end */}
                </div>
                <button className='btn w-100 mt-5'>View Details</button><br/><br/>
                <hr/><br/>
                <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                <small class="card-text gray-color ">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</small>
              </div>
            </div>
          </div>
{/* 2nd-card-end */}
          <div class="col">
            <div class="card half-width shadow bg-body rounded text-start pb-5">
            <div className="inner">
            <img src="https://rarathemesdemo.com/travel-agency/wp-content/uploads/sites/117/2017/11/niko-soikkeli-3333911-1-1024x683.jpg" class="card-img-top" alt="..."/>
            </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Ghandruk Trek</h5>
                <div className='d-flex mt-5'>
                  {/* part-1-start */}
                    <div className=''>
                     <p> <i class="fas fa-map-marker-alt mx-2"></i>Nepal<br/></p>
                     <p> <i class="far fa-clock mx-2"></i><span>15 - 14</span><br/><span>Days Nights </span></p>
                    </div>
                  
                      {/* part-1-end */}
                  {/* part-2-start */}
                    <div className='margin'>
                      <span className='offer'> 24% off</span><br/><br/>
                      <h3 className='fw-bold'>$ 1,200</h3>
                    </div>
                      {/* part-2-end */}
                </div>
                <button className='btn w-100 mt-5'>View Details</button><br/><br/>
                <hr/><br/>
                <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                <small class="card-text gray-color">Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</small>
              </div>
            </div>
          </div>
{/* 3rd-card-end */}
        </div>
     </div>
  </div>;
};

export default Dog;
