import { Injectable } from '@nestjs/common';
let users: any = [
  { id: '40-5512', name: 'john doe', age: 23, major: 'cs' },
  { id: '40-5512', name: 'john doe', age: 23, major: 'cs' },
  { id: '40-5512', name: 'john doe', age: 23, major: 'cs' },
];

@Injectable()
export class AppService {
  getUser(): any {
    return users[0];
  }

  getUsers(): any {
    return users;
  }

  deleteUser(): any {
    users = users.filter((_, index) => index !== 0);
    return { message: 'user deleted successfully' };
  }

  addUser(requestBody: any): any {
    users.push({
      id: requestBody.id,
      name: requestBody.name,
      age: requestBody.age,
      major: requestBody.major,
    });
    return { message: 'user created successfully' };
  }

  updateUser(requestBody: any): any {
    users[0] = {
      id: requestBody.id,
      name: requestBody.name,
      age: requestBody.age,
      major: requestBody.major,
    };
    return { message: 'user created successfully' };
  }

  getHello(): any {
    return { message: 'HELLO WORLD' };
  }

  postHello(requestBody: any, query: any): any {
    return { ...requestBody, query };
  }

  patchHello(query: any): any {
    return { ...query };
  }

  deleteHello(): any {
    return { message: 'DELETED SUCCESSFULLY' };
  }
}
