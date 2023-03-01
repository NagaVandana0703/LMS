export const CategoryFormFields=[
    { name: 'category', type: 'text', placeholder: 'Category Name' },
    { name: 'minAge', type: 'number', placeholder: 'Enter Min Age' },
    { name: 'maxAge', type: 'number', placeholder: 'Enter Max Age' }
]
export const CategoryBtn={ text: 'Add Category' }

export const BookFormFields=[
    { name: 'bookName', type: 'text', placeholder: 'Book Name' },
    { name: 'authorName', type: 'text', placeholder: 'Author Name' },
    { name: 'bookCategory.category', type: 'text', placeholder: 'Book CategoryEnter' },
    { name: 'bookCategory.minAge', type: 'number', placeholder: 'Minimum Age' },
    { name: 'bookCategory.maxAge', type: 'number', placeholder: 'Maximum Age' },
    { name: 'quantity', type: 'number', placeholder: 'Quantity' }

]
export const BookSubmitBtn = { text: 'Add Book' }