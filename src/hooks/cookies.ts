"use client";
import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

interface CookieAttributes {
    /**
     * Define when the cookie will be removed. Value can be a Number
     * which will be interpreted as days from time of creation or a
     * Date instance. If omitted, the cookie becomes a session cookie.
     */
    expires?: number | Date | undefined;

    /**
     * Define the path where the cookie is available. Defaults to '/'
     */
    path?: string | undefined;

    /**
     * Define the domain where the cookie is available. Defaults to
     * the domain of the page where the cookie was created.
     */
    domain?: string | undefined;

    /**
     * A Boolean indicating if the cookie transmission requires a
     * secure protocol (https). Defaults to false.
     */
    secure?: boolean | undefined;

    /**
     * Asserts that a cookie must not be sent with cross-origin requests,
     * providing some protection against cross-site request forgery
     * attacks (CSRF)
     */
    sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;

    /**
     * An attribute which will be serialized, conformably to RFC 6265
     * section 5.2.
     */
    [property: string]: any;
}

export default function useCookie(name: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name)
    if (cookie) return cookie
    return defaultValue
  })

  const getCookie = useCallback(() => {
    return value
  }, [value])

  const setCookie = useCallback(
    (newValue: string, options: CookieAttributes) => {
      Cookies.set(name, newValue, options)
      setValue(newValue)
    },
    [name]
  )

  return { getCookie, setCookie }
}