import './globals.css'

export const metadata = {
  title: 'YGT',
  description: 'YGT organization and members.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
