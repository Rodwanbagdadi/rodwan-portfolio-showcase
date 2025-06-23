/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Allow SVG imports
declare module "*.svg" {
  import React = require("react");
  import { SVGProps } from "react";
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
  export { ReactComponent };
}
