import React, { useEffect } from "react";
import Select from 'react-select';
import "./home.css"
import { useState } from "react";
// import { useEffect } from "react";
import { Heading, Input, Stack } from '@chakra-ui/react'

const options = [
    { value: 'Food', label: 'Food' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Rent', label: 'Rent' },
    { value: 'EMI', label: 'EMI' },
    { value: 'Entertaitment', label: 'Entertaitment' },
    { value: 'Bills', label: 'Bills' },
    { value: 'Eatout', label:'Eatout' },
    { value: 'Investment', label:'Investment'}
];

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'mediumaquamarine' : 'white',
    }),
};

// function ExpenseObj(date,amount,type){
//     this.date = date;
//     this.amount = amount;
//     this.type = type;
// }

const Home = ()=>{
    const [input,setInput] = useState("");
    const [date,setDate] = useState("");
    const [amount,setAmount] = useState("");
    const [expenseType,setExpenseType] = useState("");
    const [data,setData] = useState([]);

    const handleSelect = (selectedOption)=>{
        setExpenseType(selectedOption.value);
    }

    useEffect(()=>{
       
    },[data])

    const handleEnter = (e)=>{
        e.preventDefault()
        // console.log(date,amount,expenseType);
        // const obj = new ExpenseObj(date,amount,expenseType);
        let obj={
             date,
             amount,
             expenseType
        }
        setData([...data,obj]);
    
    }
    console.log(data,"viki")

    return(
        <div>
            <div className="container">
                <div className="inputContainer">
                    <input type="date" id="myDateInput" name="myDate" onChange={(e)=>{setDate(e.target.value)}} />
                    <input id="amountInput" type="number" placeholder="Enter the amount" onChange={(e)=>{setAmount(e.target.value)}} />
                    <Select
                        options={options}
                        styles={customStyles}
                        className="select"
                        onChange={handleSelect}
                    />
                    <button className="btn" onClick={handleEnter} >Enter</button>
                </div>
            </div>

            <div className="container" >
                <div className="outputContainer">
                    <table className="expenseTable">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Spent on</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elem,index)=>{
                                    return (
                                        <tr key={index} >
                                            <th>{elem.date}</th>
                                            <th>{elem.amount}</th>
                                            <th>{elem.expenseType}</th>
                                            <th>{elem.expenseType=="Entertaitment"||elem.expenseType=="Eatout"?"Entertaitment":elem.expenseType=="Investment"?"Investment":"Necessities"}</th>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="expenseTotalRow">
                                <th>Total</th>
                                <th>{data.reduce((acc,curr)=>{
                                    return acc + parseFloat(curr.amount);
                                },0)}</th>
                                <th>-</th>
                                <th>-</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn viewDetailbtn" >View Details</button>
                </div>
            </div>

            
            
            
        </div>
    )
}

export default Home;