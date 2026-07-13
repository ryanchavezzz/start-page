export type Bookmark = {
  href: string;
  title: string;
  alt?: string;
  src?: string;
  srcLight?: string;
  srcDark?: string;
  category?: string;
  androidApp?: string;
  iosScheme?: string;
  favorite?: number;
};

export type BookmarkSection = {
  category: string;
  label: string;
  links: Bookmark[];
};

const CATEGORY_LABELS: Record<string, string> = {
  mail: "Mail",
  google: "Google",
  accounts: "Accounts",
  dev: "Dev",
  media: "Media",
  printing: "3D Print",
  shopping: "Shopping",
  torrents: "Torrents",
  misc: "Tools",
};

function labelFor(category: string): string {
  return (
    CATEGORY_LABELS[category] ??
    category.charAt(0).toUpperCase() + category.slice(1)
  );
}

function getAllBookmarks(): Bookmark[] {
  const modules = import.meta.glob<{ frontmatter: { links: Bookmark[] } }>(
    "../content/bookmarks.md",
    { eager: true },
  );
  return Object.values(modules)[0].frontmatter.links;
}

export function getFavoriteBookmarks(): Bookmark[] {
  return getAllBookmarks()
    .filter((link) => link.favorite !== undefined)
    .sort((a, b) => a.favorite! - b.favorite!);
}

export function getBookmarkSections(): BookmarkSection[] {
  const links = getAllBookmarks().filter((link) => link.favorite === undefined);

  const groups = new Map<string, Bookmark[]>();
  for (const link of links) {
    const key = link.category ?? "other";
    const group = groups.get(key);
    if (group) {
      group.push(link);
    } else {
      groups.set(key, [link]);
    }
  }

  return Array.from(groups.entries()).map(([category, links]) => ({
    category,
    label: labelFor(category),
    links,
  }));
}
