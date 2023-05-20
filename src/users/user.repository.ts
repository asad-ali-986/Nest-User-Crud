import { readFile, writeFile} from 'fs/promises'
export class UserRepository {
    async findOne (id: string) {
        const data = await readFile('message.json', 'utf8')
        const users = JSON.parse(data);
        return users[id];
    }

    async findAll () {
        const data = await readFile('message.json', 'utf8')
        const users = JSON.parse(data);
        return users ;
        
    }

    async create (user: any) {
        const data = await readFile('message.json', 'utf8')
        const users = JSON.parse(data);

        const id = Math.floor(Math.random()*999);
        users[id] = {id, user};
        await writeFile('message.json', JSON.stringify(users));
    }
}