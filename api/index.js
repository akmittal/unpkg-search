var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/amkumar/projects/personal/unpkg-search/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var import_react2 = __toModule(require("@chakra-ui/react"));
var import_react_query = __toModule(require("react-query"));
var import_react3 = __toModule(require("react"));
var import_nprogress = __toModule(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-JFUSETFZ.css";

// app/components/ColorModeSwitcher.tsx
init_react();
var React2 = __toModule(require("react"));
var import_react = __toModule(require("@chakra-ui/react"));
var import_fa = __toModule(require("react-icons/fa"));
var ColorModeSwitcher = function(props) {
  const { toggleColorMode } = (0, import_react.useColorMode)();
  const text = (0, import_react.useColorModeValue)("dark", "light");
  const SwitchIcon = (0, import_react.useColorModeValue)(import_fa.FaMoon, import_fa.FaSun);
  return /* @__PURE__ */ React2.createElement(import_react.IconButton, __spreadValues({
    size: "md",
    fontSize: "lg",
    variant: "ghost",
    color: "current",
    marginLeft: "2",
    onClick: toggleColorMode,
    icon: /* @__PURE__ */ React2.createElement(SwitchIcon, null),
    "aria-label": `Switch to ${text} mode`
  }, props));
};

// app/components/Navbar.tsx
init_react();
var import_layout = __toModule(require("@chakra-ui/layout"));
var import_react_router_dom = __toModule(require("react-router-dom"));
function Navbar() {
  return /* @__PURE__ */ React.createElement(import_layout.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_layout.Flex, {
    p: "2",
    width: "full",
    cursor: "pointer"
  }, /* @__PURE__ */ React.createElement(import_layout.Box, null, /* @__PURE__ */ React.createElement("img", {
    src: "/logo.png",
    width: "500px",
    height: "200px",
    alt: "unpkg search Logo"
  })))));
}

// app/styles/globals.css
var globals_default = "/build/_assets/globals-BVO2OKJM.css";

// route:/Users/amkumar/projects/personal/unpkg-search/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: globals_default },
  { rel: "stylesheet", href: nprogress_default }
];
var defaultMode = "dark";
var config = {
  initialColorMode: defaultMode,
  useSystemColorMode: false
};
var colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  }
};
var theme = (0, import_react2.extendTheme)({ colors, config });
var queryClient = new import_react_query.QueryClient();
var Document = function({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
};
function App() {
  const transition = (0, import_remix2.useTransition)();
  (0, import_react3.useEffect)(() => {
    if (transition.state === "loading" || transition.state === "submitting") {
      import_nprogress.default.start();
    } else {
      import_nprogress.default.done();
    }
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_query.QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(import_react2.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react2.Flex, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(ColorModeSwitcher, null)), /* @__PURE__ */ React.createElement(import_react_router_dom2.Outlet, null))));
}
var CatchBoundary = function() {
  const caught = (0, import_remix2.useCatch)();
  switch (caught.status) {
    case 401:
    case 404:
      return /* @__PURE__ */ React.createElement(Document, {
        title: `${caught.status} ${caught.statusText}`
      }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText));
    default:
      throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
};
var ErrorBoundary = function({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement(import_react_query.QueryClientProvider, {
    client: queryClient
  }, /* @__PURE__ */ React.createElement(import_react2.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react2.Flex, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(ColorModeSwitcher, null)), /* @__PURE__ */ React.createElement(import_react2.Stack, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react2.Heading, null, "App Error"), /* @__PURE__ */ React.createElement(import_react2.Text, null, "Page you are looking for could not be found")))));
};

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/package/$name.tsx
var name_exports = {};
__export(name_exports, {
  default: () => Query,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_layout2 = __toModule(require("@chakra-ui/layout"));
var import_react_router_dom3 = __toModule(require("react-router-dom"));
var import_react6 = __toModule(require("react"));
var import_select = __toModule(require("@chakra-ui/select"));
var import_button2 = __toModule(require("@chakra-ui/button"));
var import_md = __toModule(require("react-icons/md"));
var import_tooltip = __toModule(require("@chakra-ui/tooltip"));
var import_react_query2 = __toModule(require("react-query"));
var import_remix4 = __toModule(require_remix());
var import_node_fetch = __toModule(require("node-fetch"));

// util/index.ts
init_react();
var copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
var hostUrl;
var isDev = true;
var isBrowser = typeof window !== "undefined";
if (isBrowser) {
  hostUrl = "/";
} else if (isDev) {
  hostUrl = "http://localhost:3000/";
} else {
  hostUrl = "https://www.unpkgsearch.com/";
}

// app/components/Keyword.tsx
init_react();
var import_react4 = __toModule(require("@chakra-ui/react"));
var import_remix3 = __toModule(require_remix());
function Keyword({ item }) {
  return /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: `/search/keywords:${item}`
  }, /* @__PURE__ */ React.createElement("a", null, /* @__PURE__ */ React.createElement(import_react4.Badge, {
    colorScheme: "purple",
    p: "1",
    m: "1",
    borderRadius: "10",
    cursor: "pointer"
  }, item)));
}

