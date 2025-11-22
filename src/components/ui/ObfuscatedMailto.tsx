import React, { useEffect, useState, MouseEvent } from "react";

export interface ObfuscatedMailtoHeaders {
  subject?: string;
  body?: string;
}

export interface ObfuscatedMailtoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  user: string;
  domain: string;
  headers?: ObfuscatedMailtoHeaders;
}

export const ObfuscatedMailto: React.FC<ObfuscatedMailtoProps> = ({
  user,
  domain,
  headers,
  children,
  onClick,
  ...rest
}) => {
  const [href, setHref] = useState<string | undefined>(undefined);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const emailAddress = `${user}@${domain}`;
    const params = new URLSearchParams();

    if (headers?.subject) {
      params.set("subject", headers.subject);
    }

    if (headers?.body) {
      params.set("body", headers.body);
    }

    const query = params.toString();
    const mailto = `mailto:${emailAddress}${query ? `?${query}` : ""}`;

    setHref(mailto);

    if (!children) {
      setLabel(emailAddress);
    }
  }, [user, domain, headers, children]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a href={href || "#"} {...rest} onClick={handleClick}>
      {children || label || "Email"}
    </a>
  );
};
