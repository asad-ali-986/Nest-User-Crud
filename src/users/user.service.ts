import { UserRepository} from './user.repository'
export class UserService {
    userRepo: UserRepository;
     
    constructor() {
       this.userRepo = new UserRepository(); 
    }

    findOne (id: string) {
       return this.userRepo.findOne(id)
    }

    findAll () {
        return this.userRepo.findAll();
    }

    create (user: any) {
        return this.userRepo.create(user);
    }
}