
import CheckOutDetails from './../_components/CheckOutDetails';

const page = ({ params }) => {
    const amount = Math.ceil(Number(params.id));


    return (

        <CheckOutDetails amount={amount} />

    )
}

export default page
