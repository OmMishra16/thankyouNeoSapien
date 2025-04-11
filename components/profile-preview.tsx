"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Quote } from "lucide-react"
import type { Colleague } from "@/lib/types"

interface ProfilePreviewProps {
  colleague: Colleague
}

export default function ProfilePreview({ colleague }: ProfilePreviewProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="group overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={colleague.image || "/placeholder.svg"}
              alt={colleague.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{colleague.name}</h3>
              <p className="text-sm opacity-90">{colleague.role}</p>
            </div>
          </div>
          <div className="p-5">
            <p className="mb-4 line-clamp-3 text-muted-foreground">{colleague.shortNote}</p>
            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              className="w-full border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Read Full Note
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{colleague.name}</DialogTitle>
            <DialogDescription>{colleague.role}</DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {/* Quote Section */}
            <div className="rounded-lg bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <Quote className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="italic text-emerald-700">{colleague.quote}</p>
              </div>
            </div>

            {/* Full Note */}
            <div className="prose prose-emerald max-w-none">
              <p>{colleague.fullNote}</p>
            </div>

            {/* Learnings */}
            <div>
              <h4 className="mb-3 text-lg font-medium">Things I learned from {colleague.name.split(" ")[0]}:</h4>
              <ul className="space-y-2">
                {colleague.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 p-1">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Memories Section */}
            {colleague.memories && (
              <div>
                <h4 className="mb-3 text-lg font-medium">Fun memories:</h4>
                <div className="space-y-3">
                  {colleague.memories.map((memory, index) => (
                    <div key={index} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <p>{memory}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
