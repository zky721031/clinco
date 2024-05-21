import { Navigate } from 'react-router-dom';
import { getToken } from '../utils';

export default function Auth({ children }) {
  const isToken = getToken();
  return isToken ? <>{children}</> : <Navigate to='/login' replace />;
  // if (isToken) {
  //   return <>{children}</>;
  // } else {
  //   return <Navigate to='/login' replace />;
  // }
}
