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
        imageUrl: 'https://leasehackr-assets.b-cdn.net/optimized/3X/4/c/4c302e2da06afd6e036ef17afe1b1e106ba58a39_2_1035x690.jpeg',
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
        imageUrl: 'https://i.pinimg.com/1200x/e1/e3/eb/e1e3eb3603d32e315d78814bfb6a97ae.jpg',
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
        imageUrl: 'https://i.pinimg.com/736x/26/ec/2a/26ec2a04d45226f2c2273392a065c94e.jpg',
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
        imageUrl: 'https://i.pinimg.com/736x/8f/14/ec/8f14ecb93a335056c9293656a24893c5.jpg',
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
        imageUrl: 'https://i.pinimg.com/1200x/50/e3/86/50e3863959a1bf1be6182910c4c25127.jpg',
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
        imageUrl: 'https://i.pinimg.com/736x/1c/6f/b7/1c6fb7dec41ccf49a54dc14b225a1dae.jpg',
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
        imageUrl: 'https://i.pinimg.com/1200x/b0/47/01/b0470127cc1851a6c34ea198ab10f8c8.jpg',
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
        imageUrl: 'https://i.pinimg.com/736x/da/5c/f9/da5cf993357e520d7bb42d74596e988e.jpg',
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
        imageUrl: 'https://i.pinimg.com/736x/50/e4/d3/50e4d32b3e987b53238fd11fa3393fb7.jpg',
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
        imageUrl: 'https://i.pinimg.com/1200x/67/79/dd/6779dd7fd6297757e051e358789e4eb2.jpg',
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
        imageUrl: 'https://carlosbattaglini.es/wp-content/uploads/2017/02/librocienan%CC%83osdesoledad.jpg',
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
        imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/fa/9e/fa9e5a2e42c4923ec4bcfcc194be8b2a.jpg',
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
        imageUrl: 'https://www.planetadelibros.com.co/usuaris/libros/thumbs/c7d9bd58-9f1a-4f0c-b82c-0c1b4a2715aa/d_360_620/409066__instagram3_19841.webp',
        description: 'Distopía de George Orwell',
        dimensions: '21cm x 14cm x 2.5cm',
        tags: ['distopia', 'orwell', 'politica', 'clasico-moderno'],
        createdAt: new Date('2024-03-05')
    },
    {
        sku: 'BOOK_004',
        name: 'meridiano de medianoche',
        brand: 'Editorial Salvat',
        quantity: 25,
        price: 15.99,
        isActive: 'active',
        category: 'books',
        imageUrl: 'https://www.tiendaclubdelectores.cl/images/img/8/e/163377_1_large.jpg?1693501793',
        description: 'Novela de fantasía oscura y misterio sobrenatural',
        dimensions: '20cm x 13cm x 1.5cm',
        tags: ['fantasia', 'misterio', 'sobrenatural', 'noche'],
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
        imageUrl: 'https://panamericana.vtexassets.com/arquivos/ids/531702/el-bosque-oscuro-9786287641341.jpg?v=638437110947330000',
        description: 'Novela de superación y deporte',
        dimensions: '22cm x 15cm x 2.8cm',
        tags: ['deporte', 'superacion', 'motivacion', 'ficción'],
        createdAt: new Date('2024-03-10')
    }
];
