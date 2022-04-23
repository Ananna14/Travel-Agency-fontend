import React from 'react';

const Child = () => {
  return <div>
      <div className="container">
         <h1 className='page-title text-start mt-5'>Child-friendly</h1>
          <p className='text-start'>The modern attitude to children emerged by the late 19th century; 
          the Victorian middle and upper classes emphasized the role of the family and the sanctity 
          of the child, – an attitude that has remained dominant in Western societies ever since. 
          The genre of children’s literature took off, with a proliferation of humorous, 
          child-oriented books attuned to the child’s imagination. Lewis Carroll’s fantasy Alice’s 
          Adventures in Wonderland, published in 1865 in England, was a landmark in the genre; 
          regarded as the first “English masterpiece written for children”, its publication opened 
          the “First Golden Age” of children’s literature.</p>
         <p className='text-start'>The latter half of the 19th century saw the introduction 
         of compulsory state schooling of children across Europe, which decisively removed
          children from the workplace into schools. The market economy of the 19th century 
          enabled the concept of childhood as a time of fun of happiness. Factory-made dolls 
          and doll houses delighted the girls and organized sports and activities were played 
          by the boys. The Boy Scouts was founded by Sir Robert Baden-Powell in 1908,which 
          provided young boys with outdoor activities aiming at developing character, 
          citizenship, and personal fitness qualities.</p>
      </div>
          {/* CARSD_DESIGN */}
     <div className="container mt-5 margin-btm">
     <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card half-width shadow bg-body rounded pb-5 text-start">
             <div className="inner">
             <img src="https://rarathemesdemo.com/travel-agency/wp-content/uploads/sites/117/2017/11/wu-jianxiong-2393181-1-1024x576.jpg" class="card-img-top" alt="..."/>
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
  {/* 1st-card-end */}
          <div class="col">
            <div class="card half-width shadow bg-body rounded pb-5">
             <div className="inner">
             <img src="https://image.freepik.com/free-photo/beautiful-view-nature-trekking-trail-annapurna-base-camp-himalayas-nepal-himalayas-mountain-landscape-annapurna-region-annapurna-base-camp-trek_557878-907.jpg" class="card-img-top" alt="..."/>
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
            <div class="card half-width shadow bg-body rounded pb-5 text-start">
            <div className="inner">
            <img src="https://img.freepik.com/free-photo/beautiful-view-nature-trekking-trail-annapurna-base-camp-himalayas-nepal-himalayas-mountain-landscape-annapurna-region-annapurna-base-camp-trek_557878-916.jpg?size=338&ext=jpg" class="card-img-top" alt="..."/>
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

export default Child;
