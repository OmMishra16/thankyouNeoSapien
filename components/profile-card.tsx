"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Quote } from "lucide-react"
import type { Colleague } from "@/lib/types"

interface ProfileCardProps {
  colleague: Colleague
}

export default function ProfileCard({ colleague }: ProfileCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-0">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10">
              <Image src={colleague.image || "/placeholder.svg"} alt={colleague.name} fill className="object-cover" />
            </div>
          </div>
          <CardTitle className="text-center text-xl">{colleague.name}</CardTitle>
          <CardDescription className="text-center">{colleague.role}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 text-center">
          <p className="line-clamp-3 text-muted-foreground">{colleague.shortNote}</p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Read More</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{colleague.name}</DialogTitle>
                <DialogDescription>{colleague.role}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-4">
                  <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="italic">{colleague.quote}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">What I learned from {colleague.name.split(" ")[0]}:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {colleague.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
                <p>{colleague.fullNote}</p>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  )
}
