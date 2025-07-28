import { useScrollSpy } from "../hooks/useScrollSpy";

export const TableOfContents = ({ items }: { items: { id: string; label: string }[] }) => {
  const ids = items.map((item) => item.id);
  const activeId = useScrollSpy(ids);

  return (
    <aside className="hidden lg:block fixed top-20 right-5 w-48">
      <div className="text-sm font-semibold mb-2 text-gray-700">Table of Contents</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm ${
                activeId === item.id ? "text-blue-700 font-bold" : "text-blue-500"
              } hover:underline`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
