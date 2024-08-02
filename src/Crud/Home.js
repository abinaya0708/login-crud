
import React ,{useState}from "react";
import "./Home.scss"
export const Home=()=>{
    
    const [myName,setName]=useState("");
    const [mySalary,setSalary]=useState(0);
    const [myRole,setRole]=useState("");
    const[Final,setFinal]=useState([]);
    const[index,setIndex]=useState([])
    const [isFill,setFill]=useState(false);
    const [isEdit,setEdit]=useState(false);

    const handleInput=(e)=>{
        if(e.target.name==="enterName"){
            console.log(e.target.value)
            setName(e.target.value)
        }
        else if(e.target.name==="enterPrice"){
            console.log(e.target.value)
            setSalary(e.target.value)
        }
        else{
            console.log(e.target.value)
            setRole(e.target.value)
        }
    }
    const click=(e)=>{
        e.preventDefault();
        console.log(e);
        

        if(myName===""||mySalary===""||myRole===""){
            setFill(true)
        }
        else if(isEdit){
            let obj={myName,mySalary,myRole};
            let check=Final.map((v,i)=>{
                return index===i ? obj:v
            })
            setFinal(check);
            setEdit(false)
        }
        else{
            console.log(myName,mySalary,myRole)

            let obj={myName,mySalary,myRole}
            console.log(obj);
        
            setFinal([...Final,obj]);
            setName("");
            setSalary("");
            setRole("");
            setFill(false)
        }
        
       
    }
    const delbtn=(i)=>{
      let x= Final.filter((e,index)=>{
        return  i!==index 
        
      })  
      console.log(x);
      setFinal(x);
    // console.log(Product)
    }
    const editbtn=(val,i)=>{
            
            setName(val.myName)
            setSalary(val.mySalary)
            setRole(val.myRole)
            setEdit(true);
            setIndex(i);
        }
    // console.log(Product);
    return(
        <div className="home-page">
            <h1>CRUD-Concept</h1>
        <form>
        <div className="input-div">
            <label>Enter your Name:</label>
            <input type="text" value={myName} name="enterName" onChange={handleInput} placeholder="Name"/>
            {isFill&&myName===""?<p style={{color:"red"}}>*Enter your Name</p> : ""}
        </div>

        <div className="input-div">
            <label>Expected salary:</label>
          <input type="number" value={mySalary} name="enterPrice" onChange={handleInput} placeholder="Salary expectation"/>
            {isFill&&mySalary===""?<p style={{color:"red"}}>*Enter expected salary</p> : ""}
        </div>

        <div className="input-div">
            <label>Enter your Job role</label>
            <input type="text" value={myRole}  onChange={handleInput} placeholder="Job role"/>
            {isFill&&myRole===""?<p style={{color:"red"}}>*Enter your Job role</p> : ""}
        </div>

        <button onClick={click}>Submit</button>
    </form>
    <div className="card-row">
        {Final.map((val,i)=>{
            return (
                <div key={i} className="card-col">
                    <div className="card">
                        <h2>Name:<span>{val.myName}</span></h2>
                        <h2>Job role:<span>{val.myRole}</span></h2>
                        
                        <h2>Salary Expectation:<span>{val.mySalary}</span></h2>
                        <div className="button-div">
                            <div className="btn">
                                <button onClick={()=>editbtn(val,i)}>Edit</button>
                            </div>
                            <div className="btn">
                                <button onClick={()=>delbtn(i)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
    )
}