import React, { useContext } from "react";
import { useDispatch} from "react-redux";
import { createStore } from "redux";
import { AppContext } from "../context/AppContext";
import { AppReducer } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../assets/styles/CurrencyDropdown.css'

const store = createStore(AppReducer);

const CurrencyDropdown = () => {
  const { currency } = useContext(AppContext);
  const dispatch = useDispatch();

  const changeCurrency = (chosenCurrency) => {

    dispatch({
      type: 'CHG_CURRENCY',
      payload: chosenCurrency
    });
  }

  return (
    <DropdownButton id="dropdown-basic-button" title={"Currency (" + { currency } + ")"}>
      <Dropdown.Item onClick={changeCurrency("$ Dollar")}>$ Dollar</Dropdown.Item>
      <Dropdown.Item onClick={changeCurrency("£ Pound")}>£ Pound</Dropdown.Item>
      <Dropdown.Item onClick={changeCurrency("€ Euro")}>€ Euro</Dropdown.Item>
      <Dropdown.Item onClick={changeCurrency("₹ Ruppee")}>₹ Ruppee</Dropdown.Item>
    </DropdownButton>
  );
}

export default CurrencyDropdown;