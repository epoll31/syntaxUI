'use server'

import { promises as fs } from 'fs'

export async function readFile(path: string) {
  return await fs.readFile(process.cwd() + '/src' + path, 'utf-8')
}
