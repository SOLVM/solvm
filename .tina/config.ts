import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID || null, // Get this from tina.io
  token: process.env.READ_ONLY_TOKEN || null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Work",
        name: "work",
        path: "content/work",
        format: "md",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "client_type",
            label: "Client Type",
          },
          {
            type: "string",
            name: "client_location",
            label: "Client Location",
          },
          {
            type: "image",
            name: "client_image",
            label: "Client Image",
          },
          {
            type: "image",
            name: "client_logo",
            label: "Client logo",
          },
          {
            type: "string",
            name: "client_heading",
            label: "Client heading",
          },
          {
            type: "object",
            list: true,
            label: "layers",
            name: "layers",
            templates: [
              {
                fields: [
                  {
                    type: "string",
                    name: "head",
                    label: "head",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "text",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
                label: "fm_layer_content",
                name: "fm_layer_content",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
                label: "fm_layer_image",
                name: "fm_layer_image",
              },
              {
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
                label: "fm_layer_quote",
                name: "fm_layer_quote",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt",
                  },
                ],
                label: "fm_layer_browser",
                name: "fm_layer_browser",
              },
              {
                fields: [
                  {
                    type: "string",
                    name: "code_type",
                    label: "Code type",
                  },
                  {
                    type: "string",
                    name: "code",
                    label: "Code",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
                label: "fm_layer_code",
                name: "fm_layer_code",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
                label: "fm_layer_image_w_text",
                name: "fm_layer_image_w_text",
              },
              {
                fields: [
                  {
                    name: "images",
                    type: "image",
                    label: "Images",
                  },
                ],
                label: "fm_layer_gallery_images",
                name: "fm_layer_gallery_images",
              },
            ],
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content",
        format: "md",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "client_type",
            label: "Client Type",
          },
          {
            type: "string",
            name: "client_location",
            label: "Client Location",
          },
          {
            type: "image",
            name: "client_image",
            label: "Client Image",
          },
          {
            type: "image",
            name: "client_logo",
            label: "Client logo",
          },
          {
            type: "string",
            name: "client_heading",
            label: "Client heading",
          },
          {
            type: "object",
            list: true,
            label: "layers",
            name: "layers",
            templates: [
              {
                fields: [
                  {
                    type: "string",
                    name: "head",
                    label: "head",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "text",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
                label: "fm_layer_content",
                name: "fm_layer_content",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
                label: "fm_layer_image",
                name: "fm_layer_image",
              },
              {
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
                label: "fm_layer_quote",
                name: "fm_layer_quote",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt",
                  },
                ],
                label: "fm_layer_browser",
                name: "fm_layer_browser",
              },
              {
                fields: [
                  {
                    type: "string",
                    name: "code_type",
                    label: "Code type",
                  },
                  {
                    type: "string",
                    name: "code",
                    label: "Code",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
                label: "fm_layer_code",
                name: "fm_layer_code",
              },
              {
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
                label: "fm_layer_image_w_text",
                name: "fm_layer_image_w_text",
              },
              {
                fields: [
                  {
                    name: "images",
                    type: "image",
                    label: "Images",
                  },
                ],
                label: "fm_layer_gallery_images",
                name: "fm_layer_gallery_images",
              },
            ],
          },
        ],
      },
    ],
  },
});
