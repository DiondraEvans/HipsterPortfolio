import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state
    const [name, setName] = useState('');
    const [instagram, setInstagram] = useState('');
    const [email, setEmail] = useState('');
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState('');
    const [popup, setPopup] = useState(false)
  
    return (
        <AppContext.Provider value={{
            name, setName,
            instagram, setInstagram,
            email, setEmail,
            options, setOptions,
            message, setMessage,
            popup, setPopup
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;