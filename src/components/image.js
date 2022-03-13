import NextImage from 'next/image'

export default function Image(props) {
  const loader = ({ src }) => {
    return src
  }

  return <NextImage {...props} loader={loader} />
}
