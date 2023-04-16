import React from 'react'
import Button from './Button';

const ButtonBox = ({onBtnClick,onCalculate,onClear,onDel}) => {

  return (
    <div className="btnBox">
      <Button value="C" onClick={onClear} />
      <Button value="+-" onClick={onBtnClick}/>
      <Button value="%" onClick={onBtnClick} /> 
      <Button value="/" onClick={onBtnClick} />
      <Button value="7" onClick={onBtnClick} />
      <Button value="8" onClick={onBtnClick} />
      <Button value="9" onClick={onBtnClick} />
      <Button value="*" onClick={onBtnClick} />
      <Button value="4" onClick={onBtnClick} />
      <Button value="5" onClick={onBtnClick} />
      <Button value="6" onClick={onBtnClick} />
      <Button value="-" onClick={onBtnClick} />
      <Button value="1" onClick={onBtnClick} />
      <Button value="2" onClick={onBtnClick} />
      <Button value="3" onClick={onBtnClick} />
      <Button value="+" onClick={onBtnClick} />
      <Button value="0" onClick={onBtnClick} />
      <Button value="." onClick={onBtnClick} />
      <Button value="←" onClick={onDel} />
      <Button value="=" onClick={onCalculate}></Button>
    </div>
  )
}

export default ButtonBox