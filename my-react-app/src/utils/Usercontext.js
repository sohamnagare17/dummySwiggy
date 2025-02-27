import { createContext }  from "react";

const context = createContext({
    user:{name:"dummy",email:"dummy@gmail.com"}
});

export default context;