import { promises as fs } from 'fs';


export default async function loadProjects() {
    const file = await fs.readFile(process.cwd() + '/src/app/components/projects.json', 'utf8');
    const data = JSON.parse(file);
    return data;
}