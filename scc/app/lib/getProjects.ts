import fs from 'fs';
import path from 'path';

export interface Project {
  name: string;
  files: string[];
}

export function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), 'public', 'Projects');
  
  // Check if Projects directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  // Read all directories in Projects folder
  const folders = fs.readdirSync(projectsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // For each folder, get all image files
  const projects: Project[] = folders.map(folderName => {
    const folderPath = path.join(projectsDirectory, folderName);
    const files = fs.readdirSync(folderPath)
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/Projects/${folderName}/${file}`);

    return {
      name: folderName,
      files
    };
  }).filter(project => project.files.length > 0); // Only include projects with images

  return projects;
}

export function getRandomProjects(count: number = 3): Project[] {
  const allProjects = getProjects();
  
  // If we have fewer projects than requested, return all
  if (allProjects.length <= count) {
    return allProjects;
  }

  // Shuffle and take first 'count' projects
  const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
