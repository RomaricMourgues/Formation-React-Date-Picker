type ButtonProps = {
  theme?: 'primary' | 'outlined'
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
// In complement to the above, React.ButtonHTMLAttributes<HTMLButtonElement>
// this snippet will add all the props of
// a default html <button/>

export const Button = (props: ButtonProps) => {
  let className =
    'px-4 py-2 border rounded-lg disabled:opacity-50 disabled:bg-slate-300 disabled:text-slate-900'

  // Themed className
  if (props.theme === 'primary') {
    className += ' bg-blue-500 text-white'
  } else {
    className += ' text-slate-800'
  }

  return (
    <button
      className={className}
      disabled={props.disabled}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  )
}

export const ButtonConfirm = (props: {} & ButtonProps) => {
  let className =
    'px-4 py-2 border rounded-lg disabled:opacity-50 disabled:bg-slate-300 disabled:text-slate-900'

  // Themed className
  if (props.theme === 'primary') {
    className += ' bg-blue-500 text-white'
  } else {
    className += ' text-slate-800'
  }

  return <ButtonConfirm />
}
