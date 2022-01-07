import * as React from 'react'
import { useTheme } from 'next-themes'

import { Icon } from './Icon'

export const ThemeToggle: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  React.useEffect(() => {
    if (!mounted) return
    setMounted(true)
  }, [mounted])

  return resolvedTheme === 'dark' ? (
    <Icon className={className} name="sun" onClick={() => setTheme('light')} />
  ) : (
    <Icon className={className} name="moon" onClick={() => setTheme('dark')} />
  )
}
