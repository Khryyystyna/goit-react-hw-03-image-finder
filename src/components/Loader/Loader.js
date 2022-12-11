import { Circles } from 'react-loader-spinner';
import { Loaderr } from './Loader.styled';

export const Loader = () => {
  return (
    <Loaderr role="alert">
      <Circles
       height="100"
       width="100"
       color="#0b2ad6"
       ariaLabel="circles-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
/>
    </Loaderr>
  );
};
