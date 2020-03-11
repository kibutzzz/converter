import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { LanguageContainer, InputBlock, AppContainer } from './styles/';
import { useI18n, } from 'react-simple-i18n';
import BrazilFlag from "./i18n/flags/brasil.png";
import UsaFlag from "./i18n/flags/usa.png";


function App() {
  const { t, i18n } = useI18n()

  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [octal, setOctal] = useState("");
  const [binary, setBinary] = useState("");

  const TYPE = {
    DECIMAL: { base: 10, value: decimal },
    BINARY: { base: 2, value: binary },
    HEXADECIMAL: { base: 16, value: hexadecimal },
    OCTAL: { base: 8, value: octal },
  }
  const isValid = (event) => {
    return event.target.validity.valid;
  }
  const changeHandlers = {
    decimal: e => setDecimal(isValid(e) ? e.target.value : decimal),
    binary: e => setBinary(isValid(e) ? e.target.value : binary),
    hexadecimal: e => setHexadecimal(isValid(e) ? (e.target.value + "").toUpperCase() : hexadecimal),
    octal: e => setOctal(isValid(e) ? e.target.value : octal)
  }

  const toBaseValue = (type, to) => {
    return parseInt(type.value, type.base).toString(to).toUpperCase();
  }

  const allAreEmpty = () => {
    return decimal === "" && binary === "" && hexadecimal === "" && octal === "";
  }

  const clearAll = () => {
    setBinary("")
    setDecimal("")
    setHexadecimal("")
    setOctal("")
  }

  const anyIsNotANumber = () => {
    return decimal === "NAN" || binary === "NAN" || hexadecimal === "NAN" || octal === "NAN";
  }
  const calcValues = (type) => {
    if (allAreEmpty() || anyIsNotANumber()) {
      return clearAll();
    }
    if (TYPE.DECIMAL !== type) {
      setDecimal(toBaseValue(type, 10));
      TYPE.DECIMAL.value = decimal;
    }
    if (TYPE.BINARY !== type) {
      setBinary(toBaseValue(type, 2));
    }
    if (TYPE.HEXADECIMAL !== type) {
      setHexadecimal(toBaseValue(type, 16));
    }
    if (TYPE.OCTAL !== type) {
      setOctal(toBaseValue(type, 8));
    }
  }

  useEffect(() => {
    calcValues(TYPE.DECIMAL);
  }, [decimal]);

  useEffect(() => {
    calcValues(TYPE.BINARY);
  }, [binary]);

  useEffect(() => {
    calcValues(TYPE.HEXADECIMAL);
  }, [hexadecimal]);

  useEffect(() => {
    calcValues(TYPE.OCTAL);
  }, [octal]);

  return (
    <AppContainer>
      <LanguageContainer>
        <img
          src={BrazilFlag}
          onClick={() => i18n.setLang('pt-BR')}
          alt={t("languages.portuguese")}
        />
        <img
          src={UsaFlag}
          onClick={() => i18n.setLang('en-US')}
          alt={t("languages.english")}
        />
      </LanguageContainer>
      <h1>{t("title")}</h1>
      <span>{t("description")}</span>
      <InputBlock>
        <label>{t("inputs.decimal")}</label>
        <input type="text" inputMode="numeric" onChange={changeHandlers.decimal} value={decimal} pattern="[0-9]*" maxLength="15" />
      </InputBlock>
      <InputBlock>
        <label>{t("inputs.binary")}</label>
        <input type="text" inputMode="numeric" onChange={changeHandlers.binary} value={binary} pattern="[0-1]*" maxLength="50" />
      </InputBlock>
      <InputBlock>
        <label>{t("inputs.hexadecimal")}</label>
        <input type="text" onChange={changeHandlers.hexadecimal} value={hexadecimal} pattern="[0-9a-fA-F]*" maxLength="13" />
      </InputBlock>
      <InputBlock>
        <label>{t("inputs.octal")}</label>
        <input type="text" inputMode="numeric" onChange={changeHandlers.octal} value={octal} pattern="[0-7]*" maxLength="17" />
      </InputBlock>

      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
