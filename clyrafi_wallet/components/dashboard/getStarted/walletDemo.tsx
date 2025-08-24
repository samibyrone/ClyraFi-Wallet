"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import "./getStarted.css";

interface Wallet {
  id: string
  name: string
  balance: number
}

interface Transaction {
  id: string
  type: string
  from?: string
  to?: string
  amount?: number
  status: "success" | "failed"
  timestamp: string
}

interface DemoWalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoWalletModal({ isOpen, onClose }: DemoWalletModalProps) {
  const [walletName, setWalletName] = useState("")
  const [wallets, setWallets] = useState<Wallet[]>([
    { id: "gqurgkajqaj36", name: "Samuel", balance: 1900.0 },
    { id: "gqurgkajqaj37", name: "Samuel", balance: 1900.0 },
  ])
  const [senderWallet, setSenderWallet] = useState("")
  const [receiverWallet, setReceiverWallet] = useState("")
  const [amount, setAmount] = useState("")
  const [apiLogs, setApiLogs] = useState<Transaction[]>([])

  const createWallet = () => {
    if (!walletName.trim()) return

    const newWallet: Wallet = {
      id: `gqurgkajqaj${Math.floor(Math.random() * 100)}`,
      name: walletName,
      balance: 0,
    }

    setWallets([...wallets, newWallet])
    setWalletName("")

    const logEntry: Transaction = {
      id: `log_${Date.now()}`,
      type: "wallet_created",
      status: "success",
      timestamp: new Date().toLocaleTimeString(),
    }
    setApiLogs([logEntry, ...apiLogs])
  }

  const executeTransfer = () => {
    if (!senderWallet || !receiverWallet || !amount) return

    const transferAmount = Number.parseFloat(amount)
    const sender = wallets.find((w) => w.id === senderWallet)
    const receiver = wallets.find((w) => w.id === receiverWallet)

    if (!sender || !receiver || sender.balance < transferAmount)
       return

    setWallets(
      wallets.map((wallet) => {
        if (wallet.id === senderWallet) {
          return { ...wallet, balance: wallet.balance - transferAmount }
        }
        if (wallet.id === receiverWallet) {
          return { ...wallet, balance: wallet.balance + transferAmount }
        }
        return wallet
      }),
    )

    const logEntry: Transaction = {
      id: `log_${Date.now()}`,
      type: "transfer",
      from: sender.name,
      to: receiver.name,
      amount: transferAmount,
      status: "success",
      timestamp: new Date().toLocaleTimeString(),
    }
    setApiLogs([logEntry, ...apiLogs])

    setSenderWallet("")
    setReceiverWallet("")
    setAmount("")
  }

  const fundWallet = () => {
    if (!senderWallet) return

    setWallets(
      wallets.map((wallet) => {
        if (wallet.id === senderWallet) {
          return { ...wallet, balance: wallet.balance + 1000 }
        }
        return wallet
      }),
    )

    const wallet = wallets.find((w) => w.id === senderWallet)
    const logEntry: Transaction = {
      id: `log_${Date.now()}`,
      type: "fund_wallet",
      to: wallet?.name,
      amount: 1000,
      status: "success",
      timestamp: new Date().toLocaleTimeString(),
    }
    setApiLogs([logEntry, ...apiLogs])
  }

  const simulateFailedTransfer = () => {
    const logEntry: Transaction = {
      id: `log_${Date.now()}`,
      type: "failed_transfer",
      status: "failed",
      timestamp: new Date().toLocaleTimeString(),
    }
    setApiLogs([logEntry, ...apiLogs])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto get-started-dialog-overlay">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">WaaS Sandbox</DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            {/* <X className="h-4 w-4" /> */}
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Test wallets</h3>
            <div className="space-y-4">
              <h4 className="font-medium">Create a new wallet test</h4>
              <div className="flex gap-3">
                <Input
                  placeholder="Wallet name"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={createWallet} className="bg-purple-600 hover:bg-purple-700">
                  Create wallet
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Your test wallets</h4>
              <div className="space-y-3">
                {wallets.map((wallet) => (
                  <div key={wallet.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-purple-600">{wallet.name}</div>
                      <div className="text-sm text-gray-600">{wallet.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{wallet.balance.toFixed(2)}</div>
                      <div className="text-sm text-gray-600">USD (test)</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium">Simulate transactions</h3>

            <div className="space-y-4">
              <h4 className="font-medium">Create a new wallet test</h4>

              <Select value={senderWallet} onValueChange={setSenderWallet}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sender wallet" />
                </SelectTrigger>
                <SelectContent>
                  {wallets.map((wallet) => (
                    <SelectItem key={wallet.id} value={wallet.id}>
                      {wallet.name} ({wallet.balance.toFixed(2)} USD)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={receiverWallet} onValueChange={setReceiverWallet}>
                <SelectTrigger>
                  <SelectValue placeholder="Select receiver wallet" />
                </SelectTrigger>
                <SelectContent>
                  {wallets.map((wallet) => (
                    <SelectItem key={wallet.id} value={wallet.id}>
                      {wallet.name} ({wallet.balance.toFixed(2)} USD)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

              <div className="space-y-3">
                <Button onClick={executeTransfer} className="w-full bg-purple-600 hover:bg-purple-700">
                  Execute transfer
                </Button>

                <Button onClick={fundWallet} variant="outline" className="w-full bg-transparent">
                  Fund selected wallet
                </Button>

                <Button onClick={simulateFailedTransfer} variant="outline" className="w-full bg-transparent">
                  Simulate failed transfer
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">API Logs</h4>
              <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
                {apiLogs.length === 0 ? (
                  <p className="text-gray-500 text-sm">No API logs yet</p>
                ) : (
                  <div className="space-y-2">
                    {apiLogs.map((log) => (
                      <div key={log.id} className="text-sm">
                        <span className="text-gray-600">[{log.timestamp}]</span>{" "}
                        <span className={log.status === "success" ? "text-green-600" : "text-red-600"}>{log.type}</span>
                        {log.from && log.to && log.amount && (
                          <span className="text-gray-700">
                            : {log.from} → {log.to} ({log.amount} USD)
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
