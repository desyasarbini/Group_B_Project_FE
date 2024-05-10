import { Card, TextTag } from "@/components";

interface Activity {
  title: string;
  description: string;
  id: string;
}

interface Props {
  activities: Activity[];
}

const Activity = ({ activities }: Props) => {
  return (
    <Card className="my-12">
      <Card className="container mx-auto">
        <Card className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, key) => {
            const { title, description, id } = activity;

            return (
              <Card key={key} id={id} className="flex flex-col items-center">
                <Card className="p-4 bg-white rounded-lg shadow-lg">
                  <TextTag type="p" className="mt-4 text-xl font-semibold">
                    {title}
                  </TextTag>
                  <TextTag type="p" className="mt-2 text-gray-700">
                    {description}
                  </TextTag>
                </Card>
              </Card>
            );
          })}
        </Card>
      </Card>
    </Card>
  );
};

export default Activity;
