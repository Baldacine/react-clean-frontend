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
            <span style={{ fontSize: "1rem" }}>{item.date}</span>
            <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
            <p style={{ fontSize: "0.9rem" }}>{item.description}</p>
          </Content>
        </TimelineStep>
      ))}
    </TimelineContainer>
  );
};
