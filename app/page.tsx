"use client"

//import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"
//import {useEffect, useState} from "react"

export default function Page() {
  const { userId } = useAuth()
  //const [isLoading, setIsLoading] = useState(true)

  if (!userId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-background via-background to-primary/30">
        <div className="flex flex-col items-center justify-center space-y-8 px-6 py-12">
          <div className="flex items-center justify-center gap-x-2 rounded-full border border-border bg-card/80 px-5 py-2 text-sm shadow-sm">
            <span className="rounded-full bg-black px-2 py-2 font-bold text-white">
              CC
            </span>
            <span className="font-bold">Career Compass AI</span>
          </div>

          <div className="card px-16 pt-8 pb-16 text-center shadow-lg">
            <h1 className="text-2xl font-bold">Welcome to Career Compass AI</h1>
            <p className="text-sm text-muted-foreground">
              Please sign in to continue your career journey.
            </p>
            <div className="mt-6 flex flex-col justify-center space-y-5">
              <a
                href="/sign-in"
                className="rounded bg-linear-to-r from-primary to-emerald-500 px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-shadow duration-300 hover:shadow-primary/30"
              >
                Sign In
              </a>
              <a
                href="/sign-up"
                className="rounded border border-border bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh p-6">
      <h1>Hello World</h1>
    </div>
  )
}
