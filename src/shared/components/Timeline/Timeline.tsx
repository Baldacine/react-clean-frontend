import React from "react";
import { TimelineContainer, TimelineStep, Circle, Content } from "./styles";
import type { TimelineProps } from "./types";

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineStep key={index}>
          <Circle />
          <Content>
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Content>
        </TimelineStep>
      ))}
    </TimelineContainer>
  );
};
