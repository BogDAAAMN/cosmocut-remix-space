import { Link } from "@remix-run/react";

type PropsType = {
  id: string;
  url: string;
  clicks: string;
  time: string;
};

export function LinkCard({ id, url, clicks, time }: PropsType) {
  return (
    <Link to={`${id}`} prefetch="intent" className="block hover:bg-orange-50">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-primary">
            cos.cx/{id}
          </p>
          <div className="ml-2 flex flex-shrink-0">
            <p className="inline-flex rounded-full bg-foreground px-2 text-xs font-semibold leading-5 text-gray-700">
              {clicks}
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <p title={url} className="truncate text-sm text-gray-500">
            {url}
          </p>
          <div className="ml-2 flex flex-shrink-0">
            <p className="text-sm text-gray-500">{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
