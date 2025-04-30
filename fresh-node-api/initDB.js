const sequelize = require('./src/database/db');
const Product = require('./src/models/Product');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
    
    // Insertar datos de ejemplo
    await Product.bulkCreate([
      { name: 'Laptop', price: 999.99, description: 'Potente laptop con 16GB RAM', stock: 10 },
      { name: 'Mouse', price: 25.50, description: 'Mouse inalámbrico', stock: 50 },
      { name: 'Teclado', price: 45.00, description: 'Teclado mecánico', stock: 30 },
      { name: 'Monitor', price: 199.99, description: 'Monitor 24" Full HD', stock: 15 }
    ]);
    
    console.log('Sample products inserted');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
})();
