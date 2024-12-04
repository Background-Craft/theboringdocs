"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateTOS } from "@/lib/generators/tos";
import { ListRestart } from "lucide-react";

export default function TOSGenerator() {
  const [formData, setFormData] = useState({
    businessType: "",
    salesTypes: [],
    companyName: "",
    website: "",
    hasRefundPolicy: false,
    refundDays: 30,
    format: "markdown",
    jurisdiction: "",
    dataHandling: "",
    disputeResolution: "",
    terminationTerms: "",
    intellectualProperty: "",
    liabilityLimitations: "",
    warrantyDisclaimers: "",
    contactInformation: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalesTypeChange = (type: string) => {
    setFormData((prev) => {
      if (type === "none") {
        return { ...prev, salesTypes: ["none"] };
      }
      if (prev.salesTypes.includes("none")) {
        return { ...prev, salesTypes: [type] };
      }
      const updatedSalesTypes = prev.salesTypes.includes(type)
        ? prev.salesTypes.filter((t) => t !== type)
        : [...prev.salesTypes, type];
      return { ...prev, salesTypes: updatedSalesTypes };
    });
  };

  const handleGenerateTOS = () => {
    const tos = generateTOS(formData);
    console.log(tos);
    // Here you would typically show the generated TOS in a modal or copy to clipboard
  };

  const resetForm = () => {
    setFormData({
      businessType: "",
      salesTypes: [],
      companyName: "",
      website: "",
      hasRefundPolicy: false,
      refundDays: 30,
      format: "markdown",
      jurisdiction: "",
      dataHandling: "",
      disputeResolution: "",
      terminationTerms: "",
      intellectualProperty: "",
      liabilityLimitations: "",
      warrantyDisclaimers: "",
      contactInformation: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Terms of Service Generator
          </CardTitle>
          <p className="text-muted-foreground">
            Because legal jargon is your new favorite bedtime story.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="basics">The Basics</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="legal">Legal Mumbo Jumbo</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="basics" className="space-y-6">
              <div className="space-y-4">
                <Label>Business Type</Label>
                <Select
                  name="businessType"
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, businessType: value }))
                  }
                  value={formData.businessType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">
                      Individual (You're a one-person army)
                    </SelectItem>
                    <SelectItem value="incorporated">
                      Incorporated (You've got backup)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>What do you sell? (Choose your weapon)</Label>
                <div className="flex flex-wrap gap-2">
                  {["none", "digital", "physical", "subscription"].map(
                    (type) => (
                      <Button
                        key={type}
                        onClick={() => handleSalesTypeChange(type)}
                        variant={
                          formData.salesTypes.includes(type)
                            ? "default"
                            : "outline"
                        }
                        className="capitalize">
                        {type === "none" ? "Nothing (It's complicated)" : type}
                      </Button>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Business Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Acme Corp (or something less cliché)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="www.your-awesome-site.com"
                />
              </div>
            </TabsContent>

            <TabsContent value="policies" className="space-y-6">
              {(formData.salesTypes.includes("physical") ||
                formData.salesTypes.includes("digital") ||
                formData.salesTypes.includes("subscription")) && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasRefundPolicy"
                      checked={formData.hasRefundPolicy}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          hasRefundPolicy: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="hasRefundPolicy">
                      Include Refund Policy (Because sometimes it's just not
                      meant to be)
                    </Label>
                  </div>

                  {formData.hasRefundPolicy && (
                    <div className="space-y-2">
                      <Label htmlFor="refundDays">Refund Period (days)</Label>
                      <Input
                        id="refundDays"
                        name="refundDays"
                        type="number"
                        value={formData.refundDays}
                        onChange={handleInputChange}
                        min="1"
                        max="365"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="dataHandling">
                  User Data Handling (Optional)
                </Label>
                <Textarea
                  id="dataHandling"
                  name="dataHandling"
                  value={formData.dataHandling}
                  onChange={handleInputChange}
                  placeholder="We handle your data like we handle our coffee: carefully and with utmost respect."
                />
              </div>

              {formData.salesTypes.includes("subscription") && (
                <div className="space-y-2">
                  <Label htmlFor="terminationTerms">
                    Account Termination Terms (Optional)
                  </Label>
                  <Textarea
                    id="terminationTerms"
                    name="terminationTerms"
                    value={formData.terminationTerms}
                    onChange={handleInputChange}
                    placeholder="Breaking up is hard. Here's how we do it."
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="legal" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction/Governing Law</Label>
                <Input
                  id="jurisdiction"
                  name="jurisdiction"
                  value={formData.jurisdiction}
                  onChange={handleInputChange}
                  placeholder="e.g., State of Confusion, United States"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disputeResolution">
                  Dispute Resolution Preferences (Optional)
                </Label>
                <Textarea
                  id="disputeResolution"
                  name="disputeResolution"
                  value={formData.disputeResolution}
                  onChange={handleInputChange}
                  placeholder="Rock, Paper, Scissors... or something more formal."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="intellectualProperty">
                  Intellectual Property Rights (Optional)
                </Label>
                <Textarea
                  id="intellectualProperty"
                  name="intellectualProperty"
                  value={formData.intellectualProperty}
                  onChange={handleInputChange}
                  placeholder="Our ideas are like our toothbrushes. You don't use them, and we don't share."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="liabilityLimitations">
                  Liability Limitations (Optional)
                </Label>
                <Textarea
                  id="liabilityLimitations"
                  name="liabilityLimitations"
                  value={formData.liabilityLimitations}
                  onChange={handleInputChange}
                  placeholder="We're responsible, but not THAT responsible. You know what we mean."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="warrantyDisclaimers">
                  Warranty Disclaimers (Optional)
                </Label>
                <Textarea
                  id="warrantyDisclaimers"
                  name="warrantyDisclaimers"
                  value={formData.warrantyDisclaimers}
                  onChange={handleInputChange}
                  placeholder="We're good, but we're not fortune-tellers. No guarantees on the future."
                />
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contactInformation">Contact Information</Label>
                <Textarea
                  id="contactInformation"
                  name="contactInformation"
                  value={formData.contactInformation}
                  onChange={handleInputChange}
                  placeholder="How to reach us (smoke signals not accepted)"
                />
              </div>

              <div className="space-y-4">
                <Label>Output Format</Label>
                <div className="flex space-x-4">
                  <Button
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, format: "markdown" }))
                    }
                    variant={
                      formData.format === "markdown" ? "default" : "outline"
                    }>
                    Markdown
                  </Button>
                  <Button
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, format: "html" }))
                    }
                    variant={
                      formData.format === "html" ? "default" : "outline"
                    }>
                    HTML
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-8">
            <Button
              onClick={resetForm}
              variant="outline"
              className="flex items-center gap-2">
              <ListRestart className="h-4 w-4" /> Reset Form
            </Button>
            <Button
              onClick={handleGenerateTOS}
              className="w-1/2"
              disabled={
                !formData.companyName ||
                !formData.website ||
                !formData.businessType ||
                formData.salesTypes.length === 0
              }>
              Generate Terms of Service
            </Button>
          </div>

          <Alert variant="warning" className="mt-6">
            <AlertDescription>
              This generator creates a basic Terms of Service. For bulletproof
              legal protection, consult a lawyer. We're good, but we're not that
              good.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}