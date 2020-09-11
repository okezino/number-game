import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [number , setnumber] = useState();
  const [text , settext] = useState(" ");
  const [guessarray , setguessarray] = useState(["GUESSED : ",]);
  const [random , setRandom] = useState(Math.floor(Math.random()*100));
  const [completion , setcompletion] = useState(false);
  const [Round , setround] = useState(1);
  const [Max , setmax] = useState(100);
  const [trial , settrial] = useState(10);
  const [count , setcount] = useState(0);
  const [fail , setfail] = useState(false);
  
useEffect(()=>{
  console.log(random)
})

  const restart =()=>{
          setguessarray(["GUESSED : ",]) 
          setRandom(Math.floor(Math.random()*100))
          setcompletion(false)
          settext("")
          setcount(0)
          setfail(false)   
  }

  const updatetrial = ()=>{
      switch(trial){
          case 10 : 
          settrial(5)
          setmax(50)
          setround(2)
          setRandom(Math.floor(Math.random()*51))
          break;
          case 5 :
          settrial(3)
          setmax(25)
          setround(3)
          setRandom(Math.floor(Math.random()*26))
          break;
          case 3 :
          settrial(1)
          setmax(10)
          setround("final")
          setRandom(Math.floor(Math.random()*11))
          break;
          default:
            break


      }
  }
  const next = ()=>{
      setguessarray(["GUESSED : ",])      
      setcompletion(false)
      settext("")
      setcount(0)
      updatetrial()
      setnumber("")
  }
 
  
  const validation =()=>{
      if(isNaN(number)){
          alert( `${number} is not a number`)
      }
      else{

          if(!number){
              alert( "Guess a number")
          }else if (number > random && count+1  !== trial ){
              settext(" Too High")
              updatecount()
          }
          else if (number < random && count+1 !== trial ){
              settext("Too low")
              updatecount()
          }

          else if(count+1  === trial && number !== random){
              settext(`You Lost!!! Try again`)
              setfail(true)
          }
  
          else if(number === random  && count  !== trial){
           settext(`YOU WON with ${count + 1} trial !!`)
           setcompletion(true)
           updatecount()
          }
         
          else if(parseInt(number) === parseInt(random)  &&  count  !== trial ){
           settext(`YOU WON with ${count + 1} trial !!`)
           setcompletion(true)
           updatecount()
          }

      }
     
  }

  const updatecount = ()=>{
          guessarray.push(number)
          setcount(count + 1 )    
  }
  const submit = async (e) => {
        e.preventDefault()
        await validation()
           setnumber("")
      
        console.log(random)
      }

  const Change = (e) => {
          setnumber(e.target.value)
}















  return (
    <div className="App container">
      <div className="first d-flex  justify-content-around mt-100">
        <div className = "info ">
        <h3>TRIAL</h3>
  <button type="button" className=" btn pt-12px btn-info btn-num">{count}   | {trial}</button>
        </div>
        <div className = "info ">
        <h3>LEVEL</h3>
        <button type="button" className=" btn pt-12px btn-info btn-num">{Round}</button>
        </div>
        <div className = "info">
        <h3>RANGE</h3>
  <button type="button" class="btn btn-info btn-num">1 - {Max}</button>
        </div>
      
      </div>

      <div className="second">

        <div className="input-field">
        
     
        <form action="" onSubmit={submit}>
               <fieldset>
                   <div className="form-group">
                       <p className="bg-info lable" htmlFor="guessnumber"> LET'S PLAY</p>
                       <input value={number} class="form-control form-control-lg" onChange={Change} type="number" name="number" placeholder="Input a number" />
                   </div>
                     
               </fieldset>
               </form>
              </div>
           <div className="input-lower"> 
          <div className="button d-flex justify-content-around">
  {completion ? null : <button type="button" className=" btn btn-info btn-md mt-10px " onClick={submit}>Submit</button> }      
          {completion ?  <button type="button" onClick={next} className=" btn btn-info btn-md mt-10px ">Next Level</button> :  null}
          {fail ? <button type="button" onClick={restart} className=" btn btn-info btn-md mt-10px ">Reset</button>:  null}

          </div>
          <div className="comment">
          <div className="form-group">
          <p className=" bg-info arr">{guessarray.map((i,index)=><span key={index}> {i }</span>)}</p> 
  
            </div>
                   <div className="form-group">
                       
                       <input class="form-control color-white form-control-lg" value={text}type="text" name="number" placeholder="comment" />
                   </div>

          </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
