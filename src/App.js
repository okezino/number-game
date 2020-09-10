import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="first d-flex  justify-content-around mt-100">
        <div className = "info ">
        <h3>Trial</h3>
        <button type="button" className=" btn btn-info btn-md mt-10px ">Modal</button>
        </div>
        <div className = "info ">
        <h3>Level</h3>
        <button type="button" class="btn btn-info btn-md">Modal</button>
        </div>
        <div className = "info">
        <h3>Max</h3>
        <button type="button" class="btn btn-info btn-md"> Modal</button>
        </div>
      
      </div>

      <div className="second">

        <div className="input-field">
        
     
        <form action="" onSubmit="{submit}">
               <fieldset>
                   <div className="form-group">
                       <label htmlFor="guessnumber"> Input Number</label>
                       <input class="form-control form-control-lg" onChange="{Change}"type="text" name="number" placeholder="guess a number" />
                   </div>
                     
               </fieldset>
               </form>
              </div>
           <div className="input-lower"> 
          <div className="button d-flex justify-content-around">
          <button type="button" className=" btn btn-info btn-md mt-10px ">Submit</button>
          <button type="button" className=" btn btn-info btn-md mt-10px ">Next Level</button>
          <button type="button" className=" btn btn-info btn-md mt-10px ">Reset</button>

          </div>
          <div className="comment">
          <div className="form-group">
                       
                       <input class="form-control form-control-lg" onChange="{Change}"type="text" name="number" placeholder="guess a number" />
                   </div>
                   <div className="form-group">
                       
                       <input class="form-control form-control-lg" onChange="{Change}"type="text" name="number" placeholder="comment" />
                   </div>

          </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
