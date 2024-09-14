// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"], // Adjusted to match Astro's content directory
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "src/content/pages/{slug}.md", // Changed to .md for markdown files
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: false }, // Added description field
            { name: "draft", type: "boolean", required: false } // Added draft field for unpublished pages
          ]
        },
        {
          name: "Post",
          type: "post",
          urlPath: "/{slug}",
          filePath: "src/content/posts/{slug}.md", // Changed to .md for markdown files
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: false }, // Added description field
            { name: "draft", type: "boolean", required: false } // Added draft field for unpublished posts
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
