import { NotFoundBlock, Button, LinkBtn } from './NotFound-styled';

const NotFound = () => {
    return (
        <NotFoundBlock>
            <h3>This page is unavailable</h3>
        <p>The link may be broken or the page may have been removed. Check if the link you are trying to open is valid.</p>
        <Button type="button"><LinkBtn to='/'>Return Home</LinkBtn></Button>
        </NotFoundBlock>
    )
};

export default NotFound;