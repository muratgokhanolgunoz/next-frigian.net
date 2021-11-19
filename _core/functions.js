//import Resizer from "react-image-file-resizer"
import { toast } from "react-toastify";

export const dataUriToBlob = (dataURI, type) => {
    var byteString = atob(dataURI.split(",")[1]);
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var uintArray = new Uint8Array(arrayBuffer);

    for (var i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i);
    }

    var blob = new Blob([arrayBuffer], { type: type });
    byteString = null;

    return blob;
};

export const makeRandomCharacter = (_length) => {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < _length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};

export const showToast = (_position, _text, _type) => {
    toast(_text, {
        position: _position,
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: _type,
    });
};

export const validateEmail = (_email) => {
    // eslint-disable-next-line no-useless-escape
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(_email);
};

// export const resizeImage = (_file, _maxWidth, _maxHeight, _minWidth, _minHeight, _compressFormat, _quality = 100, _rotation = 0, _outputType) => {
//     let result

//     // 1 => blob
//     // 2 => base64
//     // 3 => file

//     try {
//         result = Resizer.imageFileResizer(_file, _maxWidth, _maxHeight, _compressFormat, _quality, _rotation, (uri) => { return uri }, _outputType === 1 ? "blob" : "base64", _minWidth, _minHeight)
//         return result
//     } catch (err) {
//         return err
//     }
// }
