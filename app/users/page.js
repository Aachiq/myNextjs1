import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "users page",
};
export default function UsersPage() {
  return (
    <div>
        UsersPage
        <Link href={"/posts"}>
            <button>navigation Next</button>
        </Link>
    </div>
    
  )
}
