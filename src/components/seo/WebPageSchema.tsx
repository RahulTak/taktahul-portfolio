import { webpageSchema } from "@/lib/schema/webpage";

export default function WebPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webpageSchema),
      }}
    />
  );
}