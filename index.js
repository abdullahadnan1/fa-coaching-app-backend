const express = require('express');
const app = express();
const Routes = require('./routes');


// Middleware to parse JSON data
app.use(express.json());

// Use the class routes
app.use('/api/class', Routes.classRoutes);
app.use('/api/section', Routes.sectionRoutes);
app.use('/api/subject', Routes.subjectRoutes);
app.use('/api/teacher', Routes.teacherRoutes);

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

