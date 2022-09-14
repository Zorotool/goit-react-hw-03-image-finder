
import { CirclesWithBar } from 'react-loader-spinner';
import s from './Loader.module.css';

export function Loader(props) {
  return (
    <div className={s.loader}>
      <CirclesWithBar
  height="100"
  width="100"
  color="#3f51b5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
    </div>
  );
}
export default Loader;