// app/components/Search.tsx
init_react();
var import_button = __toModule(require("@chakra-ui/button"));
var import_input = __toModule(require("@chakra-ui/input"));
var import_react5 = __toModule(require("react"));
function Search({ value, onChange, onSubmit }) {
  return /* @__PURE__ */ import_react5.default.createElement(import_input.InputGroup, {
    size: "lg"
  }, /* @__PURE__ */ import_react5.default.createElement(import_input.Input, {
    pr: "4.5rem",
    type: "text",
    placeholder: "Search..",
    onChange: (e) => onChange(e.currentTarget.value),
    onKeyPress: (e) => {
      if (e.key === "Enter") {
        onSubmit();
      }
    },
    value
  }), /* @__PURE__ */ import_react5.default.createElement(import_input.InputRightElement, {
    width: "5.5rem"
  }, /* @__PURE__ */ import_react5.default.createElement(import_button.Button, {
    h: "2rem",
    size: "lg",
    onClick: () => {
      onSubmit();
    },
    colorScheme: "purple"
  }, "Go")));
}

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/package/$name.tsx
var meta = ({ data, params }) => {
  const { name } = params;
  return {
    title: `${name} - Best place to find CDN for developers`,
    description: data.description,
    "og:image": "/logo.png",
    "theme-color": "#d9643a"
  };
};
function Query() {
  var _a;
  const initialData = (0, import_remix4.useLoaderData)();
  const navigate = (0, import_react_router_dom3.useNavigate)();
  const { name = "" } = (0, import_react_router_dom3.useParams)();
  const { data } = (0, import_react_query2.useQuery)(["posts", name], getPackageInfo.bind(null, name), {
    initialData
  });
  const [search, setSearch] = (0, import_react6.useState)("");
  const [version, setVersion] = (0, import_react6.useState)(data["dist-tags"].latest);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_layout2.Box, {
    m: "4",
    w: "lg",
    width: "calc(100% - 30px)"
  }, /* @__PURE__ */ React.createElement(Search, {
    value: search,
    onChange: (value) => setSearch(value),
    onSubmit: () => navigate(`/search/${search}`)
  })), /* @__PURE__ */ React.createElement(import_layout2.VStack, {
    alignItems: "flex-start",
    p: "5"
  }, /* @__PURE__ */ React.createElement(import_layout2.Heading, {
    as: "h1"
  }, name), /* @__PURE__ */ React.createElement(import_layout2.Flex, {
    as: "h3"
  }, data.description), /* @__PURE__ */ React.createElement(import_layout2.Flex, null, /* @__PURE__ */ React.createElement(import_select.Select, {
    placeholder: "Select version",
    onChange: (evt) => setVersion(evt.currentTarget.value)
  }, Object.keys(data.versions).reverse().map((value) => /* @__PURE__ */ React.createElement("option", {
    selected: value === version,
    value
  }, value)))), /* @__PURE__ */ React.createElement(import_layout2.VStack, {
    alignItems: "flex-start"
  }, data.versions[version].main && /* @__PURE__ */ React.createElement(AssetMeta, {
    data,
    type: "main",
    version
  }), data.versions[version].style && /* @__PURE__ */ React.createElement(AssetMeta, {
    data,
    type: "style",
    version
  }), data.versions[version].module && /* @__PURE__ */ React.createElement(AssetMeta, {
    data,
    type: "module",
    version
  })), /* @__PURE__ */ React.createElement(import_layout2.Flex, {
    flexWrap: "wrap"
  }, (_a = data.versions[version].keywords) == null ? void 0 : _a.map((item) => /* @__PURE__ */ React.createElement(Keyword, {
    item
  }))), /* @__PURE__ */ React.createElement("a", {
    href: `https://unpkg.com/browse/${name}@${version}/`,
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(import_button2.Button, {
    colorScheme: "purple"
  }, "Browse Package on UNPKG"))));
}
var AssetMeta = function({ type, data, version }) {
  const [tooptipOpen, setTooltipOpen] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ React.createElement(import_layout2.HStack, null, /* @__PURE__ */ React.createElement(import_layout2.Flex, {
    gridGap: "2",
    alignItems: "center",
    flexWrap: "wrap"
  }, /* @__PURE__ */ React.createElement("strong", null, type, ":"), " ", /* @__PURE__ */ React.createElement(import_layout2.Flex, {
    overflow: "scroll",
    width: "full"
  }, /* @__PURE__ */ React.createElement(import_layout2.Link, {
    href: getVersionURL(data, version, type),
    target: "_blank",
    backgroundColor: "rgba(0,0,0,0.2)",
    px: "2",
    borderRadius: "5",
    py: "1"
  }, getVersionURL(data, version, type))), /* @__PURE__ */ React.createElement(import_tooltip.Tooltip, {
    label: "copied",
    isOpen: tooptipOpen
  }, /* @__PURE__ */ React.createElement(import_button2.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_md.MdContentCopy, null),
    variant: "outline",
    size: "xs",
    onClick: () => {
      copyToClipboard(getVersionURL(data, version, type));
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 600);
    }
  }, "Copy URL"))));
};
function getVersionURL(data, version, type) {
  if (!type) {
    type = "main";
  }
  return `https://unpkg.com/${data._id}@${version}/${data.versions[version][type]}`;
}
var loader = async ({ params }) => {
  const { name } = params;
  if (!name) {
    throw new Response("", { status: 404 });
  }
  try {
    const data = await getPackageInfo(name);
    return (0, import_remix4.json)(data);
  } catch (e) {
    throw new Response("", { status: 404 });
  }
};
async function getPackageInfo(packagename) {
  const url = `https://registry.npmjs.com/${packagename}`;
  const res = await (0, import_node_fetch.default)(`${url}`, {
    method: "GET",
    headers: {
      "accept-encoding": "gzip"
    }
  });
  const data = await res.json();
  if (data.status === 404) {
    throw new Error("package not found");
  }
  for (const key in data.versions) {
    const versionInfo = data.versions[key];
    data.versions[key] = {
      name: versionInfo.name || "",
      description: versionInfo.description || "",
      version: versionInfo.version || "",
      main: versionInfo.main || "",
      module: versionInfo.module || "",
      style: versionInfo.style || ""
    };
  }
  delete data.maintainers;
  delete data.time;
  delete data.repository;
  delete data.users;
  delete data.bugs;
  return data;
}

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/search/$query.tsx
var query_exports = {};
__export(query_exports, {
  default: () => Query2,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_layout4 = __toModule(require("@chakra-ui/layout"));
var import_remix5 = __toModule(require_remix());
var import_react_router_dom5 = __toModule(require("react-router-dom"));
var import_react9 = __toModule(require("react"));
var import_node_fetch2 = __toModule(require("node-fetch"));

// app/components/SearchResult.tsx
init_react();
var import_layout3 = __toModule(require("@chakra-ui/layout"));
var import_react7 = __toModule(require("react"));
var import_react_router_dom4 = __toModule(require("react-router-dom"));
var import_button3 = __toModule(require("@chakra-ui/button"));
var import_icons = __toModule(require("@chakra-ui/icons"));
var import_react8 = __toModule(require("@chakra-ui/react"));
function SearchResult({
  name,
  description,
  version,
  keywords,
  cdnLink
}) {
  const [tooltipOpen, setTooltipOpen] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ React.createElement(import_layout3.Box, {
    p: "5",
    borderBottom: "1px",
    borderColor: "whiteAlpha.400",
    m: "2"
  }, /* @__PURE__ */ React.createElement(import_layout3.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_layout3.Box, null, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: `/package/${encodeURIComponent(name)}`
  }, /* @__PURE__ */ React.createElement(import_react8.Link, null, /* @__PURE__ */ React.createElement(import_layout3.Heading, {
    size: "lg"
  }, name))), /* @__PURE__ */ React.createElement(import_layout3.Heading, {
    size: "xs"
  }, description), /* @__PURE__ */ React.createElement(import_layout3.Box, null, /* @__PURE__ */ React.createElement("strong", null, "v", version, " ", "URL:", " "), /* @__PURE__ */ React.createElement(import_react8.Link, {
    href: cdnLink,
    target: "_blank",
    px: "1",
    rel: "noopener"
  }, cdnLink), /* @__PURE__ */ React.createElement(import_react8.Tooltip, {
    label: "copied",
    isOpen: tooltipOpen
  }, /* @__PURE__ */ React.createElement(import_button3.IconButton, {
    mx: "2",
    "aria-label": "Copy CDN path",
    title: "Copy CDN Path",
    icon: /* @__PURE__ */ React.createElement(import_icons.CopyIcon, null),
    onClick: () => {
      copyToClipboard(cdnLink);
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 500);
    }
  }))), /* @__PURE__ */ React.createElement(import_layout3.Flex, {
    my: "2",
    gridGap: "2"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: `/package/${name}`
  }, /* @__PURE__ */ React.createElement(import_button3.Button, {
    as: "a",
    colorScheme: "purple"
  }, "Open")), /* @__PURE__ */ React.createElement("a", {
    href: `https://unpkg.com/${encodeURIComponent(name)}/`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_button3.Button, {
    colorScheme: "purple"
  }, "Browse Files"))), keywords == null ? void 0 : keywords.map((item) => /* @__PURE__ */ React.createElement(Keyword, {
    item
  })))));
}

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/search/$query.tsx
var meta2 = () => ({
  title: "UNPKG Search",
  description: "Search for packages on UNPKG",
  keywords: "unpkg search, unpkg, search, CDN, npm, github, package search,"
});
function Query2() {
  const data = (0, import_remix5.useLoaderData)();
  const navigate = (0, import_react_router_dom5.useNavigate)();
  const [searchParams] = (0, import_react_router_dom5.useSearchParams)();
  const query = searchParams.get("query") || "";
  const [search, setSearch] = (0, import_react9.useState)(query);
  (0, import_react9.useEffect)(() => {
    const query2 = searchParams.get("query") || "";
    setSearch(query2);
  }, [searchParams]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_layout4.Box, {
    m: "4",
    w: "calc(100% - 30px)"
  }, /* @__PURE__ */ React.createElement(Search, {
    value: search,
    onChange: (value) => setSearch(value),
    onSubmit: () => navigate(`/search/${search}`)
  })), Array.from(data.objects).map((datum) => {
    const {
      name,
      description,
      version,
      keywords,
      author,
      publisher,
      maintainers,
      cdnLink
    } = datum.package;
    return /* @__PURE__ */ React.createElement(SearchResult, {
      key: name,
      cdnLink,
      name,
      description,
      version,
      keywords,
      author,
      publisher,
      maintainers
    });
  }));
}
var loader2 = async ({ params }) => {
  const { query } = params;
  const res = await (0, import_node_fetch2.default)(`https://registry.npmjs.com/-/v1/search?text=${query}&size=5`, {
    headers: {
      "accept-encoding": "gzip"
    }
  });
  const data = await res.json();
  const pathPromises = [];
  for (const result of data.objects) {
    pathPromises.push(getPackagePath(result.package.name));
  }
  const results = await Promise.all(pathPromises);
  for (let i = 0; i < data.objects.length; i++) {
    data.objects[i].package.cdnLink = results[i];
  }
  return (0, import_remix5.json)(data);
};
async function getPackagePath(packagename) {
  const res = await (0, import_node_fetch2.default)(`https://unpkg.com/${packagename}`, {
    redirect: "follow",
    method: "HEAD",
    headers: {
      "accept-encoding": "gzip"
    }
  });
  return res.url;
}

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home,
  links: () => links2,
  meta: () => meta3
});
init_react();
var import_layout5 = __toModule(require("@chakra-ui/layout"));
var import_react_router_dom6 = __toModule(require("react-router-dom"));
var import_react12 = __toModule(require("react"));

