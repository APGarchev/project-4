export default ({ type = 'default' }) => {
  const imageSrc =
    type === 'muted' ? '/images/logo-muted.svg' : '/images/logo.svg'
  return <img src={imageSrc} alt="Logo"></img>
}
