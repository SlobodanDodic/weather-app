import React, { memo } from "react";

const Tooltip = memo((props) => {
  return (
    <span className="group relative">
      <span
        className="text-xs pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-pre-line sm:whitespace-nowrap rounded bg-zinc-900/70 px-3 py-2 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-zinc-900/70 before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>
      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;