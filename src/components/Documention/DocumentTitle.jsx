import { Helmet } from 'react-helmet-async';
import { Title } from './Document-styled';

const DocumentTitle = ({ children }) => {

    return (
        <Title>
        <Helmet>
            <title>{children}</title>
        </Helmet>
        </Title>
    );
};

export default DocumentTitle;