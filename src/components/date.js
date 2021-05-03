import Moment from "react-moment";
import 'moment/locale/es';

export const Date = ({children}) =>
    <Moment locale="es" fromNow>{children}</Moment>;