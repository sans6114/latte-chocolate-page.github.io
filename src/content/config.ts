// https://docs.astro.build/en/guides/content-collections/#defining-collections

import {
  defineCollection,
  reference,
  z,
} from 'astro:content';

import { docsSchema } from '@astrojs/starlight/schema';

const productsCollection = defineCollection({
  type: 'content',
    schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
  }),
});

const authorCollection = defineCollection({
  type: 'data',
  schema: ({image}) => z.object({
      name: z.string(),
      image: image().refine((img) => img.width > 300, {
          message: 'you image should be lower than 300px'
      }),
      type: reference('products')
  })
})





export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'products': productsCollection,
};