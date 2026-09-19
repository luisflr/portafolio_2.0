import React from "react";

function BadgeStack({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 font-mono text-xs text-primary bg-ligth-blue border border-primary/30">
      {label}
    </span>
  );
}

export default BadgeStack;
