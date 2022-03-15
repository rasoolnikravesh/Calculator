import React, { useEffect, useState } from "react"
import { Calculat } from "../utility/calculator";
import styles from "./Calculator.module.css"
const Calculator = () => {
  const [acc, setACC] = useState(0)
  const [disply, setDisply] = useState("0")

  useEffect(() => {
    let opArray = disply.split(" ")
    let emp = opArray.indexOf("")
    if (emp === -1) {
      setACC(Calculat(opArray))
    }
  }, [disply])

  const btnNumClickHandler = event => {
    switch (event.target.name) {
      case "btnNum1":
        if (disply !== "0")
          setDisply(prev => prev + "1")
        else
          setDisply("1")
        break;
      case "btnNum2":
        if (disply !== "0")
          setDisply(prev => prev + "2")
        else
          setDisply("2")
        break;
      case "btnNum3":
        if (disply !== "0")
          setDisply(prev => prev + "3")
        else
          setDisply("3")
        break;
      case "btnNum4":
        if (disply !== "0")
          setDisply(prev => prev + "4")
        else
          setDisply("4")
        break;
      case "btnNum5":
        if (disply !== "0")
          setDisply(prev => prev + "5")
        else
          setDisply("5")
        break;
      case "btnNum6":
        disply !== "0" ?
          setDisply(prev => prev + "6") :
          setDisply("6")
        break;
      case "btnNum7":
        disply !== "0" ?
          setDisply(prev => prev + "7") :
          setDisply("7")
        break;
      case "btnNum8":
        disply !== "0" ?
          setDisply(prev => prev + "8") :
          setDisply("8")
        break;
      case "btnNum9":
        disply !== "0" ?
          setDisply(prev => prev + "9") :
          setDisply("9")
        break;
      default:
        disply !== "0" ?
          setDisply(prev => prev + "0") :
          setDisply("0")
        break;
    }
  }

  const displyChangeHandler = event => {
    setDisply(event.target.value)
  }

  const accChangeHandler = event => {
    setACC(event.target.value)
  }
  const opHandler = event => {
    const { name } = event.target;
    if (name === "+") {
      setDisply(prev => prev + " + ")
    } else if (name === "-") {
      setDisply(prev => prev + " - ")
    } else if (name === "*") {
      setDisply(prev => prev + " * ")
    } else if (name === "/") {
      setDisply(p => p + " / ")
    }
  }
  const opClickHandler = () => {

  }
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className='col-span-4'>
        <input value={disply} disabled onChange={displyChangeHandler} className='focus:outline-none text-xl bg-transparent border-b-2 border-blue-400 w-full h-8 font-medium ' />
      </div>
      <div className="col-span-4">
        <input value={acc} disabled onChange={accChangeHandler} className="focus:outline-none text-base bg-transparent border-b-2 border-green-400 w-full h-4 font-medium" />
      </div>
      <div className='grid grid-cols-3 gap-2 col-span-3'>
        <button onClick={btnNumClickHandler} name='btnNum1' className={styles.btn}>1</button>
        <button onClick={btnNumClickHandler} name='btnNum2' className={styles.btn}>2</button>
        <button onClick={btnNumClickHandler} name='btnNum3' className={styles.btn}>3</button>
        <button onClick={btnNumClickHandler} name='btnNum4' className={styles.btn}>4</button>
        <button onClick={btnNumClickHandler} name='btnNum5' className={styles.btn}>5</button>
        <button onClick={btnNumClickHandler} name='btnNum6' className={styles.btn}>6</button>
        <button onClick={btnNumClickHandler} name='btnNum7' className={styles.btn}>7</button>
        <button onClick={btnNumClickHandler} name='btnNum8' className={styles.btn}>8</button>
        <button onClick={btnNumClickHandler} name='btnNum9' className={styles.btn}>9</button>
        <button onClick={btnNumClickHandler} name='btnNum0' className={styles.btn}>0</button>
      </div>
      <div className='grid grid-cols-1 gap-2 col-span-1'>
        <button className={styles.btn} name="+" onClick={opHandler}>+</button>
        <button className={styles.btn} name="-" onClick={opHandler}>-</button>
        <button className={styles.btn} name="*" onClick={opHandler}>*</button>
        <button className={styles.btn} name="/" onClick={opHandler}>/</button>
      </div>
      <div className='col-start-4 '>
        <button className={styles.btn} onClick={opClickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;