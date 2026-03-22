import {
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  MegaphoneIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  TagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";

/** One item in the left admin menu. */
export type AdminNavItem = {
  /** URL path, e.g. "/admin/product" */
  to: string;
  /** Label shown in the sidebar and in the top header title */
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  /** Use for "/admin" only so "/admin/xyz" does not stay "active" */
  end?: boolean;
};

export const adminNavItems: AdminNavItem[] = [
  { to: "/admin", label: "Dashboard", icon: Squares2X2Icon, end: true },
  { to: "/admin/banner", label: "Banner", icon: MegaphoneIcon },
  { to: "/admin/brand", label: "Brand", icon: TagIcon },
  { to: "/admin/category", label: "Category", icon: RectangleStackIcon },
  { to: "/admin/user", label: "User", icon: UsersIcon },
  { to: "/admin/product", label: "Product", icon: CubeIcon },
  { to: "/admin/order", label: "Order", icon: ClipboardDocumentListIcon },
  { to: "/admin/transaction", label: "Transaction", icon: BanknotesIcon },
  { to: "/admin/chat", label: "Chat", icon: ChatBubbleLeftRightIcon },
];

/** Picks the page title to show in the header based on the current URL. */
export function getAdminPageTitle(pathname: string): string {
  const exact = adminNavItems.find((item) => pathname === item.to);
  if (exact) return exact.label;

  const longestMatch = [...adminNavItems]
    .sort((a, b) => b.to.length - a.to.length)
    .find((item) => pathname.startsWith(`${item.to}/`));

  return longestMatch?.label ?? "Admin";
}
