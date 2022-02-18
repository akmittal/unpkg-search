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

// route:/Users/amkumar/projects/personal/unpkg/app/root.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/root.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/package/$name.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/package/$name.tsx
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
  }, /* @__PURE__ */ React.createElement(import_layout2.Heading, null, name), /* @__PURE__ */ React.createElement(import_layout2.Flex, null, data.description), /* @__PURE__ */ React.createElement(import_layout2.Flex, null, /* @__PURE__ */ React.createElement(import_select.Select, {
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/search/$query.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/search/$query.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/index.tsx
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

// route:/Users/amkumar/projects/personal/unpkg/app/routes/index.tsx
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
var assets_manifest_default = { "version": "71899bb6", "entry": { "module": "/build/entry.client-XENVEHDE.js", "imports": ["/build/_shared/chunk-3XUDCWXE.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RYI4PUH5.js", "imports": ["/build/_shared/chunk-5OZU2PDP.js", "/build/_shared/chunk-W7IZRIHH.js", "/build/_shared/chunk-MM4VHIHI.js", "/build/_shared/chunk-44I2IEBF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-NEKXQLK6.js", "imports": ["/build/_shared/chunk-CEZHVXIC.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/package/$name": { "id": "routes/package/$name", "parentId": "root", "path": "package/:name", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/package/$name-R5WRWYBK.js", "imports": ["/build/_shared/chunk-GJSEXB4F.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/$query": { "id": "routes/search/$query", "parentId": "root", "path": "search/:query", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search/$query-IPCU3ZLX.js", "imports": ["/build/_shared/chunk-GJSEXB4F.js", "/build/_shared/chunk-CEZHVXIC.js", "/build/_shared/chunk-6JQUQX5T.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-71899BB6.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db2xvck1vZGVTd2l0Y2hlci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICJyb3V0ZTovVXNlcnMvYW1rdW1hci9wcm9qZWN0cy9wZXJzb25hbC91bnBrZy9hcHAvcm91dGVzL3BhY2thZ2UvJG5hbWUudHN4IiwgIi4uL3V0aWwvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvS2V5d29yZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VhcmNoLnRzeCIsICJyb3V0ZTovVXNlcnMvYW1rdW1hci9wcm9qZWN0cy9wZXJzb25hbC91bnBrZy9hcHAvcm91dGVzL3NlYXJjaC8kcXVlcnkudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC50c3giLCAicm91dGU6L1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2cvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvS2V5d29yZENhcmQudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2cvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbWt1bWFyL3Byb2plY3RzL3BlcnNvbmFsL3VucGtnL2FwcC9yb3V0ZXMvcGFja2FnZS8kbmFtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2Fta3VtYXIvcHJvamVjdHMvcGVyc29uYWwvdW5wa2cvYXBwL3JvdXRlcy9zZWFyY2gvJHF1ZXJ5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW1rdW1hci9wcm9qZWN0cy9wZXJzb25hbC91bnBrZy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGFja2FnZS8kbmFtZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGFja2FnZS8kbmFtZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwYWNrYWdlLzpuYW1lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWFyY2gvJHF1ZXJ5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlYXJjaC86cXVlcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHtcbiAgTWV0YSwgTGlua3MsIFNjcmlwdHMsIExpdmVSZWxvYWQsIHVzZUNhdGNoLCB1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7XG4gIENoYWtyYVByb3ZpZGVyLFxuICBDb2xvck1vZGUsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIFN0YWNrLFxuICBleHRlbmRUaGVtZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE5wcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuXG5pbXBvcnQgc3R5bGVzVXJsMiBmcm9tICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XG5pbXBvcnQgeyBDb2xvck1vZGVTd2l0Y2hlciB9IGZyb20gJy4vY29tcG9uZW50cy9Db2xvck1vZGVTd2l0Y2hlcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH0sXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybDIgfSxcbl07XG5cbmNvbnN0IGRlZmF1bHRNb2RlOiBDb2xvck1vZGUgPSAnZGFyayc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogZGVmYXVsdE1vZGUsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGJyYW5kOiB7XG4gICAgOTAwOiAnIzFhMzY1ZCcsXG4gICAgODAwOiAnIzE1M2U3NScsXG4gICAgNzAwOiAnIzJhNjlhYycsXG4gIH0sXG59O1xuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbG9ycywgY29uZmlnIH0pO1xuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuY29uc3QgRG9jdW1lbnQgPSBmdW5jdGlvbiAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnbG9hZGluZycgfHwgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnKSB7XG4gICAgICBOcHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTnByb2dyZXNzLmRvbmUoKTtcbiAgICB9XG4gIH0sIFt0cmFuc2l0aW9uLnN0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTd2l0Y2hlciAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IHZhciBDYXRjaEJvdW5kYXJ5ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfVxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0RvY3VtZW50PlxuICAgICAgKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGNhdWdodCByZXNwb25zZSB3aXRoIHN0YXR1czogJHtjYXVnaHQuc3RhdHVzfWAsXG4gICAgICApO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIEVycm9yQm91bmRhcnkgPSBmdW5jdGlvbiAoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiVWgtb2ghXCI+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDxDb2xvck1vZGVTd2l0Y2hlciAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEhlYWRpbmc+QXBwIEVycm9yPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQ+UGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGNvdWxkIG5vdCBiZSBmb3VuZDwvVGV4dD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIEljb25CdXR0b24sXG4gIEljb25CdXR0b25Qcm9wcyxcblxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhTW9vbiwgRmFTdW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbnR5cGUgQ29sb3JNb2RlU3dpdGNoZXJQcm9wcyA9IE9taXQ8SWNvbkJ1dHRvblByb3BzLCAnYXJpYS1sYWJlbCc+XG5cbmV4cG9ydCBjb25zdCBDb2xvck1vZGVTd2l0Y2hlcjogUmVhY3QuRkM8Q29sb3JNb2RlU3dpdGNoZXJQcm9wcz4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCB0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2RhcmsnLCAnbGlnaHQnKTtcbiAgY29uc3QgU3dpdGNoSWNvbiA9IHVzZUNvbG9yTW9kZVZhbHVlKEZhTW9vbiwgRmFTdW4pO1xuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b25cbiAgICAgIHNpemU9XCJtZFwiXG4gICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICBjb2xvcj1cImN1cnJlbnRcIlxuICAgICAgbWFyZ2luTGVmdD1cIjJcIlxuICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgaWNvbj17PFN3aXRjaEljb24gLz59XG4gICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7dGV4dH0gbW9kZWB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxGbGV4IHA9XCIyXCIgd2lkdGg9XCJmdWxsXCIgY3Vyc29yPVwicG9pbnRlclwiPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgIGFsdD1cInVucGtnIHNlYXJjaCBMb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvTGluaz5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQm94LCBGbGV4LCBIZWFkaW5nLCBIU3RhY2ssIExpbmssIFZTdGFjayxcbn0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAY2hha3JhLXVpL3NlbGVjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XG5pbXBvcnQgeyBNZENvbnRlbnRDb3B5IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvdG9vbHRpcCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7XG4gIE1ldGFGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIGpzb24sIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgS2V5d29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0tleXdvcmQnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhLCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUgfSA9IHBhcmFtcztcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYCR7bmFtZX0gLSBCZXN0IHBsYWNlIHRvIGZpbmQgQ0ROIGZvciBkZXZlbG9wZXJzYCxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAnb2c6aW1hZ2UnOiAnL2xvZ28ucG5nJyxcbiAgICAndGhlbWUtY29sb3InOiAnI2Q5NjQzYScsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVyeSgpIHtcbiAgY29uc3QgaW5pdGlhbERhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgeyBuYW1lID0gJycgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoWydwb3N0cycsIG5hbWVdLCBnZXRQYWNrYWdlSW5mby5iaW5kKG51bGwsIG5hbWUpLCB7XG4gICAgaW5pdGlhbERhdGEsXG4gIH0pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFt2ZXJzaW9uLCBzZXRWZXJzaW9uXSA9IHVzZVN0YXRlKGRhdGFbJ2Rpc3QtdGFncyddLmxhdGVzdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBtPVwiNFwiIHc9XCJsZ1wiIHdpZHRoPVwiY2FsYygxMDAlIC0gMzBweClcIj5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VhcmNoKHZhbHVlKX1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbmF2aWdhdGUoYC9zZWFyY2gvJHtzZWFyY2h9YCl9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cblxuICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIHA9XCI1XCI+XG4gICAgICAgIDxIZWFkaW5nPntuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgPEZsZXg+e2RhdGEuZGVzY3JpcHRpb259PC9GbGV4PlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRWZXJzaW9uKGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YS52ZXJzaW9ucylcbiAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9e3ZhbHVlID09PSB2ZXJzaW9ufSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAge2RhdGEudmVyc2lvbnNbdmVyc2lvbl0ubWFpbiAmJiAoXG4gICAgICAgICAgICA8QXNzZXRNZXRhIGRhdGE9e2RhdGF9IHR5cGU9XCJtYWluXCIgdmVyc2lvbj17dmVyc2lvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLnZlcnNpb25zW3ZlcnNpb25dLnN0eWxlICYmIChcbiAgICAgICAgICAgIDxBc3NldE1ldGEgZGF0YT17ZGF0YX0gdHlwZT1cInN0eWxlXCIgdmVyc2lvbj17dmVyc2lvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLnZlcnNpb25zW3ZlcnNpb25dLm1vZHVsZSAmJiAoXG4gICAgICAgICAgICA8QXNzZXRNZXRhIGRhdGE9e2RhdGF9IHR5cGU9XCJtb2R1bGVcIiB2ZXJzaW9uPXt2ZXJzaW9ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICB7ZGF0YS52ZXJzaW9uc1t2ZXJzaW9uXS5rZXl3b3Jkcz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8S2V5d29yZCBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vdW5wa2cuY29tL2Jyb3dzZS8ke25hbWV9QCR7dmVyc2lvbn0vYH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInB1cnBsZVwiPkJyb3dzZSBQYWNrYWdlIG9uIFVOUEtHPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5pbnRlcmZhY2UgQXNzZXRQcm9wcyB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogYW55O1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbnZhciBBc3NldE1ldGEgPSBmdW5jdGlvbiAoeyB0eXBlLCBkYXRhLCB2ZXJzaW9uIH06IEFzc2V0UHJvcHMpIHtcbiAgY29uc3QgW3Rvb3B0aXBPcGVuLCBzZXRUb29sdGlwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEhTdGFjaz5cbiAgICAgIDxGbGV4IGdyaWRHYXA9XCIyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIHt0eXBlfVxuICAgICAgICAgIDpcbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGbGV4IG92ZXJmbG93PVwic2Nyb2xsXCIgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2dldFZlcnNpb25VUkwoZGF0YSwgdmVyc2lvbiwgdHlwZSl9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLDAsMCwwLjIpXCJcbiAgICAgICAgICAgIHB4PVwiMlwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1XCJcbiAgICAgICAgICAgIHB5PVwiMVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dldFZlcnNpb25VUkwoZGF0YSwgdmVyc2lvbiwgdHlwZSl9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxUb29sdGlwIGxhYmVsPVwiY29waWVkXCIgaXNPcGVuPXt0b29wdGlwT3Blbn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGVmdEljb249ezxNZENvbnRlbnRDb3B5IC8+fVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKGdldFZlcnNpb25VUkwoZGF0YSwgdmVyc2lvbiwgdHlwZSkpO1xuICAgICAgICAgICAgICBzZXRUb29sdGlwT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VG9vbHRpcE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb3B5IFVSTFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9IU3RhY2s+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRWZXJzaW9uVVJMKGRhdGE6IGFueSwgdmVyc2lvbjogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHR5cGUgPSAnbWFpbic7XG4gIH1cbiAgcmV0dXJuIGBodHRwczovL3VucGtnLmNvbS8ke2RhdGEuX2lkfUAke3ZlcnNpb259LyR7ZGF0YS52ZXJzaW9uc1t2ZXJzaW9uXVt0eXBlXX1gO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gcGFyYW1zO1xuICBpZiAoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJycsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UGFja2FnZUluZm8obmFtZSk7XG4gICAgcmV0dXJuIGpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJycsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBhY2thZ2VJbmZvKHBhY2thZ2VuYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmVnaXN0cnkubnBtanMuY29tLyR7cGFja2FnZW5hbWV9YDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdhY2NlcHQtZW5jb2RpbmcnOiAnZ3ppcCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwNCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncGFja2FnZSBub3QgZm91bmQnKTtcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGEudmVyc2lvbnMpIHtcbiAgICBjb25zdCB2ZXJzaW9uSW5mbyA9IGRhdGEudmVyc2lvbnNba2V5XTtcbiAgICBkYXRhLnZlcnNpb25zW2tleV0gPSB7XG4gICAgICBuYW1lOiB2ZXJzaW9uSW5mby5uYW1lIHx8ICcnLFxuICAgICAgZGVzY3JpcHRpb246IHZlcnNpb25JbmZvLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdmVyc2lvbjogdmVyc2lvbkluZm8udmVyc2lvbiB8fCAnJyxcbiAgICAgIG1haW46IHZlcnNpb25JbmZvLm1haW4gfHwgJycsXG4gICAgICBtb2R1bGU6IHZlcnNpb25JbmZvLm1vZHVsZSB8fCAnJyxcbiAgICAgIHN0eWxlOiB2ZXJzaW9uSW5mby5zdHlsZSB8fCAnJyxcbiAgICB9O1xuICB9XG4gIGRlbGV0ZSBkYXRhLm1haW50YWluZXJzO1xuICBkZWxldGUgZGF0YS50aW1lO1xuICBkZWxldGUgZGF0YS5yZXBvc2l0b3J5O1xuICBkZWxldGUgZGF0YS51c2VycztcbiAgZGVsZXRlIGRhdGEuYnVncztcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsICJleHBvcnQgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHN0cikgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZWwudmFsdWUgPSBzdHI7XG4gIGVsLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwiXCIpO1xuICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgZWwuc3R5bGUubGVmdCA9IFwiLTk5OTlweFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgZWwuc2VsZWN0KCk7XG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG59O1xubGV0IGhvc3RVcmw7XG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIjtcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5pZiAoaXNCcm93c2VyKSB7XG4gIGhvc3RVcmwgPSBcIi9cIjtcbn0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgaG9zdFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xufSBlbHNlIHtcbiAgaG9zdFVybCA9IFwiaHR0cHM6Ly93d3cudW5wa2dzZWFyY2guY29tL1wiO1xufVxuXG5leHBvcnQgY29uc3QgaG9zdCA9IGhvc3RVcmw7XG4iLCAiaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGl0ZW06IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5d29yZCh7IGl0ZW0gfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIHRvPXtgL3NlYXJjaC9rZXl3b3Jkczoke2l0ZW19YH0+XG4gICAgICA8YT5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJwdXJwbGVcIlxuICAgICAgICAgIHA9XCIxXCJcbiAgICAgICAgICBtPVwiMVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBcIlxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0LCBJbnB1dEdyb3VwLCBJbnB1dFJpZ2h0RWxlbWVudCB9IGZyb20gJ0BjaGFrcmEtdWkvaW5wdXQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuIHZhbHVlOnN0cmluZztcbiBvbkNoYW5nZToodmFsdWU6c3RyaW5nKSA9PiB2b2lkXG4gb25TdWJtaXQ6KCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyB2YWx1ZSwgb25DaGFuZ2UsIG9uU3VibWl0IH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXRHcm91cCBzaXplPVwibGdcIj5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwcj1cIjQuNXJlbVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIG9uU3VibWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgICAgPElucHV0UmlnaHRFbGVtZW50IHdpZHRoPVwiNS41cmVtXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBoPVwiMnJlbVwiXG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvblN1Ym1pdCgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJwdXJwbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgR29cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5cbmltcG9ydCB7XG4gIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCBNZXRhRnVuY3Rpb24sIGpzb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2gnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgdGl0bGU6ICdVTlBLRyBTZWFyY2gnLFxuICBkZXNjcmlwdGlvbjogJ1NlYXJjaCBmb3IgcGFja2FnZXMgb24gVU5QS0cnLFxuICBrZXl3b3JkczogJ3VucGtnIHNlYXJjaCwgdW5wa2csIHNlYXJjaCwgQ0ROLCBucG0sIGdpdGh1YiwgcGFja2FnZSBzZWFyY2gsJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVyeSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldCgncXVlcnknKSB8fCAnJztcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihxdWVyeSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpIHx8ICcnO1xuXG4gICAgc2V0U2VhcmNoKHF1ZXJ5KTtcbiAgfSwgW3NlYXJjaFBhcmFtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCb3ggbT1cIjRcIiB3PVwiY2FsYygxMDAlIC0gMzBweClcIj5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VhcmNoKHZhbHVlKX1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbmF2aWdhdGUoYC9zZWFyY2gvJHtzZWFyY2h9YCl9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cblxuICAgICAge0FycmF5LmZyb20oZGF0YS5vYmplY3RzKS5tYXAoKGRhdHVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICBrZXl3b3JkcyxcbiAgICAgICAgICBhdXRob3IsXG4gICAgICAgICAgcHVibGlzaGVyLFxuICAgICAgICAgIG1haW50YWluZXJzLFxuICAgICAgICAgIGNkbkxpbmssXG4gICAgICAgIH0gPSBkYXR1bS5wYWNrYWdlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgIGNkbkxpbms9e2Nkbkxpbmt9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgIGtleXdvcmRzPXtrZXl3b3Jkc31cbiAgICAgICAgICAgIGF1dGhvcj17YXV0aG9yfVxuICAgICAgICAgICAgcHVibGlzaGVyPXtwdWJsaXNoZXJ9XG4gICAgICAgICAgICBtYWludGFpbmVycz17bWFpbnRhaW5lcnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHBhcmFtcztcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5jb20vLS92MS9zZWFyY2g/dGV4dD0ke3F1ZXJ5fSZzaXplPTVgLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2FjY2VwdC1lbmNvZGluZyc6ICdnemlwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IHBhdGhQcm9taXNlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHJlc3VsdCBvZiBkYXRhLm9iamVjdHMpIHtcbiAgICBwYXRoUHJvbWlzZXMucHVzaChnZXRQYWNrYWdlUGF0aChyZXN1bHQucGFja2FnZS5uYW1lKSk7XG4gIH1cbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHBhdGhQcm9taXNlcyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLm9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRhLm9iamVjdHNbaV0ucGFja2FnZS5jZG5MaW5rID0gcmVzdWx0c1tpXTtcbiAgfVxuXG4gIHJldHVybiBqc29uKGRhdGEpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGFja2FnZVBhdGgocGFja2FnZW5hbWU6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91bnBrZy5jb20vJHtwYWNrYWdlbmFtZX1gLCB7XG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgIG1ldGhvZDogJ0hFQUQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdhY2NlcHQtZW5jb2RpbmcnOiAnZ3ppcCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy51cmw7XG59XG4iLCAiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcbmltcG9ydCB7IENvcHlJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBMaW5rIGFzIENoYWtyYUxpbmssIFRvb2x0aXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBLZXl3b3JkIGZyb20gJy4vS2V5d29yZCc7XG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQgfSBmcm9tICcuLi8uLi91dGlsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGtleXdvcmRzPzogc3RyaW5nW107XG4gIGF1dGhvcj86IEF1dGhvcjtcbiAgcHVibGlzaGVyPzogUGVyc29uO1xuICBtYWludGFpbmVycz86IFBlcnNvbltdO1xuICBjZG5MaW5rOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgQXV0aG9yIGV4dGVuZHMgV2l0aEVtYWlsIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFdpdGhFbWFpbCB7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgUGVyc29uIGV4dGVuZHMgV2l0aEVtYWlsIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0KHtcbiAgbmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIHZlcnNpb24sXG4gIGtleXdvcmRzLFxuICBjZG5MaW5rLFxufTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBbdG9vbHRpcE9wZW4sIHNldFRvb2x0aXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHA9XCI1XCIgYm9yZGVyQm90dG9tPVwiMXB4XCIgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhLjQwMFwiIG09XCIyXCI+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPExpbmsgdG89e2AvcGFja2FnZS8ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gfT5cbiAgICAgICAgICAgIDxDaGFrcmFMaW5rPlxuICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibGdcIj57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJ4c1wiPntkZXNjcmlwdGlvbn08L0hlYWRpbmc+XG5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgICB7dmVyc2lvbn1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgVVJMOlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8Q2hha3JhTGluayBocmVmPXtjZG5MaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBweD1cIjFcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgICB7Y2RuTGlua31cbiAgICAgICAgICAgIDwvQ2hha3JhTGluaz5cbiAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiY29waWVkXCIgaXNPcGVuPXt0b29sdGlwT3Blbn0+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgbXg9XCIyXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29weSBDRE4gcGF0aFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb3B5IENETiBQYXRoXCJcbiAgICAgICAgICAgICAgICBpY29uPXs8Q29weUljb24gLz59XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKGNkbkxpbmspO1xuICAgICAgICAgICAgICAgICAgc2V0VG9vbHRpcE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9vbHRpcE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxGbGV4IG15PVwiMlwiIGdyaWRHYXA9XCIyXCI+XG4gICAgICAgICAgICA8TGluayB0bz17YC9wYWNrYWdlLyR7bmFtZX1gfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBhcz1cImFcIiBjb2xvclNjaGVtZT1cInB1cnBsZVwiPlxuICAgICAgICAgICAgICAgIE9wZW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly91bnBrZy5jb20vJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9L2B9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicHVycGxlXCI+QnJvd3NlIEZpbGVzPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAge2tleXdvcmRzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxLZXl3b3JkIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZsZXgsIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgS2V5d29yZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvS2V5d29yZENhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lLmNzc1wiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IHtcbiAgRmFDb2RlLFxuICBGYVRlcm1pbmFsLFxuICBGYUNoZWNrLFxuICBGYU1vYmlsZSxcbiAgRmFSb2JvdCxcbiAgRmFDc3MzLFxuICBGYVNlcnZlcixcbiAgRmFGaWxlLFxuICBGYU5ldHdvcmtXaXJlZCxcbiAgRmFTaGllbGRBbHQsXG4gIEZhQ3JvcCxcbiAgRmFTcXVhcmVSb290QWx0LFxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJVTlBLRyBTZWFyY2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2ggZm9yIHBhY2thZ2VzIG9uIFVOUEtHXCIsXG4gICAga2V5d29yZHM6IFwidW5wa2cgc2VhcmNoLCB1bnBrZywgc2VhcmNoLCBDRE4sIG5wbSwgZ2l0aHViLCBwYWNrYWdlIHNlYXJjaCxcIixcbiAgfTtcbn07XG5cbmNvbnN0IGRpc2NvdmVyID0gW1xuICB7IGljb246IEZhQ29kZSwgbGFiZWw6IFwiRnJvbnQgRW5kXCIsIGtleXdvcmQ6IFwiZnJvbnQtZW5kXCIgfSxcbiAgeyBpY29uOiBGYVNlcnZlciwgbGFiZWw6IFwiQmFjayBFbmRcIiwga2V5d29yZDogXCJiYWNrZW5kXCIgfSxcbiAgeyBpY29uOiBGYVRlcm1pbmFsLCBsYWJlbDogXCJDTElcIiwga2V5d29yZDogXCJjbGlcIiB9LFxuICB7IGljb246IEZhRmlsZSwgbGFiZWw6IFwiRG9jdW1lbnRhdGlvblwiLCBrZXl3b3JkOiBcImRvY3VtZW50YXRpb25cIiB9LFxuICB7IGljb246IEZhQ3NzMywgbGFiZWw6IFwiQ1NTXCIsIGtleXdvcmQ6IFwiY3NzXCIgfSxcbiAgeyBpY29uOiBGYUNoZWNrLCBsYWJlbDogXCJUZXN0aW5nXCIsIGtleXdvcmQ6IFwidGVzdGluZ1wiIH0sXG4gIHsgaWNvbjogRmFOZXR3b3JrV2lyZWQsIGxhYmVsOiBcIklvVFwiLCBrZXl3b3JkOiBcImlvdFwiIH0sXG4gIHsgaWNvbjogRmFTaGllbGRBbHQsIGxhYmVsOiBcIkNvdmVyYWdlXCIsIGtleXdvcmQ6IFwiY292ZXJhZ2VcIiB9LFxuICB7IGljb246IEZhTW9iaWxlLCBsYWJlbDogXCJNb2JpbGVcIiwga2V5d29yZDogXCJtb2JpbGVcIiB9LFxuICB7IGljb246IEZhQ3JvcCwgbGFiZWw6IFwiRnJhbWV3b3Jrc1wiLCBrZXl3b3JkOiBcImZyYW1ld29ya1wiIH0sXG4gIHsgaWNvbjogRmFSb2JvdCwgbGFiZWw6IFwiUm9ib3RpY3NcIiwga2V5d29yZDogXCJyb2JvdGljc1wiIH0sXG4gIHsgaWNvbjogRmFTcXVhcmVSb290QWx0LCBsYWJlbDogXCJNYXRoXCIsIGtleXdvcmQ6IFwibWF0aFwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbmF2aWdhdGUoYC9zZWFyY2gvJHtzZWFyY2h9YCl9XG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2godmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8SGVhZGluZyBzaXplPVwibGdcIiBtYj1cIjRcIj5cbiAgICAgICAgRGlzY292ZXIgUGFja2FnZXNcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxGbGV4XG4gICAgICAgIGdyaWRHYXA9XCIyXCJcbiAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgbWI9XCI0XCJcbiAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICAgIG1heFc9XCI0MDBweFwiXG4gICAgICA+XG4gICAgICAgIHtkaXNjb3Zlci5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8S2V5d29yZENhcmRcbiAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgIGtleXdvcmQ9e2l0ZW0ua2V5d29yZH1cbiAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9GbGV4PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tICdyZWFjdC1pY29ucyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGljb246IEljb25UeXBlO1xuICBsYWJlbDogc3RyaW5nO1xuICBrZXl3b3JkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEtleXdvcmRDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSBmdW5jdGlvbiBLZXl3b3JkKHtcbiAgaWNvbixcbiAgbGFiZWwsXG4gIGtleXdvcmQsXG59OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZmxleD1cIjEgMCA0MCVcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiPlxuICAgICAgPExpbmsgdG89e2Avc2VhcmNoL2tleXdvcmRzOiR7a2V5d29yZH1gfT5cbiAgICAgICAgPGEgaHJlZj17YC9zZWFyY2gva2V5d29yZHM6JHtrZXl3b3JkfWB9PlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBwPVwiNFwiXG4gICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzQ0NFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyXCJcbiAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgZ3JpZEdhcD1cIjJcIlxuICAgICAgICAgICAgX2hvdmVyPXt7IGJhY2tncm91bmQ6ICdyZ2JhKDE0NCwxMjIsMjM5LDAuNCknIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gYXM9e2ljb259IC8+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIj57bGFiZWx9PC9IZWFkaW5nPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRDYXJkO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzcxODk5YmI2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1YRU5WRUhERS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1hVRENXWEUuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVJZSTRQVUg1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01T1pVMlBEUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVc3SVpSSUhILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTU00VkhJSEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00NEkySUVCRi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LU5FS1hRTEs2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DRVpIVlhJQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZKUVVRWDVULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wYWNrYWdlLyRuYW1lJzp7J2lkJzoncm91dGVzL3BhY2thZ2UvJG5hbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGFja2FnZS86bmFtZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wYWNrYWdlLyRuYW1lLVI1V1JXWUJLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSlNFWEI0Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZKUVVRWDVULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlYXJjaC8kcXVlcnknOnsnaWQnOidyb3V0ZXMvc2VhcmNoLyRxdWVyeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZWFyY2gvOnF1ZXJ5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlYXJjaC8kcXVlcnktSVBDVTNaTFguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdKU0VYQjRGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0VaSFZYSUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02SlFVUVg1VC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzE4OTlCQjYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1B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
