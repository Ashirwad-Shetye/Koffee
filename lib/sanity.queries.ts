import { groq } from 'next-sanity'




export interface Post {
    _id: string
    title?: string
    image?: any
    name?: string
    slug?: string
    category?: string
    genders?: string
    color?: string
    price?: number
    description?: any
}