import reactMarkdown from "react-markdown"

const _mapProps = (props) => ({
    ...props, 
    excapeHtml: false
  })

function Markdown(props) {
    return ( <reactMarkdown {..._mapProps(props)} />);
}

export default Markdown;