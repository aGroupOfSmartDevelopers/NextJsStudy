export const metadata = {
    title: 'About-Us',
    description: 'The best movies on the the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
    {children}
    &copy; Next Js is good!
    </div>
  )
}
