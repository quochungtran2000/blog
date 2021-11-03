// import { useUser } from 'contexts/User';
// import { Redirect, Route, RouteProps } from 'react-router';
// import { UserRole } from 'typings/UserRole';

// type Props = RouteProps & {
//   role: UserRole | readonly UserRole[];
// };

// export default function ProtectedRoute(props: Props) {
//   const { role, ...rest } = props;

//   const { user } = useUser();

//   if (Array.isArray(role) ? role.includes(user?.role) : role === user?.role) {
//     return <Route {...rest} />;
//   }

//   return <Redirect to="/" />;
// }

export {}