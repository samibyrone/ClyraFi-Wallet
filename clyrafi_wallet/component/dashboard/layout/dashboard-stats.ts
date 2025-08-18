import { Home, FileText, CreditCard, Users, RefreshCw, DollarSign, AlertTriangle, Split, Building, Terminal, UserCheck, Calendar, Repeat, ShoppingCart, Package, StoreIcon as Storefront, ShoppingBag, Receipt, FileSearch, Settings, ChevronDown, ChevronRight, User, LogOut } from "lucide-react"


export const navigationItems = [
  { name: "Get started", icon: Home, href: "/dashboard" },
  { name: "Compliance", icon: FileText, href: "/dashboard/compliance" },
  { name: "Home", icon: Home, href: "/dashboard/home" },
]

export const paymentItems = [
  { name: "Transactions", icon: CreditCard, href: "/dashboard/transactions" },
  { name: "Customers", icon: Users, href: "/dashboard/customers" },
  { name: "Refunds", icon: RefreshCw, href: "/dashboard/refunds" },
  { name: "Payouts", icon: DollarSign, href: "/dashboard/payouts" },
  { name: "Disputes", icon: AlertTriangle, href: "/dashboard/disputes" },
  { name: "Transaction splits", icon: Split, href: "/dashboard/transaction-splits" },
  { name: "Subaccounts", icon: Building, href: "/dashboard/subaccounts" },
  { name: "Terminals", icon: Terminal, href: "/dashboard/terminals" },
]

export const recurringItems = [
  { name: "Subscribers", icon: UserCheck, href: "/dashboard/subscribers" },
  { name: "Plans", icon: Calendar, href: "/dashboard/plans" },
  { name: "Subscriptions", icon: Repeat, href: "/dashboard/subscriptions" },
]

export const commerceItems = [
  { name: "Payment pages", icon: ShoppingCart, href: "/dashboard/payment-pages" },
  { name: "Products", icon: Package, href: "/dashboard/products" },
  { name: "Storefronts", icon: Storefront, href: "/dashboard/storefronts" },
  { name: "Orders", icon: ShoppingBag, href: "/dashboard/orders" },
  { name: "Invoices", icon: Receipt, href: "/dashboard/invoices" },
]

export const bottomItems = [
  { name: "Audit logs", icon: FileSearch, href: "/dashboard/audit-logs" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
]