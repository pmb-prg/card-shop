import {HashLoader} from 'react-spinners'
function Spinner() {
    return(<HashLoader
        size={50}
        color="#535bf2"
        loading={true}
        speedMultiplier={2}
        />)
}

export default Spinner