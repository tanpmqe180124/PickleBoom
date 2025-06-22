import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { blogCardData } from '@/constant/blogContent-data';
import dayjs from 'dayjs';

export const BlogCard = () => {
  return (
    <div className="text- flex items-center justify-center gap-3">
      {blogCardData.map((item, index) => {
        const Icon = item.footer.icon;
        return (
          <Card key={index} className="max-w-sm">
            <CardHeader>
              <CardTitle className="text-lg text-black">
                <img
                  src={item.img}
                  className="h-full max-h-[100%] w-auto object-contain"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span>{item.title}</span>
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-start gap-2">
              <Icon size={24} color="#FCBA6B" strokeWidth={1} />
              <CardDescription>
                {dayjs(item.footer.date).format('DD/MM/YYYY')}
              </CardDescription>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