// app/components/KeywordCard.tsx
init_react();
var import_icons2 = __toModule(require("@chakra-ui/icons"));
var import_react10 = __toModule(require("@chakra-ui/react"));
var import_remix6 = __toModule(require_remix());
var import_react11 = __toModule(require("react"));
var KeywordCard = function Keyword2({
  icon,
  label,
  keyword
}) {
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Flex, {
    flex: "1 0 40%",
    justifyContent: "space-around"
  }, /* @__PURE__ */ import_react11.default.createElement(import_remix6.Link, {
    to: `/search/keywords:${keyword}`
  }, /* @__PURE__ */ import_react11.default.createElement("a", {
    href: `/search/keywords:${keyword}`
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.Flex, {
    p: "4",
    border: "1px solid #444",
    borderRadius: "2",
    cursor: "pointer",
    gridGap: "2",
    _hover: { background: "rgba(144,122,239,0.4)" }
  }, /* @__PURE__ */ import_react11.default.createElement(import_icons2.Icon, {
    as: icon
  }), /* @__PURE__ */ import_react11.default.createElement(import_react10.Heading, {
    size: "sm"
  }, label)))));
};
var KeywordCard_default = KeywordCard;

// app/styles/home.css
var home_default = "/build/_assets/home-A6HOIGBM.css";

