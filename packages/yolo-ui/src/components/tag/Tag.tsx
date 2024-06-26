export const Tag = ({ name }: { name: string }) => (
  <div className="px-3 py-1 border border-foreground-primary rounded-full w-max text-sm">
    {name}
  </div>
);

export const TagsList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <Tag key={tag} name={tag} />
    ))}
  </div>
);
