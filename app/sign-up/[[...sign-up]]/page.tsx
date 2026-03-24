import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="bg-lineaer-to-br from background gab-x-6 flex min-h-svh items-center justify-center via-background to-primary/3 px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center justify-center space-y-8">
        <div className="flex w-1/2 items-center justify-center gap-x-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm shadow-sm">
          <span className="rounded-full bg-black px-2 py-2 font-bold text-white">
            CC
          </span>
          <span className="font-bold">Career Compass AI</span>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Welcome! Please fill in the details to get started.
          </p>
        </div>
      </div>
      <SignUp
        routing="path"
        signInUrl="/sign-in"
        path="/sign-up"
        appearance={{
          elements: {
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            footerAction: "text-sm text-gray-500",
            footer: "justify-center",
          },
        }}
      />
    </div>
  )
}
