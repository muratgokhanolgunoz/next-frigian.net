import axios from "axios";

class HomeService {
    userLog() {
        return axios.post(process.env.NEXT_PUBLIC_API_URL + "fnetLog");
    }

    sendCallRequest(_formData) {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + "sendCallRequest",
            _formData
        );
    }
}

export default HomeService;
