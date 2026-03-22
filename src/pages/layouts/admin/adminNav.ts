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

export type AdminNavItem = {
  to: string;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
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

export function getAdminPageTitle(pathname: string): string {
  const exact = adminNavItems.find((item) => pathname === item.to);
  if (exact) return exact.label;

  const longestMatch = [...adminNavItems]
    .sort((a, b) => b.to.length - a.to.length)
    .find((item) => pathname.startsWith(`${item.to}/`));

  return longestMatch?.label ?? "Admin";
}
