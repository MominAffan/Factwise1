import { createContext, useContext, useState } from "react";
import { data } from "../data/celebrities";

export const AppData = createContext();

function Context({children}) {
    const[datas,setDatas]=useState(data);
  return (
    <div>
<AppData.Provider value={{datas,setDatas}}>
    {children}
</AppData.Provider>
    </div>
  )
}

export default Context