import React from 'react';
import styled from 'styled-components';
import SpanQuality from './recommendedItemSpan.jsx';
import RecommendedTriangle from './recommendedTriangle.jsx';

const RecommendedItem = (props) => {
  const categories = {
    Size: ['TOO SMALL', 'PERFECT', 'TOO LARGE'],
    Width: ['TOO NARROW', 'PERFECT', 'TOO WIDE'],
    Comfort: ['UNCOMFORTABLE', 'COMFORTABLE'],
    Quality: ['POOR', 'PERFECT']
  }

  return (
    <div>
      <Quality>{props.quality.toUpperCase()}</Quality>
      <ComparisonBar>
          <ComparisonBarFirstBreak></ComparisonBarFirstBreak>
          <ComparisonBarSecondBreak></ComparisonBarSecondBreak>
          <ComparisonBarThirdBreak></ComparisonBarThirdBreak>
          <RecommendedTriangle reviewState={props.reviewState} quality={props.quality}/>
        </ComparisonBar>
        <SpanAll>
          {categories[props.quality].map((quality) => (
            <SpanQuality quality={quality}/>
          ))}
        </SpanAll>
        <br></br>
    </div>
  )
}

const ComparisonBar = styled.div`
  position: relative;
  margin-top: 4px;
  width: 250px;
  height: 4px;
  background-color: #767677;
  border-radius: 5px;
`;

const SpanAll = styled.div`
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  letter-spacing: 1.5px;
  box-sizing: border-box;
  margin-right: 6px;
  margin-top: 7px;
`;

const ComparisonBarFirstBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 25%;
  width: 4px;
  height: 4px
`;

const ComparisonBarSecondBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  width: 4px;
  height: 4px
`;

const ComparisonBarThirdBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 75%;
  width: 4px;
  height: 4px
`;

const Quality = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  letter-spacing: 1.5px;
`;

export default RecommendedItem;