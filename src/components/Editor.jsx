
import { Controlled} from "react-codemirror2";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css'
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Editor = ({lang, value, mode, onChange}) => {
  const handleChange =(editor, data, value) =>{
    onChange(value);
    localStorage.setItem(lang, value);
  }
  useEffect(()=>{

      onChange(localStorage.getItem(lang)?localStorage.getItem(lang):'');
    },[])
  return (
    <div className="editor">
      <div className={"lang-title " + lang}>
        {lang==='HTML'?`${lang + ' </>'}`:lang ==='CSS'? `${lang + ' *'}`:lang === 'JS'? `${lang + ' ()'}`:lang}
      </div>
      <Controlled
        className="controlled-editor"
          options={{
            mode: mode,
            theme: 'material',
            lineNumbers: true
          }}
          value={value}
          onBeforeChange={handleChange}
      />
    </div>
  )
}



export default Editor;