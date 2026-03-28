import { Product, User } from '../interfaces/types';

// Usuarios
export const users: User[] = [
    {
        id: 'user_001',
        fullName: 'Juan Pérez',
        email: 'juan.perez@email.com',
        isActive: 'active',
        role: 'user',
        address: 'Calle Principal 123, Madrid',
        createdAt: new Date('2024-01-15')
    },
    {
        id: 'user_002',
        fullName: 'María García',
        email: 'maria.garcia@email.com',
        isActive: 'active',
        role: 'user',
        address: 'Avenida Central 456, Barcelona',
        createdAt: new Date('2024-02-20')
    },
    {
        id: 'admin_001',
        fullName: 'Carlos Rodríguez',
        email: 'carlos.admin@email.com',
        isActive: 'active',
        role: 'admin',
        address: 'Plaza Mayor 789, Valencia',
        createdAt: new Date('2024-01-10')
    },
    {
        id: 'user_003',
        fullName: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        isActive: 'active',
        role: 'user',
        address: 'Calle Luna 321, Sevilla',
        createdAt: new Date('2024-03-05')
    },
    {
        id: 'user_004',
        fullName: 'Luis Sánchez',
        email: 'luis.sanchez@email.com',
        isActive: 'inactive',
        role: 'user',
        address: 'Calle Sol 654, Bilbao',
        createdAt: new Date('2024-02-15')
    }
];

