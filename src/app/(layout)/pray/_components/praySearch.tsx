import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PraySearch() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button size="sm" type="submit">Subscribe</Button>
    </div>
  )
}
