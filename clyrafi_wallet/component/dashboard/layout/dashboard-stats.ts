import { Home, FileText, CreditCard, Users, RefreshCw, DollarSign, AlertTriangle, Split, Building, Terminal, UserCheck, Calendar, Repeat, ShoppingCart, Package, StoreIcon as Storefront, ShoppingBag, Receipt, FileSearch, Settings } from "lucide-react"


export const navigationItems = [
  { name: "Get started", icon: Home, href: "/Dashboard" },
  { name: "Compliance", icon: FileText, href: "/Dashboard/Compliance" },
  { name: "Home", icon: Home, href: "/Dashboard/Home" },
]

export const paymentItems = [
  { name: "Transactions", icon: CreditCard, href: "/Dashboard/Transactions" },
  { name: "Customers", icon: Users, href: "/Dashboard/Customer" },
  { name: "Refunds", icon: RefreshCw, href: "/Dashboard/Refunds" },
  { name: "Payouts", icon: DollarSign, href: "/Dashboard/Payouts" },
  { name: "Disputes", icon: AlertTriangle, href: "/Dashboard/Disputes" },
  { name: "Transaction splits", icon: Split, href: "/Dashboard/Transaction-splits" },
  { name: "Subaccounts", icon: Building, href: "/Dashboard/Subaccounts" },
  { name: "Terminals", icon: Terminal, href: "/Dashboard/Terminals" },
]

export const recurringItems = [
  { name: "Subscribers", icon: UserCheck, href: "/Dashboard/Subscribers" },
  { name: "Plans", icon: Calendar, href: "/Dashboard/Plans" },
  { name: "Subscriptions", icon: Repeat, href: "/Dashboard/Subscriptions" },
]

export const commerceItems = [
  { name: "Payment pages", icon: ShoppingCart, href: "/Dashboard/Payment-pages" },
  { name: "Products", icon: Package, href: "/Dashboard/Products" },
  { name: "Storefronts", icon: Storefront, href: "/Dashboard/Storefronts" },
  { name: "Orders", icon: ShoppingBag, href: "/Dashboard/Orders" },
  { name: "Invoices", icon: Receipt, href: "/Dashboard/Invoices" },
]

export const bottomItems = [
  { name: "Audit logs", icon: FileSearch, href: "/Dashboard/Audit-logs" },
  { name: "Settings", icon: Settings, href: "/Dashboard/Settings" },
]