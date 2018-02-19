# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Course.delete_all



Course.create!([{ code: 'CSC510',
                  syllabus_id: '1',
                  prerequisites: 'Discrete Maths; Data Structures',
                  course_name: 'Software Engineering',
                  core: true,
                  channel_id: '1' },
                { code: 'CSC515',
                  syllabus_id: '2',
                  prerequisites: 'Software Engineering',
                  course_name: 'Software Security',
                  core: false,
                  channel_id: '2' },
                { code: 'CSC519',
                  syllabus_id: '3',
                  prerequisites: 'Software Engineering',
                  course_name: 'DevOps',
                  core: false,
                  channel_id: '3' },
                { code: 'CSC710',
                  syllabus_id: '4',
                  prerequisites: 'Software Engineering',
                  course_name: 'Software Engineering as a human activity',
                  core: false,
                  channel_id: '4' },
                { code: 'CSC712',
                  syllabus_id: '5',
                  prerequisites: 'Software Engineering',
                  course_name: 'Software Testing and Reliability',
                  core: false,
                  channel_id: '5' },
                { code: 'CSC503',
                  syllabus_id: '6',
                  prerequisites: 'Automata, Grammar and Computability',
                  course_name: 'Computational Applied Logic',
                  core: true,
                  channel_id: '6' },
                { code: 'CSC512',
                  syllabus_id: '7',
                  prerequisites: 'Automata, Grammar; Data Structures',
                  course_name: 'Compiler Construction',
                  core: true,
                  channel_id: '7' },
                { code: 'CSC517',
                  syllabus_id: '8',
                  prerequisites: 'UG Software Engineering',
                  course_name: 'Object Oriented Design and Development',
                  core: false,
                  channel_id: '8' },
                { code: 'CSC520',
                  syllabus_id: '9',
                  prerequisites: 'Discrete Maths; Data Structures',
                  course_name: 'Artificial Intelligence',
                  core: true,
                  channel_id: '9' },
                { code: 'CSC522',
                  syllabus_id: '10',
                  prerequisites: 'Discrete Maths; Data Structures',
                  course_name: 'Automated Learning and Data Analysis',
                  core: false,
                  channel_id: '10' },
                { code: 'CSC540',
                  syllabus_id: '11',
                  prerequisites: 'Data Structures',
                  course_name: 'Database Management concepts and Systems',
                  core: true,
                  channel_id: '11' },
                { code: 'CSC547',
                  syllabus_id: '12',
                  prerequisites: 'Operating Systems; Computer Networks',
                  course_name: 'Cloud Computing Technology',
                  core: false,
                  channel_id: '12' },
                { code: 'CSC554',
                  syllabus_id: '13',
                  prerequisites: 'Data Structures',
                  course_name: 'Human-Computer Interaction',
                  core: false,
                  channel_id: '13' },
                { code: 'CSC750',
                  syllabus_id: '14',
                  prerequisites: 'Database Management concepts and Systems',
                  course_name: 'Service Oriented Computing',
                  core: false,
                  channel_id: '14' },
                { code: 'CSC505',
                  syllabus_id: '15',
                  prerequisites: 'Discrete Maths; Data Structures',
                  course_name: 'Design and Analysis of Algorithms',
                  core: true,
                  channel_id: '15' },
                { code: 'CSC591F',
                  syllabus_id: '16',
                  course_name: 'Foundations of Data Science',
                  core: false,
                  channel_id: '16' },
                { code: 'CSC591S',
                  syllabus_id: '17',
                  course_name: 'Spatial and Temporal Data Mining',
                  core: false,
                  channel_id: '17' },
                { code: 'CSC541',
                  syllabus_id: '18',
                  prerequisites: 'Data Structures',
                  course_name: 'Advanced Data Structures',
                  core: false,
                  channel_id: '18' },
                { code: 'CSC548',
                  syllabus_id: '19',
                  prerequisites: 'UG Operating Systems Principles',
                  course_name: 'Parallel Systems',
                  core: false,
                  channel_id: '19' },
                { code: 'CSC591D',
                  syllabus_id: '20',
                  course_name: 'Data Intensive Computing',
                  core: false,
                  channel_id: '20' },
                { code: 'CSC742',
                  syllabus_id: '21',
                  prerequisites: 'Advanced Data Structures',
                  course_name: 'Database Management Systems',
                  core: false,
                  channel_id: '21' },
                { code: 'CSC724',
                  syllabus_id: '22',
                  prerequisites: 'Operating Systems Principles',
                  course_name: 'Advanced Distributed Systems',
                  core: false,
                  channel_id: '22' },
                { code: 'CSC530',
                  syllabus_id: '23',
                  prerequisites: 'Data Structures; Algorithms',
                  course_name: 'Computational Methods for Molecular Biology',
                  core: false,
                  channel_id: '23' },
                { code: 'CSC555',
                  syllabus_id: '24',
                  course_name: 'Social Computing',
                  core: false,
                  channel_id: '24' },
                { code: 'CSC561',
                  syllabus_id: '25',
                  course_name: 'Principles of Computer Graphics',
                  core: true,
                  channel_id: '25' },
                { code: 'CSC591E',
                  syllabus_id: '26',
                  course_name: 'Educational Data Mining',
                  core: false,
                  channel_id: '26' },
                { code: 'CSC565',
                  syllabus_id: '27',
                  prerequisites: 'Discrete Maths',
                  course_name: 'Graph Theory',
                  core: true,
                  channel_id: '27' },
                { code: 'CSC580',
                  syllabus_id: '28',
                  course_name: 'Numerical Analysis',
                  core: true,
                  channel_id: '28' },
                { code: 'CSC501',
                  syllabus_id: '29',
                  prerequisites: 'UG Operating Systems Principles',
                  course_name: 'Operating Systems Principles',
                  core: true,
                  channel_id: '29' },
                { code: 'CSC506',
                  syllabus_id: '30',
                  course_name: 'Architecture of Parallel Computers',
                  core: true,
                  channel_id: '30' },
                { code: 'CSC570',
                  syllabus_id: '31',
                  course_name: 'Computer Networks',
                  core: true,
                  channel_id: '31' },
                { code: 'CSC591U',
                  syllabus_id: '32',
                  course_name: 'User Experience',
                  core: false,
                  channel_id: '32' },
                { code: 'CSC720',
                  syllabus_id: '33',
                  prerequisites: 'Artificial Intelligence',
                  course_name: 'Artificial Intelligence 2',
                  core: true,
                  channel_id: '33' },
                { code: 'CSC722',
                  syllabus_id: '34',
                  prerequisites: 'Artificial Intelligence',
                  course_name: 'Advanced Topics in Machine Learning',
                  core: false,
                  channel_id: '34' },
                { code: 'CSC568',
                  syllabus_id: '35',
                  prerequisites: 'UG Operating Systems; Communication Networks',
                  course_name: 'Enterprise Storage Architecture',
                  core: false,
                  channel_id: '35' }])