// Productos
export const products: Product[] = [
    // Muscle Cars (5)
    {
        sku: 'MUSCLE_001',
        name: 'Ford Mustang GT 2024',
        brand: 'Ford',
        quantity: 3,
        price: 55000,
        isActive: 'active',
        category: 'electronics',
        imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88a?w=400',
        description: 'Muscle car legendario con motor V8 de 5.0L',
        dimensions: '4.78m x 1.92m x 1.38m',
        tags: ['muscle', 'american', 'V8', 'classic'],
        createdAt: new Date('2024-01-20')
    },
    {
        sku: 'MUSCLE_002',
        name: 'Dodge Challenger Hellcat',
        brand: 'Dodge',
        quantity: 2,
        price: 62000,
        isActive: 'active',
        category: 'electronics',
        imageUrl: 'https://images.unsplash.com/photo-1611974289853-32c2789c0cbe?w=400',
        description: 'Potencia extrema con motor Hemi V8 sobrealimentado',
        dimensions: '5.02m x 1.92m x 1.45m',
        tags: ['muscle', 'hellcat', 'supercharged', 'dodge'],
        createdAt: new Date('2024-01-22')
    },
    {
        sku: 'MUSCLE_003',
        name: 'Chevrolet Camaro SS',
        brand: 'Chevrolet',
        quantity: 4,
        price: 48000,
        isActive: 'active',
        category: 'electronics',
        imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
        description: 'Diseño agresivo y rendimiento deportivo',
        dimensions: '4.78m x 1.91m x 1.35m',
        tags: ['muscle', 'camaro', 'sports', 'chevrolet'],
        createdAt: new Date('2024-01-25')
    },
    {
        sku: 'MUSCLE_004',
        name: 'Shelby GT500',
        brand: 'Shelby',
        quantity: 1,
        price: 75000,
        isActive: 'active',
        category: 'electronics',
        imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
        description: 'Versión de alto rendimiento del Mustang',
        dimensions: '4.79m x 1.92m x 1.38m',
        tags: ['muscle', 'shelby', 'limited', 'performance'],
        createdAt: new Date('2024-02-01')
    },
    {
        sku: 'MUSCLE_005',
        name: 'Pontiac GTO Judge',
        brand: 'Pontiac',
        quantity: 0,
        price: 85000,
        isActive: 'inactive',
        category: 'electronics',
        imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c6f88a?w=400',
        description: 'Clásico muscle car de los años 70',
        dimensions: '5.08m x 1.89m x 1.35m',
        tags: ['muscle', 'classic', 'vintage', 'collector'],
        createdAt: new Date('2024-02-05')
    },
    
    // Motos Harley Davidson (5)
    {
        sku: 'HD_001',
        name: 'Harley Davidson Street Glide',
        brand: 'Harley Davidson',
        quantity: 5,
        price: 28000,
        isActive: 'active',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c949b5b4b?w=400',
        description: 'Touring motorcycle con estilo clásico',
        dimensions: '2.49m x 0.96m x 1.44m',
        tags: ['harley', 'touring', 'cruiser', 'american'],
        createdAt: new Date('2024-02-10')
    },
    {
        sku: 'HD_002',
        name: 'Harley Davidson Fat Boy',
        brand: 'Harley Davidson',
        quantity: 3,
        price: 22000,
        isActive: 'active',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c949b5b4b?w=400',
        description: 'Iconic cruiser con diseño robusto',
        dimensions: '2.40m x 0.95m x 1.15m',
        tags: ['harley', 'fat-boy', 'cruiser', 'classic'],
        createdAt: new Date('2024-02-12')
    },
    {
        sku: 'HD_003',
        name: 'Harley Davidson Sportster',
        brand: 'Harley Davidson',
        quantity: 7,
        price: 15000,
        isActive: 'active',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c949b5b4b?w=400',
        description: 'Motocicleta deportiva ligera y ágil',
        dimensions: '2.21m x 0.86m x 1.12m',
        tags: ['harley', 'sportster', 'sport', 'agile'],
        createdAt: new Date('2024-02-15')
    },
    {
        sku: 'HD_004',
        name: 'Harley Davidson Road King',
        brand: 'Harley Davidson',
        quantity: 2,
        price: 32000,
        isActive: 'active',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c949b5b4b?w=400',
        description: 'Luxury touring para largos viajes',
        dimensions: '2.55m x 0.98m x 1.48m',
        tags: ['harley', 'touring', 'luxury', 'comfort'],
        createdAt: new Date('2024-02-18')
    },
    {
        sku: 'HD_005',
        name: 'Harley Davidson Iron 883',
        brand: 'Harley Davidson',
        quantity: 4,
        price: 18000,
        isActive: 'active',
        category: 'sports',
        imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c949b5b4b?w=400',
        description: 'Dark custom con estilo rebelde',
        dimensions: '2.24m x 0.84m x 1.09m',
        tags: ['harley', 'iron', 'dark', 'custom'],
        createdAt: new Date('2024-02-20')
    },
    
    // Libros tipo Meridiano (5)
    {
        sku: 'BOOK_001',
        name: 'Cien Años de Soledad',
        brand: 'Editorial Sudamericana',
        quantity: 15,
        price: 25.99,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        description: 'Obra maestra de Gabriel García Márquez',
        dimensions: '23cm x 15cm x 3cm',
        tags: ['literatura', 'realismo-magico', 'garcia-marquez', 'clasico'],
        createdAt: new Date('2024-03-01')
    },
    {
        sku: 'BOOK_002',
        name: 'El Quijote de la Mancha',
        brand: 'Editorial Cátedra',
        quantity: 12,
        price: 22.50,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        description: 'La obra cumbre de Miguel de Cervantes',
        dimensions: '24cm x 17cm x 4cm',
        tags: ['clasico', 'cervantes', 'literatura-espanola', 'aventura'],
        createdAt: new Date('2024-03-03')
    },
    {
        sku: 'BOOK_003',
        name: '1984',
        brand: 'Editorial Destino',
        quantity: 20,
        price: 18.99,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        description: 'Distopía de George Orwell',
        dimensions: '21cm x 14cm x 2.5cm',
        tags: ['distopia', 'orwell', 'politica', 'clasico-moderno'],
        createdAt: new Date('2024-03-05')
    },
    {
        sku: 'BOOK_004',
        name: 'El Principito',
        brand: 'Editorial Salvat',
        quantity: 25,
        price: 15.99,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        description: 'Fábula filosófica de Antoine de Saint-Exupéry',
        dimensions: '20cm x 13cm x 1.5cm',
        tags: ['fabula', 'filosofia', 'infantil', 'clasico'],
        createdAt: new Date('2024-03-07')
    },
    {
        sku: 'BOOK_005',
        name: 'Sangre de Campeon',
        brand: 'Editorial Grijalbo',
        quantity: 8,
        price: 28.50,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        description: 'Novela de superación y deporte',
        dimensions: '22cm x 15cm x 2.8cm',
        tags: ['deporte', 'superacion', 'motivacion', 'ficción'],
        createdAt: new Date('2024-03-10')
    }
];
