import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

export default function useQueryParams() {
  return queryString.parse(useLocation().search);
}
