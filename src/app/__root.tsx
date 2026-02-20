import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import globalsCss from "@/styles/globals.css?url";
import ThemeToggle from "@/components/ui/theme-toggle";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TanStack Start Starter" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalsCss,
      },
    ],
  }),
  component: RootLayout,
});

function SetInitialThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark' || (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){} })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export function RootLayout() {
  return (
    <html lang="en">
      <head>
        <SetInitialThemeScript />
        <HeadContent />
      </head>
      <body>
        <div className="fixed top-4 right-4 z-50 flex gap-3 items-center">
          {/* <AuthStatus /> */}
          <ThemeToggle />
        </div>
        {/* <AuthProvider> */}
        <Outlet />
        {/* </AuthProvider> */}
        <Scripts />
      </body>
    </html>
  );
}
