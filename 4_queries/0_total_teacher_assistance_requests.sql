SELECT count(assistance_requests.*) as total_assistance, teachers.name as name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY name;