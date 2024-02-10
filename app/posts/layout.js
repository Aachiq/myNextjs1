import React from 'react'

export const metadata = {
    title: "posts page",
};

export default function({children}) {
  return (
    <div>
        <div style={{height:"50px", background:"blue", fontSize:"15px", color:"white"}}>
            <h1>Posts</h1>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
