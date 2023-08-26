import { Icons } from "../../../icons/Icons";

interface DirectionProps {
    routeDirection: 'up' | 'down';
}

export const Direction = (props: DirectionProps) => {
    const { routeDirection } = props;

    return (
        <>
        {
            routeDirection === 'up' && Icons['upDirection']
        }
        {
            routeDirection === 'down' && Icons['downDirection']
        }
        </>
    );
}