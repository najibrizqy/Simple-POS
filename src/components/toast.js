import { Toast } from 'native-base';

const ShowToast = (message = '', type = 'warning') => {
    return (
        Toast.show({
            text: message,
            buttonText: "Ok",
            duration: 2000,
            type: type
        }));
}

export default ShowToast;