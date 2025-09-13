# Content Update Guide

## How to Update Website Content

Your website now supports dynamic content updates through Markdown files! This means you can change the content without touching the HTML code.

## 📁 File Structure

```
content/
├── academics.md          # Academics page content
├── work-experience.md    # Work experience content
├── skills.md            # Skills page content
├── portfolio.md         # Portfolio content
├── writing.md           # Writing page content
├── photography.md       # Photography content
└── contact.md           # Contact page content
```

## ✏️ How It Works

1. **Edit Markdown Files**: Make changes to any `.md` file in the `content/` folder
2. **Automatic Updates**: The website automatically loads and displays the new content
3. **No HTML Changes**: You never need to edit HTML files for content updates

## 🎯 Example: Updating Academics Page

### Current Markdown Structure in `content/academics.md`:

```markdown
# Academic Background

## Introduction
I am a graduate student pursuing an M.Sc. in Waves and Devices...

## Research Projects

### Microwave Imaging for Medical Applications
Research project focusing on continuous monitoring...

**Technologies**: Microwave Imaging, Machine Learning, Python, Neural Networks

### Phased Array Antennas for Aviation
Design and production of phased array antennas...

**Technologies**: Phased Array Antennas, PCB Design, KiCad, Aviation Systems
```

### What Gets Updated:

- **Introduction**: The main description at the top
- **Research Projects**: Project titles, descriptions, and technology tags
- **Academic Achievements**: List of achievements
- **Research Interests**: List of research areas
- **Academic Skills**: List of skills

## 🔄 Real-Time Updates

When you edit a Markdown file:

1. **Save the file** with your changes
2. **Refresh the webpage** in your browser
3. **Content updates automatically** without any other steps

## 📝 Markdown Formatting Rules

### Headers (for section identification):
- `# Main Title` - Page title
- `## Section Title` - Major sections
- `### Subsection Title` - Subsections (like project names)

### Lists:
- `- Item` - Creates bullet points
- `**Bold Text**` - Creates bold text
- `**Technologies**:` - Special format for project technology tags

### Project Format:
```markdown
### Project Name
Project description here...

**Technologies**: Tech1, Tech2, Tech3, Tech4
```

## 🚀 Benefits

✅ **Easy Content Management**: Update content without technical knowledge  
✅ **Consistent Formatting**: Markdown ensures proper structure  
✅ **Version Control**: Track content changes in Git  
✅ **No HTML Knowledge Required**: Pure content editing  
✅ **Automatic Updates**: Changes appear immediately  

## 🔧 Technical Details

- **Content Loader**: JavaScript automatically reads Markdown files
- **Dynamic Updates**: Content is parsed and inserted into HTML
- **Fallback System**: If Markdown fails, static content is shown
- **Responsive Design**: All content automatically adapts to different screen sizes

## 📱 What You Can Update

### Academics Page:
- Introduction text
- Research project descriptions
- Project technology tags
- Academic achievements
- Research interests
- Academic skills

### Other Pages:
- Work experience details
- Skills and proficiency levels
- Portfolio project information
- Writing articles and publications
- Photography descriptions
- Contact information

## 💡 Tips for Best Results

1. **Keep Structure**: Maintain the header hierarchy (`#`, `##`, `###`)
2. **Use Lists**: Format achievements, skills, and interests as bullet points
3. **Technology Tags**: Always use `**Technologies**:` format for projects
4. **Save and Refresh**: Save Markdown file, then refresh browser
5. **Check Formatting**: Ensure proper spacing and formatting

## 🆘 Troubleshooting

**Content not updating?**
- Check that you saved the Markdown file
- Refresh the browser page
- Check browser console for errors
- Verify file paths are correct

**Formatting issues?**
- Ensure proper Markdown syntax
- Check for missing headers
- Verify list formatting

**Page not loading?**
- Check that all required files exist
- Verify JavaScript is enabled
- Check file permissions

---

**Happy Content Editing! 🎉**

Your website is now a dynamic, easily-updatable platform where you control the content through simple Markdown files.
