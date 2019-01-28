import React  from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CityListElement = ({ city, onClick, isSelected }) => {

  return (
    <ResultListItem onClick={ev => { ev.preventDefault(); onClick(city) }}
      isSelected={isSelected}>
      <ResultRow>
        <div>
          <span className="city">{city.display_name}</span>
        </div>
        <Arrow>
          <FontAwesomeIcon icon="chevron-right" />
        </Arrow>
      </ResultRow>
    </ResultListItem>)
}

const CityList = ({ cities = [], onClick, selectedCity = 0 }) =>
  <ResultList className="city-list">
    {
      cities.map((city, index) =>
        <CityListElement
          city={city}
          key={city.osm_id}
          onClick={onClick}
          isSelected={selectedCity === index} />
    )}
  </ResultList>

module.exports = CityList

const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.div`
  margin: 0 12px;
`;

const ResultListItem = styled.li`
  cursor: pointer;
  padding: 12px 11px 12px 24px;
  background-color: ${props => props.isSelected ? "#000" : ""};
`;

const ResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
