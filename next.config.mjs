/** @type {import('next').NextConfig} */
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeKatex], 
    remarkPlugins: [remarkMath]
  }
})

export default withMDX({
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js']
})