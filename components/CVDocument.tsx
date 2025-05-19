import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { experiences, education, skills, achievements, Experience, Education, Skills } from '../pages/cv';

// Register custom fonts with more weights for better typography
Font.register({
  family: 'Poppins',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf', fontWeight: 'normal' },
    { src: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf', fontWeight: 'bold' },
    { src: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlEA.ttf', fontWeight: 600 }
  ]
});

// Create styles with dark mode colors matching the website
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Poppins',
    backgroundColor: '#0f172a' // dark:bg-slate-900
  },
  header: {
    marginBottom: 30,
    borderBottom: '2 solid #4f46e5',
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 32,
    background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff'
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#94a3b8' // dark:text-gray-400
  },
  section: {
    marginBottom: 25,
    position: 'relative'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    padding: '5 10',
    background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  experienceCard: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#1e293b', // dark:bg-gray-800
    borderRadius: 6,
    borderLeft: '3 solid #4f46e5'
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 3
  },
  company: {
    fontSize: 14,
    color: '#818cf8',
    marginBottom: 5
  },
  period: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 8
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3
  },
  bullet: {
    width: 10,
    fontSize: 12,
    color: '#10b981' // text-emerald-500
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    color: '#e2e8f0' // dark:text-gray-200
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  skillTag: {
    padding: '4 8',
    backgroundColor: '#1e293b',
    borderRadius: 4,
    fontSize: 10,
    color: '#818cf8',
    borderColor: '#4f46e5',
    borderWidth: 1
  },
  educationCard: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#1e293b',
    borderRadius: 6
  },
  gradeList: {
    marginLeft: 15
  },
  grade: {
    fontSize: 12,
    color: '#e2e8f0',
    marginBottom: 3
  },
  achievementsList: {
    gap: 5
  }
});

// Updated PDF Document component with proper types
export const CVDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tristan Hill</Text>
        <Text style={styles.headerSubtitle}>dev@hill.golf</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experiences.map((exp: Experience) => (
          <View key={exp.id} style={styles.experienceCard}>
            <Text style={styles.roleTitle}>{exp.role}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.period}>{exp.period}</Text>
            <View style={styles.achievementsList}>
              {exp.highlights.map((highlight: string, index: number) => (
                <View key={index} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
            </View>
            <View style={[styles.skillsGrid, { marginTop: 8 }]}>
              {exp.tech.map((tech: string) => (
                <Text key={tech} style={styles.skillTag}>{tech}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {skills.technical.map((skill: { name: string; level: number }) => (
            <Text key={skill.name} style={styles.skillTag}>
              {skill.name} ({skill.level}%)
            </Text>
          ))}
        </View>
        <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Tools & Technologies</Text>
        <View style={styles.skillsGrid}>
          {skills.tools.map((skill: { name: string; level: number }) => (
            <Text key={skill.name} style={styles.skillTag}>
              {skill.name} ({skill.level}%)
            </Text>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu: Education, index: number) => (
          <View key={index} style={styles.educationCard}>
            <Text style={styles.roleTitle}>{edu.school}</Text>
            <Text style={styles.period}>{edu.period}</Text>
            <Text style={[styles.company, { marginTop: 10 }]}>{edu.degree}</Text>
            <View style={styles.gradeList}>
              {edu.subjects.map((subject: string, i: number) => (
                <Text key={i} style={styles.grade}>{subject}</Text>
              ))}
            </View>
            {edu.achievements && (
              <>
                <Text style={[styles.company, { marginTop: 10 }]}>Achievements</Text>
                <View style={styles.gradeList}>
                  {edu.achievements.map((achievement: string, i: number) => (
                    <Text key={i} style={styles.grade}>{achievement}</Text>
                  ))}
                </View>
              </>
            )}
          </View>
        ))}
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Achievements</Text>
        <View style={styles.achievementsList}>
          {achievements.map((achievement: string, index: number) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{achievement}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);