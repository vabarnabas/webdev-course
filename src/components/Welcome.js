import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import welcome from '../markdown/welcome.md'

const Welcome = () => {

    const [markdown, setMarkdown] = useState('');
    const markdownPath = welcome;
  
    fetch(markdownPath).then(res => res.text()).then(res => setMarkdown(res))

    return (
        <div className='max-w-full'>
            <ReactMarkdown className='prose prose-sm prose-code:max-w-full prose-code:overflow-x-auto prose-headings:text-textBlue prose-a:text-textBlue prose-p:text-textWhite prose-em:text-textRed prose-strong:text-textPurple prose-pre:bg-editorLight' escapeHTML={true} children={markdown} />
        </div>
    )
}

export default Welcome
