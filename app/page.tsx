import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Heart } from "lucide-react"
import ProfilePreview from "@/components/profile-preview"
import { colleagues } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Heart className="h-5 w-5 text-rose-500" />
            <span>
              thank you <span className="text-emerald-600">NeoSapien</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#profiles" className="text-sm font-medium hover:underline underline-offset-4">
              My People
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Thank You, <span className="text-emerald-600">NeoSapien</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              For all the laughs, learnings, and memories that made this internship so special
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Removed buttons */}
            </div>
          </div>
        </section>

        {/* Thank You Note */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Final Note</h2>
              <Card className="border-emerald-100 bg-white shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="prose prose-emerald mx-auto max-w-none">
                    <p>hii team, i'll miss you all</p>
                    <p>
                      as i wrap up my time here, i am a bit emotionally numb because you guys were genuinely too nice & supportive to me. it always felt so inclusive. working in an early stage startup is even more exciting than it seems. it pushes one everyday to new challenges. it's really thrilling.
                    </p>
                    <p>
                      from night grinds with Husain bhaiya to explaining Neo1 to customers, i've enjoyed it all and tried to give my 100%.
                    </p>
                    <p>
                      NeoSapien will always have a special place in my heart as the place where I
                      truly started to believe in my capabilities.
                    </p>
                    <p>
                      i fundamentally got to see how startups function, how they're built & kept afloat despite the daily challenges. from seeing it before shark tank till now, it have been tons of learnings and inspiration. most importantly, it's about people - who you work with & i am very gratefull to get a seat on this rocketship with such amazing people.
                    </p>

                    <p>
                      wherever i'll go, i'll try to be excellent at what i do and make you guys proud.
                    </p>
                    <p>
                      this little website is my way of saying thanks for everything. i hope our paths cross again soon!
                      
                    </p>
                    <p>
                      long live all, long live NeoSapien
                    </p>
                    <p className="text-right">- Om</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section id="profiles" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">The Awesome Humans Who Guided Me</h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              These incredible people made coming to work every day something to look forward to
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {colleagues.map((colleague) => (
                <ProfilePreview key={colleague.id} colleague={colleague} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Recommendation Section */}
      <section id="recommendation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-center text-3xl font-bold">Your recommendation could be the gentle push that opens my next door</h2>
            <p className="mb-8 text-center text-muted-foreground">
            P.S. If working together left a positive impression, a short recommendation on LinkedIn would mean a lot as I take my next step. No pressure though ! your mentorship
              has already given me more than enough :))
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <a href="https://www.linkedin.com/in/ommishra16/" target="_blank" rel="noopener noreferrer">
                  Recommend Om here
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-slate-50 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
              <span>by Om</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground"> {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

