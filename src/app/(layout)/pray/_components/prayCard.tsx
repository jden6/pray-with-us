import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PrayCardProps } from '@/app/(layout)/pray/pray.type'

const PrayCard = ({ title, date, tags, content, author }: PrayCardProps) => {
  return <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {/*<CardDescription>Card Description</CardDescription>*/}
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <p>{date}</p>
    </CardFooter>
  </Card>

}

export default PrayCard