import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  //making use of custom hook, every component has its own state for custom hook in use so one custom hook can be used at multiple places
  const counter = useCounter()

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
