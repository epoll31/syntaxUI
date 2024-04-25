// 'use client'
import { readFile } from '@/lib/readFile'
import {
  Code,
  CodeGroup,
  CodePanel,
  CodePanelHeader,
  CopyButton,
  Pre,
} from './Code'
// import { useEffect, useState } from 'react'

export async function CodeFromFile({
  title,
  path,
  language,
}: {
  title: string
  path: string
  language: string
}) {
  // use this for server side rendering
  const content = await readFile(path)

  // use this for client side rendering
  /*
  const [content, setContent] = useState('')
  useEffect(() => {
    const updateContent = async () => {
      const content = await readFile(path)
      // console.log(content)
      setContent(content)
    }
    updateContent()
  }, [])
  */

  return (
    <Pre title={title} code={content}>
      <Code className={`language-js`} code={`${content} `}>
        {content}
      </Code>
    </Pre>
  )
  return <></>
}
