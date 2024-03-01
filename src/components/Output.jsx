import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const Output = ({html, css, javascript}) => {
  const [srcVal,setSrcVal] = useState('')

  useEffect(()=>{
    let timeout =setTimeout(()=>{
      setSrcVal(`<html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${javascript}</script>
      </html>`)
    },1000)

    return ()=>{
      clearTimeout(timeout);
    }
  },[html, css,javascript])

  return (
    <div className="output-element">

      <iframe srcDoc={srcVal} style={
        {
          backgroundColor:'white',
          height:'100%',
          width:'calc(100% - 20px)',
          margin:'10px',
          borderRadius:'10px'
        }
      }></iframe>
    </div>
  )
}

export default Output