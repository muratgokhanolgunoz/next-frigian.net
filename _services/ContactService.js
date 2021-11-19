import axios from "axios";

class ContactService {
    sendMessage(_formData) {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + "sendContactEmail",
            _formData
        );
    }
}

export default ContactService;
