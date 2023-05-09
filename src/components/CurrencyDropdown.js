import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../assets/styles/CurrencyDropdown.css'

const CurrencyDropdown = () => {
  const { state = { currency: "£ Pound"}, dispatch } = useContext(AppContext);

  const changeCurrency = (chosenCurrency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: chosenCurrency
    });
    console.log(chosenCurrency)
  }

  return (
    <DropdownButton id="dropdown-basic-button" title={"Currency (" + state.currency  + ")"}>
      <Dropdown.Item onClick={() => changeCurrency("$ Dollar")}>$ Dollar</Dropdown.Item>
      <Dropdown.Item onClick={() => changeCurrency("£ Pound")}>£ Pound</Dropdown.Item>
      <Dropdown.Item onClick={() => changeCurrency("€ Euro")}>€ Euro</Dropdown.Item>
      <Dropdown.Item onClick={() => changeCurrency("₹ Ruppee")}>₹ Ruppee</Dropdown.Item>
    </DropdownButton>
  );
}

export default CurrencyDropdown;
