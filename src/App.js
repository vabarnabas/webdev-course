import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import welcome from './markdown/welcome.md'
import Navbar from './components/Navbar'
import Prism from "prismjs";
import './prism-onedark.css'

const App = (props) => {

  const [markdown, setMarkdown] = useState('');
  const [markdownPath, setMarkdownPath] = useState(welcome);

  useEffect(() => {
    fetch(markdownPath).then(res => res.text()).then(res => setMarkdown(res))
    Prism.highlightAll();
  },[markdownPath])

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-editorDark font-menlo text-textWhite px-6'>
      <p className="fixed hidden md:block bottom-2 left-6 text-xs text-textGray select-none">Varga Barnabás</p>
      <Navbar setMarkdownPath={(markdownPath) => setMarkdownPath(markdownPath)} />
      <div className="pt-20 pb-12 w-full h-full flex items-center justify-center">
      <ReactMarkdown className='prose prose-sm prose-code:max-w-full overflow-x-auto prose-headings:text-textBlue prose-a:text-textBlue prose-p:text-textWhite prose-em:text-textRed prose-strong:text-textPurple prose-pre:bg-editorLight' escapeHTML={true} children={markdown} />
      </div>
    </div>
  )
}

export default App
