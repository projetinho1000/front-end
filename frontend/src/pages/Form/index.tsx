import FormCard from 'components/FormCard';
import SideBar from 'components/SideBar';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <>
            <SideBar />
            <FormCard movieId={`${params.movieId}`} />
        </>
    );
}

export default Form;
