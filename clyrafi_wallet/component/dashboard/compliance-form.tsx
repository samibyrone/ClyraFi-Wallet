"use client"

import { useState } from "react"
import { Check, Mail } from "lucide-react"
import { Input } from "@/component/ui/input"
import { Label } from "@/component/ui/label"
import { Button } from "@/component/ui/Button"
import { Card, CardContent } from "@/component/ui/card"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select"

const steps = [
  { id: "profile", name: "Profile", completed: false, current: true },
  { id: "contact", name: "Contact", completed: false, current: false },
  { id: "owner", name: "Owner", completed: false, current: false },
  { id: "account", name: "Account", completed: false, current: false },
  { id: "service-agreement", name: "Service agreement", completed: false, current: false },
]

export function ComplianceForm() {
  return (
    <div>
      
    </div>
  );
};
