import { getHighlighter } from 'shiki'
import CodePreviewComponent from './CodePreviewComponent'
import prettier from 'prettier'

async function formatCode(codeContent) {
  try {
    const formattedCss = await prettier.format(codeContent, { parser: 'css' });
    return formattedCss + 'formatted'; // This will be a string
  } catch (err) {
    return codeContent + 'error'; // This will also be a string, in case of error
  }
}


const PreviewCodeTabs = async ({
  previewContent,
  codeContent,
  language,
}) => {
  const highlighter = await getHighlighter({
    theme: 'css-variables',
    langs: [language],
  })

  const highlighted = highlighter.codeToHtml(codeContent, {
    lang: language,
    theme: 'css-variables',
  })

  //format returns a promise, if succee use result else use codeContent
  const formattedCode = await formatCode(codeContent)


  // console.log("start")
  // console.log(codeContent)
  // console.log("middle")
  // console.log(formattedCode)
  // console.log("end")

  return (
    <>
      {highlighted && (
        <CodePreviewComponent
          previewContent={previewContent}
          highlighted={highlighted}
          code={formattedCode}
        />
      )}
    </>
  )
}

export default PreviewCodeTabs
