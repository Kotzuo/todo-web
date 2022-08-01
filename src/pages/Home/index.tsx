import React from 'react';
import { BsPlus } from 'react-icons/bs';
import TaskList from '../../components/TaskList';
import {
  Container,
  DateContainer,
  Day,
  LeftDateContainer,
  Moth,
  MothYearContainer,
  UpperContainerBackground,
  Weekday,
  Year,
  TaskListSpacer,
  UpperContainer,
  TaskListContainerBackground,
} from './styles';
import TextInputWithButton from '../../components/TextInputWithButton';
import { useTasks } from '../../contexts/tasks';

const Home: React.FC = () => {
  const today = new Date();
  const { addTask } = useTasks();

  const handleCreateTask = async (name: string) => {
    await addTask(name);
  };

  return (
    <Container>
      <UpperContainerBackground>
        <UpperContainer>
          <DateContainer>
            <LeftDateContainer>
              <Day>{today.getDate()}</Day>
              <MothYearContainer>
                <Moth>
                  {today.toLocaleString('default', { month: 'long' })}
                </Moth>
                <Year>{today.getFullYear()}</Year>
              </MothYearContainer>
            </LeftDateContainer>
            <Weekday>Monday</Weekday>
          </DateContainer>
          <TextInputWithButton
            placeholder="Criar uma nova task"
            buttonIcon={<BsPlus />}
            onEnter={handleCreateTask}
          />
        </UpperContainer>
      </UpperContainerBackground>
      <TaskListContainerBackground>
        <TaskListSpacer>
          <TaskList />
        </TaskListSpacer>
      </TaskListContainerBackground>
    </Container>
  );
};

export default Home;
