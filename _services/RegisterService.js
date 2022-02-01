import axios from "axios";

class RegisterService {
    setNextPageLog() {
        return axios.get(process.env.NEXT_PUBLIC_API_URL + "logRegView/2");
    }

    setPrevPageLog() {
        return axios.get(process.env.NEXT_PUBLIC_API_URL + "logRegView/1");
    }

    async getCountryInfo() {
        return await axios.get(process.env.NEXT_PUBLIC_API_URL + "getCurrInfo");
    }

    async getAllCountries() {
        return await axios.get(process.env.NEXT_PUBLIC_API_URL_2 + "countries");
    }

    checkSubDomain(_value) {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + "getSubdomainInfo/" + _value
        );
    }

    getDiscount(_value) {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + "getDiscount/" + _value
        );
    }

    uploadLogo(_payload) {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + "uploadLogo",
            _payload
        );
    }

    uploadDocument(_payload) {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + "uploadDoc",
            _payload
        );
    }

    saveRegistration(_payload) {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + "saveRegistration",
            _payload
        );
    }
}

export default RegisterService;
