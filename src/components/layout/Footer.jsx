import React from 'react'
import { useIp } from '../../hooks/useIp';

export const Footer = () => {
  const ip = useIp();

  return (
    <footer>
        <p>Footer</p>
    </footer>
  )
}
