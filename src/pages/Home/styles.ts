import styled from "styled-components";

export const Container = styled.div``;

export const UpperContainerBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgb(45, 110, 255) 0%,
    rgba(45, 165, 255, 1) 100%
  );
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: #fff;
`;

export const LeftDateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Day = styled.span`
  font-size: 4rem;
  font-weight: 500;
  margin-right: 12px;
`;

export const MothYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Moth = styled.span`
  font-size: 2rem;
`;

export const Year = styled.span`
  font-weight: 600;
`;

export const Weekday = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`;

export const TaskListSpacer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 2rem;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
`;

export const TaskListContainerBackground = styled.div`
  display: flex;
  justify-content: center;
`;
