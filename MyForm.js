import {usesState} from "react";
function MyForm(){
    const [inputs,setInputs]=usesState({});
    const handleChange = (event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))

    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        alert(inputs.username+""+inputs.age);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter Your Name:
                <input 
                type="text"
                name="username"
                value={inputs.username||""}
                onChange={handleChange}/>
            </label>
            <label>
                enter your age:
                <input 
                type="number"
                name="age"
                value={inputs.age||""}
                onChange={handleChange}/>
            </label>
            <input type="submit"/>
        </form>
    )
} 
export default MyForm;