// route:/Users/amkumar/projects/personal/unpkg-search/app/routes/index.tsx
var import_fa2 = __toModule(require("react-icons/fa"));
var links2 = () => {
  return [{ rel: "stylesheet", href: home_default }];
};
var meta3 = () => {
  return {
    title: "UNPKG Search",
    description: "Search for packages on UNPKG",
    keywords: "unpkg search, unpkg, search, CDN, npm, github, package search,"
  };
};
var discover = [
  { icon: import_fa2.FaCode, label: "Front End", keyword: "front-end" },
  { icon: import_fa2.FaServer, label: "Back End", keyword: "backend" },
  { icon: import_fa2.FaTerminal, label: "CLI", keyword: "cli" },
  { icon: import_fa2.FaFile, label: "Documentation", keyword: "documentation" },
  { icon: import_fa2.FaCss3, label: "CSS", keyword: "css" },
  { icon: import_fa2.FaCheck, label: "Testing", keyword: "testing" },
  { icon: import_fa2.FaNetworkWired, label: "IoT", keyword: "iot" },
  { icon: import_fa2.FaShieldAlt, label: "Coverage", keyword: "coverage" },
  { icon: import_fa2.FaMobile, label: "Mobile", keyword: "mobile" },
  { icon: import_fa2.FaCrop, label: "Frameworks", keyword: "framework" },
  { icon: import_fa2.FaRobot, label: "Robotics", keyword: "robotics" },
  { icon: import_fa2.FaSquareRootAlt, label: "Math", keyword: "math" }
];
function Home() {
  const [search, setSearch] = (0, import_react12.useState)("");
  const navigate = (0, import_react_router_dom6.useNavigate)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "main"
  }, /* @__PURE__ */ React.createElement(Search, {
    onSubmit: () => navigate(`/search/${search}`),
    value: search,
    onChange: (value) => {
      setSearch(value);
    }
  })), /* @__PURE__ */ React.createElement(import_layout5.Heading, {
    size: "lg",
    mb: "4"
  }, "Discover Packages"), /* @__PURE__ */ React.createElement(import_layout5.Flex, {
    gridGap: "2",
    direction: "row",
    mb: "4",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "50%",
    maxW: "400px"
  }, discover.map((item) => /* @__PURE__ */ React.createElement(KeywordCard_default, {
    icon: item.icon,
    keyword: item.keyword,
    label: item.label
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9f48dacd", "entry": { "module": "/build/entry.client-XENVEHDE.js", "imports": ["/build/_shared/chunk-3XUDCWXE.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Y54VLOHV.js", "imports": ["/build/_shared/chunk-5OZU2PDP.js", "/build/_shared/chunk-W7IZRIHH.js", "/build/_shared/chunk-MM4VHIHI.js", "/build/_shared/chunk-44I2IEBF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UKUY2L3M.js", "imports": ["/build/_shared/chunk-CEZHVXIC.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/package/$name": { "id": "routes/package/$name", "parentId": "root", "path": "package/:name", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/package/$name-7WPPRD6T.js", "imports": ["/build/_shared/chunk-GJSEXB4F.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/$query": { "id": "routes/search/$query", "parentId": "root", "path": "search/:query", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search/$query-OKWP2LX4.js", "imports": ["/build/_shared/chunk-GJSEXB4F.js", "/build/_shared/chunk-CEZHVXIC.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9F48DACD.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/package/$name": {
    id: "routes/package/$name",
    parentId: "root",
    path: "package/:name",
    index: void 0,
    caseSensitive: void 0,
    module: name_exports
  },
  "routes/search/$query": {
    id: "routes/search/$query",
    parentId: "root",
    path: "search/:query",
    index: void 0,
    caseSensitive: void 0,
    module: query_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29sb3JNb2RlU3dpdGNoZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAicm91dGU6L1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2ctc2VhcmNoL2FwcC9yb3V0ZXMvcGFja2FnZS8kbmFtZS50c3giLCAiLi4vdXRpbC9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9LZXl3b3JkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZWFyY2gudHN4IiwgInJvdXRlOi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvcm91dGVzL3NlYXJjaC8kcXVlcnkudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC50c3giLCAicm91dGU6L1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2ctc2VhcmNoL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0tleXdvcmRDYXJkLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvYW1rdW1hci9wcm9qZWN0cy9wZXJzb25hbC91bnBrZy1zZWFyY2gvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvcm91dGVzL3BhY2thZ2UvJG5hbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvcm91dGVzL3NlYXJjaC8kcXVlcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnLXNlYXJjaC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGFja2FnZS8kbmFtZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGFja2FnZS8kbmFtZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYWNrYWdlLzpuYW1lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlYXJjaC86cXVlcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHtcbiAgTWV0YSwgTGlua3MsIFNjcmlwdHMsIExpdmVSZWxvYWQsIHVzZUNhdGNoLCB1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7XG4gIENoYWtyYVByb3ZpZGVyLFxuICBDb2xvck1vZGUsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIFN0YWNrLFxuICBleHRlbmRUaGVtZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE5wcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuXG5pbXBvcnQgc3R5bGVzVXJsMiBmcm9tICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XG5pbXBvcnQgeyBDb2xvck1vZGVTd2l0Y2hlciB9IGZyb20gJy4vY29tcG9uZW50cy9Db2xvck1vZGVTd2l0Y2hlcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybDIgfSxcbl07XG5cbmNvbnN0IGRlZmF1bHRNb2RlOiBDb2xvck1vZGUgPSAnZGFyayc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogZGVmYXVsdE1vZGUsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGJyYW5kOiB7XG4gICAgOTAwOiAnIzFhMzY1ZCcsXG4gICAgODAwOiAnIzE1M2U3NScsXG4gICAgNzAwOiAnIzJhNjlhYycsXG4gIH0sXG59O1xuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbG9ycywgY29uZmlnIH0pO1xuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuY29uc3QgRG9jdW1lbnQgPSBmdW5jdGlvbiAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZycgfHwgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnKSB7XG4gICAgICBOcHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTnByb2dyZXNzLmRvbmUoKTtcbiAgICB9XG4gIH0sIFt0cmFuc2l0aW9uLnN0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTd2l0Y2hlciAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IHZhciBDYXRjaEJvdW5kYXJ5ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0RvY3VtZW50PlxuICAgICAgKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGNhdWdodCByZXNwb25zZSB3aXRoIHN0YXR1czogJHtjYXVnaHQuc3RhdHVzfWAsXG4gICAgICApO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIEVycm9yQm91bmRhcnkgPSBmdW5jdGlvbiAoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiVWgtb2ghXCI+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTd2l0Y2hlciAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEhlYWRpbmc+QXBwIEVycm9yPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQ+UGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZDwvVGV4dD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIEljb25CdXR0b24sXG4gIEljb25CdXR0b25Qcm9wcyxcblxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhTW9vbiwgRmFTdW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbnR5cGUgQ29sb3JNb2RlU3dpdGNoZXJQcm9wcyA9IE9taXQ8SWNvbkJ1dHRvblByb3BzLCAnYXJpYS1sYWJlbCc+XG5cbmV4cG9ydCBjb25zdCBDb2xvck1vZGVTd2l0Y2hlcjogUmVhY3QuRkM8Q29sb3JNb2RlU3dpdGNoZXJQcm9wcz4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCB0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2RhcmsnLCAnbGlnaHQnKTtcbiAgY29uc3QgU3dpdGNoSWNvbiA9IHVzZUNvbG9yTW9kZVZhbHVlKEZhTW9vbiwgRmFTdW4pO1xuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b25cbiAgICAgIHNpemU9XCJtZFwiXG4gICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICBjb2xvcj1cImN1cnJlbnRcIlxuICAgICAgbWFyZ2luTGVmdD1cIjJcIlxuICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgaWNvbj17PFN3aXRjaEljb24gLz59XG4gICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7dGV4dH0gbW9kZWB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxGbGV4IHA9XCIyXCIgd2lkdGg9XCJmdWxsXCIgY3Vyc29yPVwicG9pbnRlclwiPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgIGFsdD1cInVucGtnIHNlYXJjaCBMb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvTGluaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQm94LCBGbGV4LCBIZWFkaW5nLCBIU3RhY2ssIExpbmssIFZTdGFjayxcbn0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAY2hha3JhLXVpL3NlbGVjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XG5pbXBvcnQgeyBNZENvbnRlbnRDb3B5IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvdG9vbHRpcCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7XG4gIE1ldGFGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIGpzb24sIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgS2V5d29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0tleXdvcmQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhLCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUgfSA9IHBhcmFtcztcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYCR7bmFtZX0gLSBCZXN0IHBsYWNlIHRvIGZpbmQgQ0ROIGZvciBkZXZlbG9wZXJzYCxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAnb2c6aW1hZ2UnOiAnL2xvZ28ucG5nJyxcbiAgICAndGhlbWUtY29sb3InOiAnI2Q5NjQzYScsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVyeSgpIHtcbiAgY29uc3QgaW5pdGlhbERhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgeyBuYW1lID0gJycgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoWydwb3N0cycsIG5hbWVdLCBnZXRQYWNrYWdlSW5mby5iaW5kKG51bGwsIG5hbWUpLCB7XG4gICAgaW5pdGlhbERhdGEsXG4gIH0pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFt2ZXJzaW9uLCBzZXRWZXJzaW9uXSA9IHVzZVN0YXRlKGRhdGFbJ2Rpc3QtdGFncyddLmxhdGVzdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBtPVwiNFwiIHc9XCJsZ1wiIHdpZHRoPVwiY2FsYygxMDAlIC0gMzBweClcIj5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VhcmNoKHZhbHVlKX1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbmF2aWdhdGUoYC9zZWFyY2gvJHtzZWFyY2h9YCl9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cblxuICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHA9XCI1XCI+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgIDxGbGV4IGFzPVwiaDNcIj57ZGF0YS5kZXNjcmlwdGlvbn08L0ZsZXg+XG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHNldFZlcnNpb24oZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhLnZlcnNpb25zKVxuICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD17dmFsdWUgPT09IHZlcnNpb259IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICB7ZGF0YS52ZXJzaW9uc1t2ZXJzaW9uXS5tYWluICYmIChcbiAgICAgICAgICAgIDxBc3NldE1ldGEgZGF0YT17ZGF0YX0gdHlwZT1cIm1haW5cIiB2ZXJzaW9uPXt2ZXJzaW9ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RhdGEudmVyc2lvbnNbdmVyc2lvbl0uc3R5bGUgJiYgKFxuICAgICAgICAgICAgPEFzc2V0TWV0YSBkYXRhPXtkYXRhfSB0eXBlPVwic3R5bGVcIiB2ZXJzaW9uPXt2ZXJzaW9ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RhdGEudmVyc2lvbnNbdmVyc2lvbl0ubW9kdWxlICYmIChcbiAgICAgICAgICAgIDxBc3NldE1ldGEgZGF0YT17ZGF0YX0gdHlwZT1cIm1vZHVsZVwiIHZlcnNpb249e3ZlcnNpb259IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgIHtkYXRhLnZlcnNpb25zW3ZlcnNpb25dLmtleXdvcmRzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxLZXl3b3JkIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlLyR7bmFtZX1AJHt2ZXJzaW9ufS9gfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicHVycGxlXCI+QnJvd3NlIFBhY2thZ2Ugb24gVU5QS0c8L0J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmludGVyZmFjZSBBc3NldFByb3BzIHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBhbnk7XG4gIHZlcnNpb246IHN0cmluZztcbn1cblxudmFyIEFzc2V0TWV0YSA9IGZ1bmN0aW9uICh7IHR5cGUsIGRhdGEsIHZlcnNpb24gfTogQXNzZXRQcm9wcykge1xuICBjb25zdCBbdG9vcHRpcE9wZW4sIHNldFRvb2x0aXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8SFN0YWNrPlxuICAgICAgPEZsZXggZ3JpZEdhcD1cIjJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAge3R5cGV9XG4gICAgICAgICAgOlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZsZXggb3ZlcmZsb3c9XCJzY3JvbGxcIiB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17Z2V0VmVyc2lvblVSTChkYXRhLCB2ZXJzaW9uLCB0eXBlKX1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsMCwwLDAuMilcIlxuICAgICAgICAgICAgcHg9XCIyXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVcIlxuICAgICAgICAgICAgcHk9XCIxXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0VmVyc2lvblVSTChkYXRhLCB2ZXJzaW9uLCB0eXBlKX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJjb3BpZWRcIiBpc09wZW49e3Rvb3B0aXBPcGVufT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBsZWZ0SWNvbj17PE1kQ29udGVudENvcHkgLz59XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoZ2V0VmVyc2lvblVSTChkYXRhLCB2ZXJzaW9uLCB0eXBlKSk7XG4gICAgICAgICAgICAgIHNldFRvb2x0aXBPcGVuKHRydWUpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUb29sdGlwT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvcHkgVVJMXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0hTdGFjaz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFZlcnNpb25VUkwoZGF0YTogYW55LCB2ZXJzaW9uOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgdHlwZSA9ICdtYWluJztcbiAgfVxuICByZXR1cm4gYGh0dHBzOi8vdW5wa2cuY29tLyR7ZGF0YS5faWR9QCR7dmVyc2lvbn0vJHtkYXRhLnZlcnNpb25zW3ZlcnNpb25dW3R5cGVdfWA7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBuYW1lIH0gPSBwYXJhbXM7XG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZSgnJywgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQYWNrYWdlSW5mbyhuYW1lKTtcbiAgICByZXR1cm4ganNvbihkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZSgnJywgeyBzdGF0dXM6IDQwNCB9KTtcbiAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZUluZm8ocGFja2FnZW5hbWU6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5jb20vJHtwYWNrYWdlbmFtZX1gO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ2FjY2VwdC1lbmNvZGluZyc6ICdnemlwJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmIChkYXRhLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwYWNrYWdlIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YS52ZXJzaW9ucykge1xuICAgIGNvbnN0IHZlcnNpb25JbmZvID0gZGF0YS52ZXJzaW9uc1trZXldO1xuICAgIGRhdGEudmVyc2lvbnNba2V5XSA9IHtcbiAgICAgIG5hbWU6IHZlcnNpb25JbmZvLm5hbWUgfHwgJycsXG4gICAgICBkZXNjcmlwdGlvbjogdmVyc2lvbkluZm8uZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB2ZXJzaW9uOiB2ZXJzaW9uSW5mby52ZXJzaW9uIHx8ICcnLFxuICAgICAgbWFpbjogdmVyc2lvbkluZm8ubWFpbiB8fCAnJyxcbiAgICAgIG1vZHVsZTogdmVyc2lvbkluZm8ubW9kdWxlIHx8ICcnLFxuICAgICAgc3R5bGU6IHZlcnNpb25JbmZvLnN0eWxlIHx8ICcnLFxuICAgIH07XG4gIH1cbiAgZGVsZXRlIGRhdGEubWFpbnRhaW5lcnM7XG4gIGRlbGV0ZSBkYXRhLnRpbWU7XG4gIGRlbGV0ZSBkYXRhLnJlcG9zaXRvcnk7XG4gIGRlbGV0ZSBkYXRhLnVzZXJzO1xuICBkZWxldGUgZGF0YS5idWdzO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwgImV4cG9ydCBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBlbC52YWx1ZSA9IHN0cjtcbiAgZWwuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJcIik7XG4gIGVsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBlbC5zdHlsZS5sZWZ0ID0gXCItOTk5OXB4XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICBlbC5zZWxlY3QoKTtcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbn07XG5sZXQgaG9zdFVybDtcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiO1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbmlmIChpc0Jyb3dzZXIpIHtcbiAgaG9zdFVybCA9IFwiL1wiO1xufSBlbHNlIGlmIChpc0Rldikge1xuICBob3N0VXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCI7XG59IGVsc2Uge1xuICBob3N0VXJsID0gXCJodHRwczovL3d3dy51bnBrZ3NlYXJjaC5jb20vXCI7XG59XG5cbmV4cG9ydCBjb25zdCBob3N0ID0gaG9zdFVybDtcbiIsICJpbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXl3b3JkKHsgaXRlbSB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e2Avc2VhcmNoL2tleXdvcmRzOiR7aXRlbX1gfT5cbiAgICAgIDxhPlxuICAgICAgICA8QmFkZ2VcbiAgICAgICAgICBjb2xvclNjaGVtZT1cInB1cnBsZVwiXG4gICAgICAgICAgcD1cIjFcIlxuICAgICAgICAgIG09XCIxXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbX1cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xuaW1wb3J0IHsgSW5wdXQsIElucHV0R3JvdXAsIElucHV0UmlnaHRFbGVtZW50IH0gZnJvbSAnQGNoYWtyYS11aS9pbnB1dCc7XG5cbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gdmFsdWU6c3RyaW5nO1xuIG9uQ2hhbmdlOih2YWx1ZTpzdHJpbmcpID0+IHZvaWRcbiBvblN1Ym1pdDooKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IHZhbHVlLCBvbkNoYW5nZSwgb25TdWJtaXQgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxuICAgICAgPElucHV0XG4gICAgICAgIHByPVwiNC41cmVtXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVByZXNzPXsoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgb25TdWJtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRSaWdodEVsZW1lbnQgd2lkdGg9XCI1LjVyZW1cIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGg9XCIycmVtXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uU3VibWl0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvclNjaGVtZT1cInB1cnBsZVwiXG4gICAgICAgID5cbiAgICAgICAgICBHb1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSW5wdXRSaWdodEVsZW1lbnQ+XG4gICAgPC9JbnB1dEdyb3VwPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcblxuaW1wb3J0IHtcbiAgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIE1ldGFGdW5jdGlvbiwganNvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICB0aXRsZTogJ1VOUEtHIFNlYXJjaCcsXG4gIGRlc2NyaXB0aW9uOiAnU2VhcmNoIGZvciBwYWNrYWdlcyBvbiBVTlBLRycsXG4gIGtleXdvcmRzOiAndW5wa2cgc2VhcmNoLCB1bnBrZywgc2VhcmNoLCBDRE4sIG5wbSwgZ2l0aHViLCBwYWNrYWdlIHNlYXJjaCwnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXJ5KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpIHx8ICcnO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZTxzdHJpbmc+KHF1ZXJ5KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3F1ZXJ5JykgfHwgJyc7XG5cbiAgICBzZXRTZWFyY2gocXVlcnkpO1xuICB9LCBbc2VhcmNoUGFyYW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBtPVwiNFwiIHc9XCJjYWxjKDEwMCUgLSAzMHB4KVwiPlxuICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTZWFyY2godmFsdWUpfVxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBuYXZpZ2F0ZShgL3NlYXJjaC8ke3NlYXJjaH1gKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7QXJyYXkuZnJvbShkYXRhLm9iamVjdHMpLm1hcCgoZGF0dW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIGtleXdvcmRzLFxuICAgICAgICAgIGF1dGhvcixcbiAgICAgICAgICBwdWJsaXNoZXIsXG4gICAgICAgICAgbWFpbnRhaW5lcnMsXG4gICAgICAgICAgY2RuTGluayxcbiAgICAgICAgfSA9IGRhdHVtLnBhY2thZ2U7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgY2RuTGluaz17Y2RuTGlua31cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgICAga2V5d29yZHM9e2tleXdvcmRzfVxuICAgICAgICAgICAgYXV0aG9yPXthdXRob3J9XG4gICAgICAgICAgICBwdWJsaXNoZXI9e3B1Ymxpc2hlcn1cbiAgICAgICAgICAgIG1haW50YWluZXJzPXttYWludGFpbmVyc31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLmNvbS8tL3YxL3NlYXJjaD90ZXh0PSR7cXVlcnl9JnNpemU9NWAsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnYWNjZXB0LWVuY29kaW5nJzogJ2d6aXAnLFxuICAgICAgfSxcbiAgICB9LFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgcGF0aFByb21pc2VzID0gW107XG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIGRhdGEub2JqZWN0cykge1xuICAgIHBhdGhQcm9taXNlcy5wdXNoKGdldFBhY2thZ2VQYXRoKHJlc3VsdC5wYWNrYWdlLm5hbWUpKTtcbiAgfVxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocGF0aFByb21pc2VzKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEub2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEub2JqZWN0c1tpXS5wYWNrYWdlLmNkbkxpbmsgPSByZXN1bHRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIGpzb24oZGF0YSk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlUGF0aChwYWNrYWdlbmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3VucGtnLmNvbS8ke3BhY2thZ2VuYW1lfWAsIHtcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgbWV0aG9kOiAnSEVBRCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ2FjY2VwdC1lbmNvZGluZyc6ICdnemlwJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzLnVybDtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xuaW1wb3J0IHsgQ29weUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IExpbmsgYXMgQ2hha3JhTGluaywgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IEtleXdvcmQgZnJvbSAnLi9LZXl3b3JkJztcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAga2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgYXV0aG9yPzogQXV0aG9yO1xuICBwdWJsaXNoZXI/OiBQZXJzb247XG4gIG1haW50YWluZXJzPzogUGVyc29uW107XG4gIGNkbkxpbms6IHN0cmluZztcbn1cbmludGVyZmFjZSBBdXRob3IgZXh0ZW5kcyBXaXRoRW1haWwge1xuICBuYW1lOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgV2l0aEVtYWlsIHtcbiAgZW1haWw6IHN0cmluZztcbn1cbmludGVyZmFjZSBQZXJzb24gZXh0ZW5kcyBXaXRoRW1haWwge1xuICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHQoe1xuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgdmVyc2lvbixcbiAga2V5d29yZHMsXG4gIGNkbkxpbmssXG59OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFt0b29sdGlwT3Blbiwgc2V0VG9vbHRpcE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggcD1cIjVcIiBib3JkZXJCb3R0b209XCIxcHhcIiBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuNDAwXCIgbT1cIjJcIj5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8TGluayB0bz17YC9wYWNrYWdlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWB9PlxuICAgICAgICAgICAgPENoYWtyYUxpbms+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiPntuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInhzXCI+e2Rlc2NyaXB0aW9ufTwvSGVhZGluZz5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgIHt2ZXJzaW9ufVxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBVUkw6XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDxDaGFrcmFMaW5rIGhyZWY9e2Nkbkxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHB4PVwiMVwiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgIHtjZG5MaW5rfVxuICAgICAgICAgICAgPC9DaGFrcmFMaW5rPlxuICAgICAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJjb3BpZWRcIiBpc09wZW49e3Rvb2x0aXBPcGVufT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBteD1cIjJcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb3B5IENETiBwYXRoXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvcHkgQ0ROIFBhdGhcIlxuICAgICAgICAgICAgICAgIGljb249ezxDb3B5SWNvbiAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoY2RuTGluayk7XG4gICAgICAgICAgICAgICAgICBzZXRUb29sdGlwT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb29sdGlwT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEZsZXggbXk9XCIyXCIgZ3JpZEdhcD1cIjJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3BhY2thZ2UvJHtuYW1lfWB9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIGNvbG9yU2NoZW1lPVwicHVycGxlXCI+XG4gICAgICAgICAgICAgICAgT3BlblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3VucGtnLmNvbS8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX0vYH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJwdXJwbGVcIj5Ccm93c2UgRmlsZXM8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICB7a2V5d29yZHM/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEtleXdvcmQgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRmxleCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBLZXl3b3JkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9LZXl3b3JkQ2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQge1xuICBGYUNvZGUsXG4gIEZhVGVybWluYWwsXG4gIEZhQ2hlY2ssXG4gIEZhTW9iaWxlLFxuICBGYVJvYm90LFxuICBGYUNzczMsXG4gIEZhU2VydmVyLFxuICBGYUZpbGUsXG4gIEZhTmV0d29ya1dpcmVkLFxuICBGYVNoaWVsZEFsdCxcbiAgRmFDcm9wLFxuICBGYVNxdWFyZVJvb3RBbHQsXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlVOUEtHIFNlYXJjaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlYXJjaCBmb3IgcGFja2FnZXMgb24gVU5QS0dcIixcbiAgICBrZXl3b3JkczogXCJ1bnBrZyBzZWFyY2gsIHVucGtnLCBzZWFyY2gsIENETiwgbnBtLCBnaXRodWIsIHBhY2thZ2Ugc2VhcmNoLFwiLFxuICB9O1xufTtcblxuY29uc3QgZGlzY292ZXIgPSBbXG4gIHsgaWNvbjogRmFDb2RlLCBsYWJlbDogXCJGcm9udCBFbmRcIiwga2V5d29yZDogXCJmcm9udC1lbmRcIiB9LFxuICB7IGljb246IEZhU2VydmVyLCBsYWJlbDogXCJCYWNrIEVuZFwiLCBrZXl3b3JkOiBcImJhY2tlbmRcIiB9LFxuICB7IGljb246IEZhVGVybWluYWwsIGxhYmVsOiBcIkNMSVwiLCBrZXl3b3JkOiBcImNsaVwiIH0sXG4gIHsgaWNvbjogRmFGaWxlLCBsYWJlbDogXCJEb2N1bWVudGF0aW9uXCIsIGtleXdvcmQ6IFwiZG9jdW1lbnRhdGlvblwiIH0sXG4gIHsgaWNvbjogRmFDc3MzLCBsYWJlbDogXCJDU1NcIiwga2V5d29yZDogXCJjc3NcIiB9LFxuICB7IGljb246IEZhQ2hlY2ssIGxhYmVsOiBcIlRlc3RpbmdcIiwga2V5d29yZDogXCJ0ZXN0aW5nXCIgfSxcbiAgeyBpY29uOiBGYU5ldHdvcmtXaXJlZCwgbGFiZWw6IFwiSW9UXCIsIGtleXdvcmQ6IFwiaW90XCIgfSxcbiAgeyBpY29uOiBGYVNoaWVsZEFsdCwgbGFiZWw6IFwiQ292ZXJhZ2VcIiwga2V5d29yZDogXCJjb3ZlcmFnZVwiIH0sXG4gIHsgaWNvbjogRmFNb2JpbGUsIGxhYmVsOiBcIk1vYmlsZVwiLCBrZXl3b3JkOiBcIm1vYmlsZVwiIH0sXG4gIHsgaWNvbjogRmFDcm9wLCBsYWJlbDogXCJGcmFtZXdvcmtzXCIsIGtleXdvcmQ6IFwiZnJhbWV3b3JrXCIgfSxcbiAgeyBpY29uOiBGYVJvYm90LCBsYWJlbDogXCJSb2JvdGljc1wiLCBrZXl3b3JkOiBcInJvYm90aWNzXCIgfSxcbiAgeyBpY29uOiBGYVNxdWFyZVJvb3RBbHQsIGxhYmVsOiBcIk1hdGhcIiwga2V5d29yZDogXCJtYXRoXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBuYXZpZ2F0ZShgL3NlYXJjaC8ke3NlYXJjaH1gKX1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaCh2YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiIG1iPVwiNFwiPlxuICAgICAgICBEaXNjb3ZlciBQYWNrYWdlc1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEZsZXhcbiAgICAgICAgZ3JpZEdhcD1cIjJcIlxuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBtYj1cIjRcIlxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcbiAgICAgICAgbWF4Vz1cIjQwMHB4XCJcbiAgICAgID5cbiAgICAgICAge2Rpc2NvdmVyLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxLZXl3b3JkQ2FyZFxuICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAga2V5d29yZD17aXRlbS5rZXl3b3JkfVxuICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgRmxleCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gJ3JlYWN0LWljb25zJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaWNvbjogSWNvblR5cGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGtleXdvcmQ6IHN0cmluZztcbn1cblxuY29uc3QgS2V5d29yZENhcmQ6IFJlYWN0LkZDPFByb3BzPiA9IGZ1bmN0aW9uIEtleXdvcmQoe1xuICBpY29uLFxuICBsYWJlbCxcbiAga2V5d29yZCxcbn06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBmbGV4PVwiMSAwIDQwJVwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XG4gICAgICA8TGluayB0bz17YC9zZWFyY2gva2V5d29yZHM6JHtrZXl3b3JkfWB9PlxuICAgICAgICA8YSBocmVmPXtgL3NlYXJjaC9rZXl3b3Jkczoke2tleXdvcmR9YH0+XG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIHA9XCI0XCJcbiAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjNDQ0XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjJcIlxuICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICBncmlkR2FwPVwiMlwiXG4gICAgICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZDogJ3JnYmEoMTQ0LDEyMiwyMzksMC40KScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBhcz17aWNvbn0gLz5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiPntsYWJlbH08L0hlYWRpbmc+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5d29yZENhcmQ7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOWY0OGRhY2QnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVhFTlZFSERFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWFVEQ1dYRS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWTU0VkxPSFYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVPWlUyUERQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzdJWlJJSEguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NTTRWSElISS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ0STJJRUJGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVUtVWTJMM00uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNFWkhWWElDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkpRVVFYNVQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BhY2thZ2UvJG5hbWUnOnsnaWQnOidyb3V0ZXMvcGFja2FnZS8kbmFtZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwYWNrYWdlLzpuYW1lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhY2thZ2UvJG5hbWUtN1dQUFJENlQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdKU0VYQjRGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkpRVVFYNVQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VhcmNoLyRxdWVyeSc6eydpZCc6J3JvdXRlcy9zZWFyY2gvJHF1ZXJ5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlYXJjaC86cXVlcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VhcmNoLyRxdWVyeS1PS1dQMkxYNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0pTRVhCNEYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DRVpIVlhJQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZKUVVRWDVULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC05RjQ4REFDRC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FB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
