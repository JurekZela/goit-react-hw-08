import { Helmet } from 'react-helmet-async';
// import { Title } from './Document-styled';

const DocumentTitle = ({ children }) => {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
};

export default DocumentTitle;