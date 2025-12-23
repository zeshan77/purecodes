import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-gray-500">Page not found</p>
      <Link to="/" className="mt-4 text-blue-600 underline">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
