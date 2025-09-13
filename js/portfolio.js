// Portfolio Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Project data for modal content
    const projectData = {
        'lna': {
            title: 'Low Noise Amplifier (LNA) Design',
            subtitle: '2.4 GHz S-Band RF Amplifier',
            date: 'January 10, 2025',
            category: 'Electronics',
            description: `The development of high-performance receiver systems is crucial for modern wireless communication technologies, including Bluetooth, WLAN, and other radio-frequency applications. A key component in these systems is the Low Noise Amplifier (LNA), which is responsible for amplifying weak signals while introducing minimal noise.

This project presents the design and simulation of an LNA operating at 2.4 GHz (S-Band) with a 100 MHz bandwidth. The objective is to enhance the performance of existing commercial LNAs, such as the SST12LN01, by achieving a gain greater than 16 dB and a noise figure below 1.5 dB.

Design Process:
• Silicon-Germanium NPN RF BFP620 transistor selection for superior noise and gain characteristics
• Stability analysis and impedance matching using Smith charts
• Computer simulations in AWR Design Software
• Maximum gain and minimum noise configurations exploration

Performance Results:
• Noise Figure: 1.29 dB (target: <1.5 dB)
• Transducer Gain: 17.05 dB (target: >16 dB)
• Enhanced Bandwidth: 327 MHz
• Successfully surpassed initial target specifications

Applications:
• Wireless communication systems
• IoT devices and Bluetooth applications
• WiFi and satellite communication receivers
• Advanced RF receiver system integration`,
            technologies: ['RF Design', 'AWR Design Software', 'Silicon-Germanium Transistors', 'Impedance Matching', 'Smith Charts', 'Noise Analysis'],
            outcomes: ['LNA design with 1.29 dB noise figure and 17.05 dB gain', 'Enhanced 327 MHz bandwidth performance', 'Commercial LNA performance improvement', 'RF receiver system integration ready'],

        },
        
        'flower-recognition': {
            title: 'Flower Recognition Using Convolutional Neural Network',
            subtitle: 'CNN Implementation for Agricultural Applications',
            date: 'June 02, 2024',
            category: 'Machine Learning',
            description: `This project demonstrates the application of Convolutional Neural Networks (CNN) in the domain of flower recognition, which has significant implications for agriculture, marketing, and botanical research.

Project Overview:
The system was trained to recognize and classify various flower species using deep learning techniques, achieving high accuracy in identification across different lighting conditions and angles.

Technical Implementation:
• CNN Architecture: Custom-designed convolutional layers
• Dataset: 5,000+ flower images across 10 species
• Training: Transfer learning with pre-trained models
• Framework: TensorFlow/Keras implementation
• Data Augmentation: Rotation, scaling, and lighting variations

Key Features:
• Real-time flower identification
• Multi-species classification
• Robust performance under varying conditions
• User-friendly interface for field applications

Applications:
• Agricultural automation
• Botanical research and documentation
• Educational tools for plant identification
• Quality control in flower industry`,
            technologies: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning', 'Data Augmentation'],
            outcomes: ['High-accuracy flower recognition system', 'Robust performance under various conditions', 'Practical agricultural applications', 'Educational value for botany'],

        },
        
        'dual-band-antenna': {
            title: 'Dual-Band Circularly Polarized Annular Ring Patch Antenna',
            subtitle: 'GAGAN Navigation System',
            date: 'May 21, 2024',
            category: 'Antennas',
            description: `This project presents the design, simulation, and performance analysis of a dual-band circularly polarized annular ring patch antenna for GPS-Aided GEO-Augmented Navigation (GAGAN) receivers. The proposed antenna, designed using Ansys HFSS software, operates at the L1 (1575.42 MHz) and L5 (1176.45 MHz) frequencies.

Key Design Features:
• Single coaxial feed for simplified setup and reduced complexity
• Circular polarization to mitigate polarization mismatch issues
• Enhanced gain for improved signal reception and transmission
• Compact design suitable for portable navigation applications

Technical Specifications:
• Frequency Bands: L1 (1575.42 MHz) and L5 (1176.45 MHz)
• Polarization: Circular polarization for optimal signal reception
• Design Software: Ansys HFSS for electromagnetic simulation
• Feed Configuration: Single coaxial feed for dual-band operation

Simulation Results:
• Comprehensive analysis of return loss characteristics
• Radiation pattern evaluation for both frequency bands
• Realized gain and directivity measurements
• Performance validation for GAGAN applications

Applications:
• Aviation navigation systems
• Railway and transportation networks
• Security and surveillance systems
• Telecommunications infrastructure
• Portable navigation devices

The antenna demonstrates effectiveness in meeting GAGAN application requirements, providing a robust solution for various sectors including aviation, railways, security, and telecommunications.`,
            technologies: ['Antenna Design', 'ANSYS HFSS', 'Circular Polarization', 'Dual-band Operation', 'GAGAN Systems', 'Electromagnetic Simulation'],
            outcomes: ['Dual-band antenna design for L1 and L5 frequencies', 'Circular polarization optimization', 'GAGAN navigation system compatibility', 'Portable navigation application ready'],

        },
        
        'heart-attack-prediction': {
            title: 'Machine Learning Models for Heart Attack Prediction',
            subtitle: 'Healthcare Analytics and Risk Assessment',
            date: 'January 16, 2024',
            category: 'Machine Learning, Bioengineering',
            description: `This project focuses on the comprehensive analysis of machine learning models for heart attack prediction, utilizing various analytical techniques to understand dataset structure and characteristics for improved cardiovascular risk assessment.

Project Scope:
The study involved analyzing multiple machine learning algorithms to predict heart attack risk based on various clinical parameters and patient demographics.

Data Analysis:
• Dataset: Clinical parameters from cardiovascular patients
• Features: Age, gender, blood pressure, cholesterol levels, ECG results
• Target: Heart attack risk classification
• Data preprocessing and feature engineering

Machine Learning Models:
• Logistic Regression
• Random Forest
• Support Vector Machines (SVM)
• Neural Networks
• Ensemble methods

Key Findings:
• Feature importance analysis revealed critical risk factors
• Model performance comparison across different algorithms
• Validation of prediction accuracy using medical datasets
• Insights into cardiovascular risk assessment

Applications:
• Early warning systems for cardiovascular health
• Clinical decision support tools
• Preventive healthcare programs
• Medical research and studies`,
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis', 'Healthcare Analytics'],
            outcomes: ['Comprehensive heart attack prediction models', 'Feature importance analysis', 'Model performance comparison', 'Clinical application guidelines'],

        },
        
        'cmos-opamp': {
            title: 'Two-Stage CMOS Operational Amplifier',
            subtitle: '65nm CMOS Technology Optimization',
            date: 'January 07, 2024',
            category: 'Electronics',
            description: `This project focuses on the design, simulation, and optimization of a two-stage CMOS operational amplifier that meets specific performance criteria including a voltage gain greater than 57 dB, a bandwidth exceeding 220 MHz, a phase margin over 55 degrees, and a load capacitance of 1.8 pF.

Design Objectives:
• Voltage Gain: >57 dB for high amplification capability
• Bandwidth: >220 MHz for wide frequency response
• Phase Margin: >55° for stability and transient response
• Load Capacitance: 1.8 pF for practical applications
• Figure of Merit (FOM) optimization

Design Methodology:
• Two-stage CMOS topology for optimal performance
• SPICE simulations for comprehensive analysis
• 65 nm CMOS technology constraints adherence
• Performance optimization under various constraints

Simulation Approach:
• SPICE simulations for performance validation
• Figure of merit calculation and optimization
• Trade-off analysis between gain, bandwidth, and stability
• Technology constraint compliance verification

Key Results:
• Successfully achieved all target performance metrics
• Optimized figure of merit for the design
• 65 nm CMOS technology compliance
• Manufacturing-ready design specifications

Applications:
• High-speed analog signal processing
• Data conversion systems
• Communication interfaces
• Sensor signal conditioning
• Advanced analog integrated circuits

The design successfully demonstrates the capability to achieve high-performance operational amplifier specifications while adhering to modern CMOS technology constraints.`,
            technologies: ['CMOS Design', 'SPICE Simulation', 'Operational Amplifiers', '65 nm Technology', 'Circuit Optimization', 'Figure of Merit Analysis'],
            outcomes: ['High-performance CMOS op-amp meeting all specifications', 'Optimized FOM under 65nm constraints', 'SPICE simulation validated design', 'Manufacturing-ready 65nm CMOS design'],

        },
        
        'wearable-devices': {
            title: 'Wearable Devices for Real-time Labor Monitoring',
            subtitle: 'Preterm Labor Prediction Using Machine Learning',
            date: 'June 18, 2023',
            category: 'Bioengineering',
            description: `Preterm labor, occurring prior to 37 weeks of gestation, is a significant global health issue closely related to neonatal mortality and morbidity. Despite medical advancements, preterm labor statistics have not significantly decreased, partly due to inadequate monitoring techniques.

Research Problem:
Biosignals including electrocardiography (ECG), electromyography (EMG), and electroencephalography (EEG) can provide critical information regarding the health of both mother and infant. However, the lack of accessibility, continuity, and real-time monitoring in current methods renders them insufficient for timely interventions.

Proposed Solution:
• Machine learning-based wearable device for constant, real-time, and precise monitoring
• EMG signal analysis for preterm labor diagnosis
• Electrohysterography (EHG) for uterine electrical signal monitoring
• User-friendly interface for real-time predictions

Technical Implementation:
• Data collection and preprocessing of biosignals
• Machine learning model development for prediction
• Real-time analysis and classification algorithms
• Wearable device integration and validation

Clinical Applications:
• Early detection of preterm labor risk
• Continuous maternal and fetal monitoring
• Improved prenatal care quality
• Reduced neonatal risks and healthcare costs

The study aims to develop a novel, wearable technology for the early detection of preterm labor, potentially transforming prenatal care and significantly reducing neonatal risks associated with preterm births.`,
            technologies: ['Wearable Technology', 'Biosignal Processing', 'Machine Learning', 'EMG Analysis', 'Electrohysterography', 'Real-time Monitoring'],
            outcomes: ['Machine learning-based preterm labor prediction system', 'Wearable device prototype for continuous monitoring', 'Real-time biosignal analysis framework', 'Improved early detection capabilities'],

        },
        
        'bioengineering-ml': {
            title: 'Machine Learning Approaches in Bioengineering',
            subtitle: 'Biosignal Processing Survey',
            date: 'June 11, 2023',
            category: 'Bioengineering',
            description: `This survey paper provides a comprehensive review of recent advances and applications of machine learning approaches in the interdisciplinary field of bioengineering, specifically in the realm of biosignal processing. Biosignals, including electroencephalograms (EEG), electrocardiograms (ECG), and electromyograms (EMG), are inherently complex, presenting significant challenges such as noise, artifacts, variability, and nonlinearity in their processing.

Research Scope:
The paper outlines how machine learning is leveraged for processing, analyzing, classifying, and interpreting biosignals for various applications, such as diagnosis, monitoring, rehabilitation, and brain-computer interfaces.

Key Challenges Addressed:
• Noise and artifact removal from biosignals
• Signal variability and nonlinearity handling
• Real-time processing requirements
• Feature extraction and classification accuracy

Machine Learning Applications:
• EEG signal processing for brain-computer interfaces
• ECG analysis for cardiovascular monitoring
• EMG interpretation for neuromuscular assessment
• Multi-modal biosignal integration

Technical Approaches:
• Supervised learning for pattern recognition
• Unsupervised learning for data exploration
• Deep learning for complex signal analysis
• Real-time processing algorithms

Future Directions:
• Adaptive and personalized systems
• Real-time intelligent biosignal interaction
• Integration with wearable devices
• Enhanced patient outcome prediction

Through this review, we aim to highlight the critical role of machine learning in enabling adaptive, personalized, and intelligent systems that interact with biosignals in real-time, with potential implications for improving patient outcomes in various medical conditions.`,
            technologies: ['Machine Learning', 'Biosignal Processing', 'EEG/ECG/EMG Analysis', 'Deep Learning', 'Healthcare Technology', 'Survey Research'],
            outcomes: ['Comprehensive ML in bioengineering survey', 'Biosignal processing application guidelines', 'Real-time system integration strategies', 'Future research direction roadmap'],

        },
        
        'slot-antenna': {
            title: 'Slot Antenna Physical Properties Analysis',
            subtitle: 'Electromagnetic Properties and Performance Study',
            date: 'February 08, 2023',
            category: 'Antennas',
            description: `This project investigates slot antennas and analyzes how their electromagnetic properties are impacted by various physical characteristics, providing insights into design optimization and performance enhancement.

Research Focus:
The study examines the relationship between slot antenna geometry and electromagnetic performance, including radiation patterns, impedance characteristics, and frequency response.

Physical Properties Analyzed:
• Slot dimensions and geometry
• Substrate material properties
• Feed line configuration
• Ground plane characteristics
• Slot shape variations

Electromagnetic Properties:
• Radiation pattern analysis
• Input impedance characteristics
• Bandwidth optimization
• Frequency response
• Polarization properties

Design Parameters:
• Slot length and width
• Substrate thickness and permittivity
• Feed line impedance matching
• Ground plane size and shape
• Slot orientation and positioning

Applications:
• Wireless communication systems
• Radar applications
• Satellite communication
• Mobile devices
• IoT applications

Simulation and Analysis:
• Electromagnetic simulation using advanced tools
• Parameter optimization for performance
• Comparative analysis of different configurations
• Performance validation and testing`,
            technologies: ['Antenna Design', 'Electromagnetic Theory', 'Simulation Tools', 'Parameter Optimization', 'Performance Analysis', 'Slot Antennas'],
            outcomes: ['Comprehensive slot antenna analysis', 'Design optimization guidelines', 'Performance enhancement strategies', 'Practical implementation recommendations'],

        },
        
        'graph-theory': {
            title: 'Graph Theory Application in City Distance Calculation',
            subtitle: 'Route Optimization Using Adjacency Matrices',
            date: 'December 19, 2022',
            category: 'Algorithms',
            description: `This project presents the implementation of a program designed to optimize travel routes between seven major cities using graph theory and adjacency matrices. By prompting the user to input the number of cities and an adjacency matrix representing the distances between them, the program calculates the shortest paths from a selected starting city to all other cities.

Program Implementation:
• Terminal-based user interface for data input
• Adjacency matrix representation of city distances
• User selection of starting city and destination
• Calculation of minimum distances and corresponding routes

Technical Features:
• Graph theory implementation using adjacency matrices
• Shortest path algorithm implementation
• User-friendly terminal interface
• Efficient data structure utilization

Key Functionality:
• City network modeling with graph representation
• Distance matrix input and validation
• Shortest path calculation from source to all destinations
• Route optimization and display

Applications:
• Urban transportation planning
• Logistics and delivery optimization
• Network analysis and routing
• Educational demonstration of graph algorithms
• Practical implementation of data structures

This work exemplifies the practical application of data structures and programming concepts in solving real-world problems related to urban network optimization, providing a foundation for understanding graph theory applications in transportation and logistics.`,
            technologies: ['Graph Theory', 'Algorithms', 'Data Structures', 'C Programming', 'Adjacency Matrices', 'Route Optimization'],
            outcomes: ['Terminal-based route optimization program', 'Graph theory practical implementation', 'Data structure application demonstration', 'Educational value for algorithm learning'],

        },
        
        'piezoelectric': {
            title: 'Piezoelectric Materials Study',
            subtitle: 'Energy Harvesting and Storage Applications',
            date: 'May 23, 2021',
            category: 'Electronics',
            description: `This comprehensive study explores piezoelectric materials, investigating their fundamental properties, applications across various industries, and potential for future advancements in energy harvesting and storage technologies.

Research Scope:
The project covers the complete spectrum of piezoelectric materials, from basic principles to advanced applications, providing a foundation for future research and development.

Fundamental Properties:
• Piezoelectric effect and mechanisms
• Material composition and structure
• Electrical and mechanical properties
• Frequency response characteristics
• Temperature and environmental effects

Material Types Studied:
• Natural piezoelectric materials (quartz, tourmaline)
• Synthetic ceramics (PZT, BaTiO3)
• Polymer-based materials (PVDF)
• Composite materials and hybrids
• Novel materials and developments

Applications Explored:
• Energy harvesting from vibrations
• Sensors and transducers
• Actuators and motors
• Medical imaging devices
• Consumer electronics

Energy Harvesting Focus:
• Vibration energy conversion
• Mechanical stress utilization
• Power generation efficiency
• Storage and management systems
• Integration with IoT devices

Future Prospects:
• Advanced material development
• Improved energy conversion efficiency
• Integration with renewable energy systems
• Smart material applications
• Sustainable technology solutions`,
            technologies: ['Materials Science', 'Piezoelectric Theory', 'Energy Harvesting', 'Material Analysis', 'Electronics', 'Renewable Energy'],
            outcomes: ['Comprehensive piezoelectric materials study', 'Energy harvesting applications', 'Future technology roadmap', 'Sustainable energy solutions'],

        },
        

        
        'brain-monitoring': {
            title: 'Monitoring of Brain with Microwave Imaging',
            subtitle: 'Cerebral Hemorrhage Detection System',
            date: 'June 21, 2025',
            category: 'Antennas, Bioengineering',
            description: `This senior design project details the design of a portable, low-cost microwave imaging system for the continuous monitoring of cerebral hemorrhages, such as those caused by trauma or stroke.

Project Overview:
The study is conducted entirely within a simulation environment, utilizing a 16-dipole antenna array designed to operate at 900 MHz. The core of the project involves an image reconstruction pipeline based on the Truncated Singular Value Decomposition (TSVD) algorithm, which processes simulated S-parameter data to visualize lesions inside a realistic head phantom.

Key Components:
• 16-element circular dipole antenna array operating at 900 MHz
• Dielectric matching medium for improved signal penetration
• TSVD-based image reconstruction algorithm
• Multi-stage post-processing filter for noise reduction

Technical Features:
• Imaging Technique: Differential Microwave Imaging (DMI)
• Antenna Array: 16-element circular dipole array at 900 MHz
• Reconstruction Algorithm: TSVD based on inverse scattering theory
• Post-Processing: Multi-stage noise and artifact suppression filter

Methodology:
• Designed circular array of sixteen dipole antennas using ANSYS HFSS
• Modeled dielectric matching medium to improve signal penetration
• Generated differential S-parameter datasets for various clinical scenarios
• Implemented TSVD method with Born approximation for stable solution
• Applied four-stage post-processing filter for enhanced image clarity

Key Findings:
• Lossless Case (σ=0): Successfully localized all hemorrhage scenarios with high precision
• Realistic Case (σ=0.9 S/m): Signal attenuated by over 99%, limiting performance
• Performance Limitation: Tissue conductivity identified as primary obstacle for clinical use

Applications:
• Continuous, non-invasive bedside monitoring of brain hemorrhages
• Portable and low-cost diagnostic tool supplementing CT and MRI
• Tracking progression of hematomas over time for clinical decisions`,
            technologies: ['Microwave Imaging', 'Antenna Design', 'Bioengineering', 'TSVD Algorithm', 'Inverse Scattering Theory', 'ANSYS HFSS', 'Python'],
            outcomes: ['Validated simulation framework for differential microwave imaging', 'Complete image reconstruction pipeline using TSVD', 'Identification of tissue conductivity as main limiting factor', 'Foundation for future hardware prototypes and advanced algorithms']
        },
        
        'phased-array-aviation': {
            title: 'Design and Implementation of a Phased Array Antenna for Aviation',
            subtitle: '2×2 Array with Beam Steering',
            date: 'June 15, 2025',
            category: 'Antennas',
            description: `This project covers the complete design, simulation, fabrication, and experimental validation of a 2×2 phased array antenna system intended for aviation applications.

Project Overview:
Operating at the 2.4 GHz ISM band, the system is built from microstrip patch antennas and is designed for electronic beam steering. A key innovation of the project is the use of a custom-designed, passive interdigital capacitor (IDC) as a phase-shifting element. Experimental tests successfully demonstrated beam steering capability with the fabricated system.

Key Components:
• 2×2 microstrip patch antenna array for 2.4 GHz resonance
• Custom-designed interdigital capacitor (IDC) as passive phase shifter
• In-house PCB manufacturing using CNC engraver
• Experimental validation using VNA and SDR-based measurements

Technical Features:
• Antenna Type: 2×2 planar phased array of microstrip patch antennas
• Beam Steering: Passive electronic steering achieved with custom IDC
• Fabrication: In-house PCB manufacturing using CNC engraver
• Testing: Experimental validation using VNA and SDR-based far-field measurements

Methodology:
• Designed 2×2 microstrip patch antenna array using analytical equations and HFSS
• Designed and optimized IDC in MATLAB's RF PCB Toolbox for ~30° phase shift
• Fabricated components on FR4 substrate using CNC engraver and chemical etching
• Characterized components by measuring S-parameters, impedance, and phase response
• Conducted far-field radiation pattern tests using SDRs for beam steering validation

Key Findings:
• Performance Gain: 2×2 array achieved 8.97 dB peak gain vs. 3.1 dB for single element
• Phase Shifter Accuracy: Fabricated IDC produced 27.7° phase shift at 2.4 GHz
• Experimental Validation: Confirmed beam steering from 0° to 30° as predicted

Applications:
• Modern aviation communication, navigation, and radar systems
• Conformal antennas integrated into aircraft surfaces
• Reliable, high-speed satellite and ground communication links for aircraft`,
            technologies: ['Phased Array Antennas', 'Beam Steering', 'Interdigital Capacitors', 'Aeronautical Engineering', 'RF Design', 'ANSYS HFSS', 'MATLAB', 'SDR', 'VNA'],
            outcomes: ['Fully fabricated and experimentally validated 2×2 phased array system', 'Successful demonstration of IDC as effective phase-shifting element', 'Strong correlation between models, simulations, and measurements', 'Modular framework for affordable phased array system design']
        }
    };

    // Portfolio filtering functionality
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
    const projectCards = document.querySelectorAll('.portfolio-grid .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    // Check if the project belongs to the selected category
                    const categories = card.getAttribute('data-category');
                    if (categories && categories.includes(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');
    const viewButtons = document.querySelectorAll('.view-project-btn');

    // Open modal when project button is clicked
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                displayProjectModal(project);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Function to display project details in modal
    function displayProjectModal(project) {
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <p class="modal-subtitle">${project.subtitle}</p>
                <div class="modal-meta">
                    <span class="modal-date"><i class="fas fa-calendar"></i> ${project.date}</span>
                    <span class="modal-category"><i class="fas fa-tag"></i> ${project.category}</span>
                </div>
            </div>
            
            <div class="modal-body">
                <div class="modal-description">
                    <h3>Project Description</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="modal-technologies">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-outcomes">
                    <h3>Key Outcomes</h3>
                    <ul>
                        ${project.outcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                </div>
                

            </div>
        `;
    }

    // Add fade-in animation for filtered projects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
    `;
    document.head.appendChild(style);
});
