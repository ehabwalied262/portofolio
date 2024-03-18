export interface Book {
    id: number;
    image: string;
    name: string;
    description: string;
    category: string;
}


export const booksData: Book[] = [

    {
        id: 1,
        image: '/clean-code.jpg',
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        description: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code.',
        category: 'Clean Code'
    },
    {
        id: 2,
        image: '/clean-code.jpg',
        name: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
        description: 'Data is at the center of many challenges in system design today. Distributed systems have become more fine-grained as organizations shift from monolithic applications to microservices.',
        category: 'System Design'
    },
    {
        id: 3,
        image: '/clean-code.jpg',
        name: 'The Pragmatic Programmer: Your Journey to Mastery',
        description: 'One of the most recommended programming books of all time. Written as a series of self-contained sections and filled with practical advice, this book helps readers improve their software development skills.',
        category: 'Programming Principles'
    },
    {
        id: 4,
        image: '/clean-code.jpg',
        name: 'Refactoring: Improving the Design of Existing Code',
        description: 'Refactoring is about improving the design of existing code. This book helps software developers understand the principles of refactoring and apply them to their projects.',
        category: 'Code Refactoring'
    },
    {
        id: 5,
        image: '/clean-code.jpg',
        name: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
        description: 'This book discusses the principles of Clean Architecture and provides guidelines to create systems that are scalable, robust, adaptable, and maintainable over time.',
        category: 'Software Architecture'
    },
    {
        id: 6,
        image: '/clean-code.jpg',
        name: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
        description: 'For developers preparing for technical interviews, this book offers comprehensive solutions to common programming questions and helps improve problem-solving skills.',
        category: 'Algorithms'
    }
];