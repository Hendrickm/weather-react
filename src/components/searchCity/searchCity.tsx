import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

import './searchCity.css';
import { City } from '../../commons/types';
import { CITY_API } from '../../api/api';

interface Props {
  handleSelectCity: (id: number) => void
}

function getSuggestionValue(suggestion: City): string {
  return `${suggestion.name} - ${suggestion.country}`;
}

function renderSuggestion(suggestion: City) {
  return (
    <span>{`${suggestion.name} - ${suggestion.country}`}</span>
  );
}

export default (props: Props) => {
  const { handleSelectCity } = props;

  const [city, setCity] = useState<string>('');
  const [suggestions, setSuggestions] = useState<City[]>([]);


  const onChange = (event: React.FormEvent<any>,
    { newValue, method }: Autosuggest.ChangeEvent): void => {
    setCity(newValue);
  };

  const onSuggestionsFetchRequested = async ({ value }: any) => {
    if (value && value.length > 3) {
      const res = await CITY_API.get(`cities?limit=15&name__regex=/${value}/`);
      setSuggestions(res.data);
    } else {
      setSuggestions([]);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event: any, { suggestion }: any) => {
    handleSelectCity(suggestion.id);
  };

  const inputProps = {
    placeholder: 'Buscar cidade',
    value: city,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );
};
