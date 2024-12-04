interface TOSGeneratorProps {
  businessType: string;
  salesTypes: string[];
  companyName: string;
  website: string;
  hasRefundPolicy: boolean;
  refundDays: number;
  format: string;
  jurisdiction: string;
  dataHandling: string;
  disputeResolution: string;
  terminationTerms: string;
  intellectualProperty: string;
  liabilityLimitations: string;
  warrantyDisclaimers: string;
  contactInformation: string;
}

export function generateTOS({
  businessType,
  salesTypes,
  companyName,
  website,
  hasRefundPolicy,
  refundDays,
  format,
  jurisdiction,
  dataHandling,
  disputeResolution,
  terminationTerms,
  intellectualProperty,
  liabilityLimitations,
  warrantyDisclaimers,
  contactInformation,
}: TOSGeneratorProps) {
  let tos = `# Terms of Service for ${companyName}\n\n`;
  tos += `Last updated: ${new Date().toLocaleDateString()}\n\n`;
  tos += `Welcome to ${website}. By accessing our website, you agree to these terms of service. Don't worry, we won't ask for your firstborn... yet.\n\n`;

  // Add business type specific terms
  if (businessType === "individual") {
    tos += `## Service Provider\n${companyName} operates as an individual business entity. Yes, it's just us. Don't act so surprised.\n\n`;
  } else {
    tos += `## Service Provider\n${companyName} is a registered business entity. We've got paperwork and everything.\n\n`;
  }

  // Add sales-specific terms
  if (salesTypes.includes("none")) {
    tos += `## Service Usage\nThis website provides information and services free of charge. No, we're not crazy. We just haven't figured out how to charge you yet.\n\n`;
  } else {
    tos += `## Products and Services\n`;
    if (salesTypes.includes("digital")) {
      tos += `### Digital Products\nWe offer digital products for sale. Once you buy, it's yours. Just don't try to sell it as your own, or we'll have words.\n\n`;
    }
    if (salesTypes.includes("physical")) {
      tos += `### Physical Products\nWe sell physical products that will be shipped to the address you provide. Make sure it's correct, or your neighbor might get a nice surprise.\n\n`;
    }
    if (salesTypes.includes("subscription")) {
      tos += `### Subscription Services\nWe offer subscription-based services. By purchasing, you agree to recurring billing. It's like a gym membership, but you might actually use this one.\n\n`;
    }

    // Add refund policy if applicable
    if (hasRefundPolicy) {
      tos += `## Refund Policy\n`;
      if (salesTypes.includes("physical")) {
        tos += `For physical products, we offer a ${refundDays}-day return and refund policy. Items must be returned in their original condition. No, we won't accept your cat-chewed sweater.\n\n`;
      }
      if (salesTypes.includes("digital")) {
        tos += `For digital products, we offer a ${refundDays}-day satisfaction guarantee. If you're not happy, we're not happy. But after ${refundDays} days, we're moving on.\n\n`;
      }
      if (salesTypes.includes("subscription")) {
        tos += `For subscriptions, you may cancel at any time. Refunds are prorated based on usage. We're not monsters, after all.\n\n`;
      }
    }
  }

  // Add new sections
  if (jurisdiction) {
    tos += `## Governing Law\nThese Terms shall be governed and construed in accordance with the laws of ${jurisdiction}, without regard to its conflict of law provisions. Don't like it? Take it up with the judge.\n\n`;
  }

  if (dataHandling) {
    tos += `## User Data Handling\n${dataHandling}\n\n`;
  }

  if (disputeResolution) {
    tos += `## Dispute Resolution\n${disputeResolution}\n\n`;
  }

  if (salesTypes.includes("subscription") && terminationTerms) {
    tos += `## Account Termination\n${terminationTerms}\n\n`;
  }

  if (intellectualProperty) {
    tos += `## Intellectual Property Rights\n${intellectualProperty}\n\n`;
  }

  if (liabilityLimitations) {
    tos += `## Limitation of Liability\n${liabilityLimitations}\n\n`;
  }

  if (warrantyDisclaimers) {
    tos += `## Warranty Disclaimer\n${warrantyDisclaimers}\n\n`;
  }

  if (contactInformation) {
    tos += `## Contact Information\nFor any questions about these Terms, please contact us at:\n\n${contactInformation}\n`;
  }

  tos += `\nRemember, by using our service, you're agreeing to these terms. It's like a pinky promise, but legally binding.\n`;

  return format === "markdown" ? tos : convertToHTML(tos);
}

function convertToHTML(markdown: string) {
  // Basic markdown to HTML conversion
  return markdown
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|p])/gm, "<p>")
    .replace(/$/gm, "</p>");
}
