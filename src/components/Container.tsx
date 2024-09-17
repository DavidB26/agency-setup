import { twMerge } from "tailwind-merge"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

function Container({children, className}: ContainerProps) {
  return (
    <div className={twMerge('max-w-screen-xl px-6 mx-auto', className)} >
      {children}
    </div>
  )
}

export default Container