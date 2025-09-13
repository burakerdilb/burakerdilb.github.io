// Courses Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Courses.js loaded successfully');
    // Course data for each program
    const courseData = {
        'electronics': {
            title: 'Electronics and Communications Engineering',
            categories: [
                {
                    name: 'Mathematics & Physics',
                    courses: [
                        { name: 'Mathematics I (MAT 103E)', link: 'https://mega.nz/folder/3TZ0BAhZ#ODIV8tvpAg8I-DaFU_txmw' },
                        { name: 'Mathematics II (MAT 104E)', link: 'https://mega.nz/folder/PagCSKLC#t1CBd2vGOO95MOSbqsbDLw' },
                        { name: 'Probability and Statistics (MAT 271E)', link: 'https://mega.nz/folder/SDJDiYKI#TgcBsAXXyv9XRO9PXDrxOQ' },
                        { name: 'Linear Algebra (MAT 281E)', link: 'https://mega.nz/folder/zSwymDyC#Ajjo8xdsPmJU1Cd7FzSpWg' },
                        { name: 'Engineering Mathematics (MAT 210E)', link: 'https://mega.nz/folder/7OpHVZ4C#i-cg_am8Ipgs4Q0lAbehcQ' },
                        { name: 'Numerical Methods (MAT 202E)', link: 'https://mega.nz/folder/CaBy3QKA#KtEWjH603XImcXCIBkkKFA' },
                        { name: 'Physics I (FIZ 101E)', link: null },
                        { name: 'Physics II (FIZ 102E)', link: null },
                        { name: 'General Chemistry I (KIM 101E)', link: null }
                    ]
                },
                {
                    name: 'Core Electronics',
                    courses: [
                        { name: 'Basics of Electrical Circuits (EHB 211E)', link: 'https://mega.nz/folder/2KY1HTaD#zna9M00ENa5BoGTjKN4BCQ' },
                        { name: 'Circuit and System Analysis (EEF 232E)', link: 'https://mega.nz/folder/LGRWySoD#DyrdUYLYau8N-J9MKMQRpA' },
                        { name: 'Electronics I (EHB 231E)', link: 'https://mega.nz/folder/KDARGIwA#TnUUQ0ca8YDEG4fgtvS5mg' },
                        { name: 'Electronics II (EHB 262E)', link: 'https://mega.nz/folder/eWQnkA5R#qgrAGKsZtKQc6yFJdPmIFA' },
                        { name: 'Analog Electronic Circuits (EHB 335E)', link: 'https://mega.nz/folder/aOJhjILI#CGQqahftYKr8Z6d-5ahYCA' },
                        { name: 'Digital Electronic Circuits (EHB 322E)', link: 'https://mega.nz/folder/DPQ03IjB#5AYsg6TstkqvwBtraH0B8A' }
                    ]
                },
                {
                    name: 'Digital Systems & Signal Processing',
                    courses: [
                        { name: 'Introduction to Logic Design (EEF 205E)', link: 'https://mega.nz/folder/ebwUHL4L#QniPMQ5x0rvoJ4ZL27OXmg' },
                        { name: 'Logic Design Lab. (EHB 324E)', link: 'https://mega.nz/folder/jD5hlb6S#6B3rh8WzcD3SWhqu5J94Zw' },
                        { name: 'Signal Processing & Linear Systems (EHB 206E)', link: 'https://mega.nz/folder/nbBRURAL#-A4IaSmfLCnia0sQVirH7Q' },
                        { name: 'Digital Signal Processing (EHB 315E)', link: 'https://mega.nz/folder/3G4USRjJ#vf0sWmRIlm7OVu9IfR-Mmw' }
                    ]
                },
                {
                    name: 'Communications & Electromagnetics',
                    courses: [
                        { name: 'Communications I (EHB 307E)', link: 'https://mega.nz/folder/CDBw1TaJ#T1ukoweS3nAdtnx_gco_oA' },
                        { name: 'Communications II (EHB 308E)', link: 'https://mega.nz/folder/CXBHhQDJ#jy1yVS4LxxpDRQo-o5sgtg' },
                        { name: 'Theory of Electromagnetics I (EEF 212E)', link: 'https://mega.nz/folder/GXBSUBpL#Wgf2_K_rheAjnYc5JIHgew' },
                        { name: 'Theory of Electromagnetics II (EHB 337E)', link: 'https://mega.nz/folder/qSxiSBYQ#S31tFARw388-wQAiTb2WcA' },
                        { name: 'Microwave Engineering (EHB 362E)', link: 'https://mega.nz/folder/LD4m1B6I#eewtQ875ojFRf6DsWfdIZQ' },
                        { name: 'Antennas (EHB 456E)', link: 'https://mega.nz/folder/qf5DALAJ#Jfu_wsLFdD9axqipxKEUGw' },
                        { name: 'RF Microelectronics (EHB 417E)', link: 'https://mega.nz/folder/CSQRTAxS#hqc8qK7FwZhNYesjbN_rxA' },
                        { name: 'Active Microwave Circuits (EHB 451E)', link: 'https://mega.nz/folder/PWp3wBKb#kQREuUfuRJYAUK3WPqja3A' },
                        { name: 'Satellite Communications (EHB 464E)', link: 'https://mega.nz/folder/7aJQDIbC#QaMgp8xMGc0H6SRcEDVwEA' }
                    ]
                },
                {
                    name: 'Programming & AI',
                    courses: [
                        { name: 'Introduction to C (EEF 110E)', link: 'https://mega.nz/folder/LOgVRIJZ#6IDHBiKeIzDQyEpNrcqz4w' },
                        { name: 'Data Structures & Programming (EHB 208E)', link: 'https://mega.nz/folder/SDhwDQTL#Zd6TPt2wC1HvOZfBgzwLSg' },
                        { name: 'Machine Learning for Signal Processing (EHB 328E)', link: 'https://mega.nz/folder/OSYGWayS#5MttErHUjr8eg5swyS41ig' },
                        { name: 'Computer Aided Devices in Medicine (EHB 440E)', link: 'https://mega.nz/folder/rehiVJwZ#_SFivM3HhZLe1AvshJm65w' },
                        { name: 'Artificial Neural Networks (EHB 420E)', link: 'https://mega.nz/folder/GK5UDAyQ#9yoKxIGzkO459K4s-grSJQ' }
                    ]
                },
                {
                    name: 'Additional Courses',
                    courses: [
                        { name: 'Materials Science (MAL 201E)', link: 'https://mega.nz/folder/KSIVkKYY#pjvxS4wSny5z72SgU87fZg' },
                        { name: 'Modern Physics (FIZ 201E)', link: 'https://mega.nz/folder/DWInjDCL#OZwCy0jAyDIO6vBiTJ0LgQ' },
                        { name: 'Control Systems (KON 317E)', link: 'https://mega.nz/folder/zKYnmSqL#dt6gqHzzSWBOF8J7ijpNLA' },
                        { name: 'Random Signals and Noise (EHB 334E)', link: 'https://mega.nz/folder/yahFnZpS#5l71cgEKykelAVE3oiUfEg' }
                    ]
                },
                {
                    name: 'Humanities & Languages',
                    courses: [
                        { name: 'French I (FRA 101)', link: 'https://mega.nz/folder/yOY0XCKK#9qw8h-GkPVzsK1iwwJHRIw' },
                        { name: 'Italian I (ITA 101)', link: 'https://mega.nz/folder/raIUzbZI#nZI6PZG23WUicAlR4i3KHg' },
                        { name: 'Economics (EKO 201E)', link: 'https://mega.nz/folder/eTJimAwb#CrUSOpdP79-Fth7cO_xuQ' },
                        { name: 'International Relations and Globalization (ITB 094E)', link: 'https://mega.nz/folder/uHZwEaKa#SldTjUw0n_46jCeEzzzJug' },
                        { name: 'The Modern Middle East (ITB 214E)', link: 'https://mega.nz/folder/HGY0TJzZ#77Tbg4tp4yYMvTHCIDsyOg' }
                    ]
                }
            ]
        },
        'aeronautical': {
            title: 'Aeronautical Engineering',
            categories: [
                {
                    name: 'Aerospace Fundamentals',
                    courses: [
                        { name: 'Aerospace Materials (UCK 215E)', link: 'https://mega.nz/folder/OCxByTqY#-FIthJuIvVNyr2lWwxBPKg' },
                        { name: 'Statics (STA 201E)', link: 'https://mega.nz/folder/DTQXjDCC#Qbluhz09UqVHigRax0TWKQ' },
                        { name: 'Dynamics (DNK 201E)', link: null },
                        { name: 'Computer Aided Drafting with CATIA (UZB 112E)', link: 'https://mega.nz/folder/rLZwAQIS#P15kYQHiSj84S2-iiMmMUA' }
                    ]
                },
                {
                    name: 'Thermodynamics & Fluid Dynamics',
                    courses: [
                        { name: 'Thermodynamics (UCK 207E)', link: null },
                        { name: 'Fluid Dynamics (AKM 219E)', link: null },
                        { name: 'Strength of Materials (MUK 211E)', link: 'https://mega.nz/folder/fe52FRBR#R-VXKCq3F-5vAYRyE1tF9g' }
                    ]
                },
                {
                    name: 'Aerodynamics & Flight',
                    courses: [
                        { name: 'Measurement Techniques (UZB 301E)', link: 'https://mega.nz/folder/CPRWxK4T#kn926u2UAOreN9O2vKndhQ' },
                        { name: 'Compressible Aerodynamics (UZB 310E)', link: 'https://mega.nz/folder/uGRA2JRJ#guVnv3qGOga0wLe_-lp_bg' },
                        { name: 'Experimental Engineering (UCK 304E)', link: 'https://mega.nz/folder/iP5nzLRa#F0UuFVBgvM2NuURS6enDUw' },
                        { name: 'Jet Propulsion (UCK 421)', link: 'https://mega.nz/folder/CHIByLiJ#E8jsnqP0vC9fsUbqsq3ZXQ' },
                        { name: 'Flight Mechanics (UCK 322E)', link: 'https://mega.nz/folder/yOo2hD4R#0kPgmQ79XyHKkYGnSCPpw' },
                        { name: 'Aerodynamics (UCK 305E)', link: 'https://mega.nz/folder/iTglBQoa#BJlNkyt51lnBqG5jzkQyng' }
                    ]
                },
                {
                    name: 'Aircraft Design & Structures',
                    courses: [
                        { name: 'Principles of Aircraft Design I (UCK 423E)', link: 'https://mega.nz/folder/XfhBzC6S#lqC2cE9xey1Ha98gkoq1DA' },
                        { name: 'Principles of Aircraft Design II (UCK 424E)', link: 'https://mega.nz/folder/zbJGHTwJ#o6-jAKrLa7Dub_u1K_4USg' },
                        { name: 'Aerospace Structures (UZB 337E)', link: 'https://mega.nz/folder/PbRhEB4J#bGpwwFwbIwYDRdyYsana5Q' },
                        { name: 'Heat Transfer (UZB 314E)', link: 'https://mega.nz/folder/6TRxVaDA#d0tNfgBqaBTuw5JgV7Syww' },
                        { name: 'Flight Stability and Control (UCK 441E)', link: 'https://mega.nz/folder/TOo1gShC#YoCSD-nnPtX3_56aS_EiNg' }
                    ]
                }
            ]
        },
        'sorbonne': {
            title: 'Waves and Devices for Advanced Wireless Communication Systems (M2)',
            categories: [
                {
                    name: 'Advanced Wireless Communication Systems',
                    courses: [
                        { name: 'Electromagnetic Compatibility', link: 'https://mega.nz/folder/iSxU0YwL#Vd9rKHtfeHywgow5J2-N6g' },
                        { name: 'Wireless Communications', link: 'https://mega.nz/folder/SXRGGa6A#8PXe3e58oV41GD8-7tnzZA' },
                        { name: 'Radiofrequency Devices', link: 'https://mega.nz/folder/eXxWVQAS#sJxox7UuIt2vojLUyg3TOw' },
                        { name: 'Advanced Numerical Methods for Antennas', link: 'https://mega.nz/folder/LLxRgZKR#uVTwBvxLCLKVGTC8QNWY5Q' }
                    ]
                }
            ]
        }
    };

    console.log('Available programs:', Object.keys(courseData));

    // Modal elements
    const modal = document.getElementById('coursesModal');
    const modalContent = document.getElementById('coursesModalContent');
    const closeBtn = document.querySelector('.close');
    const courseButtons = document.querySelectorAll('.courses-btn');
    console.log('Found', courseButtons.length, 'course buttons');

    // Event listeners for course buttons
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const program = this.getAttribute('data-program');
            console.log('Button clicked, program:', program);
            const programData = courseData[program];
            console.log('Program data:', programData);
            
            if (programData) {
                displayCoursesModal(programData);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                console.log('No program data found for:', program);
            }
        });
    });

    // Close modal functionality
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Function to display courses in modal
    function displayCoursesModal(programData) {
        modalContent.innerHTML = `
            <div class="courses-modal-header">
                <h2>${programData.title}</h2>
                <p>Complete list of courses taken during the program</p>
            </div>
            
            <div class="courses-modal-body">
                ${programData.categories.map(category => `
                    <div class="course-category-modal">
                        <h3>${category.name}</h3>
                        <div class="course-list">
                            ${category.courses.map(course => `
                                <div class="course-item">
                                    <span class="course-name">${course.name}</span>
                                    ${course.link ? 
                                        `<a href="${course.link}" class="course-link" target="_blank">
                                            <i class="fas fa-external-link-alt"></i> View Notes
                                        </a>` : 
                                        `<span class="course-no-link">No notes available</span>`
                                    }
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
});
