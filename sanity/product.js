export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}],
            options: {
                hotspot: true,
            }
        },
        {
            name: "name",
            title: "name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLenght: 90,
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        }
    ]
}