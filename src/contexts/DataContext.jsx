import { createContext, useState } from "react"

export const DataContexts = createContext();


// eslint-disable-next-line react/prop-types
const DataContext = ({children}) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('')
  return (
      <DataContexts.Provider
        value={{
              html,
              css,
              js,
              setHtml,
              setCss,
              setJs
        }}
      >
        {children}
      </DataContexts.Provider>    
  )
}

export default DataContext