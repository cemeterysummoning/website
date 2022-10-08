import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import katex from 'katex'

import Link from 'next/link'
import styles from '../../styles/Blog.module.css'

const renderer = new marked.Renderer()
let originParagraph = renderer.paragraph.bind(renderer)
renderer.paragraph = (text) => {
  const blockRegex = /\$\$[^\$]*\$\$/g
  const inlineRegex = /\$[^\$]*\$/g
  let blockExprArray = text.match(blockRegex)
  let inlineExprArray = text.match(inlineRegex)

  for (let i in blockExprArray) {
    const expr = blockExprArray[i]
    const result = renderMathsExpression(expr)
    console.log(result);
    text = text.replace(expr, result)
  }
  for (let i in inlineExprArray) {
    const expr = inlineExprArray[i]
    const result = renderMathsExpression(expr)
    text = text.replace(expr, result)
  }
  return originParagraph(text)
}
function renderMathsExpression (expr) {
  if (expr[0] === '$' && expr[expr.length - 1] === '$') {
    let displayStyle = false
    expr = expr.substr(1, expr.length - 2)
    if (expr[0] === '$' && expr[expr.length - 1] === '$') {
      displayStyle = true
      expr = expr.substr(1, expr.length - 2)
    }
    let html = null
    try {
      html = katex.renderToString(expr)
    } catch (e) {
      console.err(e)
    }
    if (displayStyle && html) {
      html = html.replace(/class="katex"/g, 'class="katex katex-block" style="display: block;"')
    }
    html = html.replace("aria-hidden", "hidden")
    return html
  } else {
    return null
  }
}
marked.setOptions({renderer: renderer})

export default function PostPage({ data: {title, date}, slug, content }) {
    return (
        <div className={styles.position}>
            <h1 style={{fontSize: "3em"}}>{title}</h1>
            <h3 style={{fontSize: "1em"}}>{date}</h3>
            <div className={styles.postbody}>
                <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('blog-posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    // console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {slug} }) {

    // console.log(slug);
    const mdMeta = fs.readFileSync(path.join('blog-posts', slug + '.md'), 'utf-8')

    const { data, content } = matter(mdMeta)

    return {
        props: {
            data,
            slug,
            content
        }
    }
}