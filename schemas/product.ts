import { defineField, defineType } from "sanity"



export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
        }),
        defineField({
            name: 'gender',
            title: 'Gender',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        })
    ]
})