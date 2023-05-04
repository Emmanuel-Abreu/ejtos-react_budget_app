import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../assets/styles/CurrencyDropdown.css'

const CurrencyDropdown = () => {
  const { currency } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const changeCurrency = () => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency
    });
  }

  return (
    <DropdownButton id="dropdown-basic-button" title={"Currency (" + { currency } + ")"}>
      <Dropdown.Item >$ Dollar</Dropdown.Item>
      <Dropdown.Item >£ Pound</Dropdown.Item>
      <Dropdown.Item >€ Euro</Dropdown.Item>
      <Dropdown.Item >₹ Ruppee</Dropdown.Item>
    </DropdownButton>
  );
}

export default CurrencyDropdown;