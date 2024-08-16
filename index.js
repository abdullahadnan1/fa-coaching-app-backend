const express = require('express');
const app = express();
const Routes = require('./routes');
const cors = require('cors');



// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

// Use the class routes
app.use('/api/class', Routes.classRoutes);
app.use('/api/section', Routes.sectionRoutes);
app.use('/api/subject', Routes.subjectRoutes);
<<<<<<< HEAD
app.use('/api/student', Routes.studentRoutes);
app.use('/api/year', Routes.yearRoutes);
app.use('/api/period', Routes.periodRoutes)
=======
app.use('/api/teacher', Routes.teacherRoutes);
>>>>>>> f1f4b1cf420938dbda6972338c5d2fa27d8e424e

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

