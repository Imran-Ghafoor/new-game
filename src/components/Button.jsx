export const Button = () =>{

    const handleClick =() =>{
        alert("i a button");
    };


    return <button onClick ={()=> handleClick("Sending data now...")}>Send Now</button>;
};
