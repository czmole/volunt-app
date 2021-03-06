import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { UserInstance } from './../sqlz/models/user'

export function create(appUser: UserInstance): Promise<any> {
  return db.User
    .create(appUser).then((user: any) => {
      return user.addTechnologies(appUser.Technology).then(() => {
        return user
      })
    })
}

export function findAll(): Promise<any> {
  return db.User
    .findAll({ include: [db.Technology] })
}

export function find(id: string): Promise<any> {
  return db.User
    .findById(id, {include: [{
      model: db.Technology
    }]})
}

export function login(appUser: UserInstance): Promise<any> {
  return db.User
    .findOne({
      where: {
        email: appUser.email,
        pwd: appUser.pwd
      }
    })
}