Schedule.delete_all
Schedule.create!([{ syllabus_id: '1',   # make fall
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '2',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '4' },
                  { syllabus_id: '3',   # make spring
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '4',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '5',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '6',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '7',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '8',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '4' },
                  { syllabus_id: '9',
                    semester: 'Spring', # make fall
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '10',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '11',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '3' },
                  { syllabus_id: '12',
                    semester: 'Spring', # make fall
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '13',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '4' },
                  { syllabus_id: '14',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '15',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '16',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '17',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '18',
                    semester: 'Spring', # make fall
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '19',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '20',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '21',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '3' },
                  { syllabus_id: '22',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '4' },
                  { syllabus_id: '23',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '3' },
                  { syllabus_id: '24',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '25',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '26',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '3' },
                  { syllabus_id: '27',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '4' },
                  { syllabus_id: '28',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '3' },
                  { syllabus_id: '29',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '30',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '3' },
                  { syllabus_id: '31',
                    semester: 'Fall', # make spring
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '32',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' },
                  { syllabus_id: '33',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: false,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '34',
                    semester: 'Fall',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: false,
                    ratings: '5' },
                  { syllabus_id: '35',
                    semester: 'Spring',
                    day: 'TU/TH',
                    time: '18:00',
                    project: true,
                    fieldwork: true,
                    ratings: '5' }])


AverageGrade.delete_all
AverageGrade.create!([{ syllabus_id: '1',
                        A: '20',
                        B: '13',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '2',
                        A: '56',
                        B: '15',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '3',
                        A: '27',
                        B: '8',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '4',
                        A: '9',
                        B: '0',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '5',
                        A: '21',
                        B: '4',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '6',
                        A: '14',
                        B: '9',
                        C: '3',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '7',
                        A: '29',
                        B: '11',
                        C: '3',
                        D: '0',
                        Other: '4' },
                      { syllabus_id: '8',
                        A: '77',
                        B: '6',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '9',
                        A: '33',
                        B: '10',
                        C: '2',
                        D: '1',
                        Other: '4' },
                      { syllabus_id: '10',
                        A: '53',
                        B: '24',
                        C: '4',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '11',
                        A: '49',
                        B: '51',
                        C: '4',
                        D: '2',
                        Other: '0' },
                      { syllabus_id: '12',
                        A: '25',
                        B: '4',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '13',
                        A: '32',
                        B: '8',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '14',
                        A: '12',
                        B: '3',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '15',
                        A: '110',
                        B: '73',
                        C: '9',
                        D: '2',
                        Other: '2' },
                      { syllabus_id: '16',
                        A: '57',
                        B: '50',
                        C: '6',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '17',
                        A: '29',
                        B: '2',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '18',
                        A: '35',
                        B: '13',
                        C: '12',
                        D: '4',
                        Other: '1' },
                      { syllabus_id: '19',
                        A: '15',
                        B: '15',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '20',
                        A: '37',
                        B: '5',
                        C: '2',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '21',
                        A: '3',
                        B: '8',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '22',
                        A: '22',
                        B: '5',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '23',
                        A: '6',
                        B: '3',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '24',
                        A: '9',
                        B: '2',
                        C: '2',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '25',
                        A: '59',
                        B: '1',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '26',
                        A: '9',
                        B: '3',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '27',
                        A: '17',
                        B: '3',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '28',
                        A: '16',
                        B: '8',
                        C: '3',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '29',
                        A: '103',
                        B: '33',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '30',
                        A: '4',
                        B: '3',
                        C: '1',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '31',
                        A: '63',
                        B: '0',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '32',
                        A: '39',
                        B: '1',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '33',
                        A: '7',
                        B: '6',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '34',
                        A: '37',
                        B: '0',
                        C: '0',
                        D: '0',
                        Other: '0' },
                      { syllabus_id: '35',
                        A: '11',
                        B: '5',
                        C: '0',
                        D: '0',
                        Other: '0' }])
