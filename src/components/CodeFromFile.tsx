import { promises as fs } from 'fs'
import { CodeGroup, CodePanel, CodePanelHeader, CopyButton } from './Code'

export async function CodeFromFile({
  title,
  path,
}: {
  title: string
  path: string
}) {
  // const content = await readFile(path)
  const content = await fs.readFile(process.cwd() + '/src' + path, 'utf-8')

  return (
    <CodeGroup title={title}>
      <pre>
        <code>{content}</code>
      </pre>
    </CodeGroup>
  )

  // return (
  //   <pre>
  //     <code>{content}</code>
  //   </pre>
  // )
}
