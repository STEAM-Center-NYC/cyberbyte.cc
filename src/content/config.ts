import { z, defineCollection } from 'astro:content'

const membersCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        name: z.string(),
        image: z.string(),
        interests: z.array(z.string()),
        website: z.string().url()
    })
})

export const collections = {
  'members': membersCollection,
}
