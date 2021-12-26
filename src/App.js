import React, {useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import Prism from "prismjs";
import Navbar from './components/Navbar'
import Welcome from './components/Welcome';
import HTML from './components/HTML';
import './prism-onedark.css'

const App = (props) => {

  const [udpateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setInterval(() => Prism.highlightAll(), 100)
  },[udpateCount])

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-editorDark font-menlo text-textWhite px-6'>
      <p className="fixed hidden md:block bottom-2 left-6 text-xs text-textGray select-none">Varga Barnabás</p>
      <Navbar udpateCount={udpateCount} setUpdateCount={udpateCount} />
      <div className="pt-20 pb-12 w-full h-full flex items-center justify-center">
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/html" element={<HTML/>} />
      </Routes>
      {/* <ReactMarkdown className='prose prose-sm prose-code:max-w-full overflow-x-auto prose-headings:text-textBlue prose-a:text-textBlue prose-p:text-textWhite prose-em:text-textRed prose-strong:text-textPurple prose-pre:bg-editorLight' escapeHTML={true} children={markdown} /> */}
      </div>
    </div>
  )
}

export default App
