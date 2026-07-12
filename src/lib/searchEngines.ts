export type SearchEngine = {
  title: string;
  shortcuts: string[];
  url: string;
};

export const SEARCH_ENGINES: SearchEngine[] = [
  { title: "1Password", shortcuts: ["1pw"], url: "onepassword://search/%s" },
  { title: "Amazon United States", shortcuts: ["a", "amazon"], url: "https://www.amazon.com/s?k=%s" },
  { title: "Claude", shortcuts: ["cld", "claude"], url: "https://claude.ai/new?q=%s" },
  { title: "Dashboard Icons", shortcuts: ["di"], url: "https://dashboardicons.com/icons?q=%s" },
  { title: "DuckDuckGo", shortcuts: ["d", "ddg"], url: "https://duckduckgo.com?q=%s" },
  { title: "Google", shortcuts: ["g", "google"], url: "https://www.google.com/search?q=%s" },
  { title: "Google Drive", shortcuts: ["gdrive", "gd"], url: "https://drive.google.com/drive/search?q=%s" },
  { title: "Google Images", shortcuts: ["gim"], url: "https://www.google.com/search?tbm=isch&q=%s" },
  { title: "Google Maps", shortcuts: ["gm"], url: "https://www.google.com/maps/search/%s" },
  { title: "Iconify", shortcuts: ["icon"], url: "https://icon-sets.iconify.design/?query=%s" },
  { title: "IMDb", shortcuts: ["imdb"], url: "https://www.imdb.com/find?q=%s" },
  { title: "Internet Archive", shortcuts: ["ia"], url: "https://web.archive.org/web/*/%s" },
  { title: "Microsoft Bing Video", shortcuts: ["bv", "bing"], url: "https://www.bing.com/videos/search?q=%s&adlt=off" },
  { title: "OnlyFans", shortcuts: ["onlyfans"], url: "https://onlyfans.com/search?q=%s" },
  { title: "Printables", shortcuts: ["print"], url: "https://www.printables.com/search/models?ctx=models&q=%s" },
  { title: "QR Code", shortcuts: ["qrcode"], url: "https://qrcode.show/%s" },
  { title: "Thingiverse", shortcuts: ["thing"], url: "https://www.thingiverse.com/search?q=%s&page=1" },
  { title: "Walmart", shortcuts: ["walmart"], url: "https://www.walmart.com/search?query=%s" },
  { title: "Yeggi", shortcuts: ["yeggi"], url: "https://m.yeggi.com/q/%s/" },
  { title: "Youtube", shortcuts: ["yt", "youtube"], url: "https://youtube.com/results?search_query=%s" },
];
