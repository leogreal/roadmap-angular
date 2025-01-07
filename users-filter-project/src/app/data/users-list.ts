import { IUser } from "../interfaces/user/user.interface";

export const usersList: IUser[] = [
  {
    name: "Alice Silva",
    email: "alice.silva@example.com",
    password: "senha123",
    age: 28,
    address: {
      street: "Rua das Flores",
      number: 123,
      city: "São Paulo",
      state: "SP",
      country: "Brasil"
    },
    phone: "+55 11 91234-5678",
    active: true,
    role: "Administrator",
    registrationDate: "2023-01-15T10:30:00",
    status: {
      online: true,
      verified: true,
      activeSubscription: true,
      lastAccess: "2025-01-05T22:15:00"
    }
  },
  {
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    password: "carlos2023",
    age: 35,
    address: {
      street: "Avenida Paulista",
      number: 456,
      city: "São Paulo",
      state: "SP",
      country: "Brasil"
    },
    phone: "+55 11 99876-5432",
    active: false,
    role: "User",
    registrationDate: "2024-05-10T09:00:00",
    status: {
      online: false,
      verified: false,
      activeSubscription: false,
      lastAccess: "2024-12-30T14:50:00"
    }
  },
  {
    name: "Beatriz Costa",
    email: "beatriz.costa@example.com",
    password: "b12345",
    age: 22,
    address: {
      street: "Rua dos Pinheiros",
      number: 789,
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil"
    },
    phone: "+55 21 98765-4321",
    active: true,
    role: "Moderator",
    registrationDate: "2024-03-01T16:45:00",
    status: {
      online: true,
      verified: true,
      activeSubscription: true,
      lastAccess: "2025-01-06T08:00:00"
    }
  },
  {
    name: "Daniel Souza",
    email: "daniel.souza@example.com",
    password: "daniel@123",
    age: 30,
    address: {
      street: "Praça da Liberdade",
      number: 111,
      city: "Belo Horizonte",
      state: "MG",
      country: "Brasil"
    },
    phone: "+55 31 93456-7890",
    active: true,
    role: "User",
    registrationDate: "2023-09-20T12:00:00",
    status: {
      online: false,
      verified: true,
      activeSubscription: false,
      lastAccess: "2025-01-03T10:00:00"
    }
  },
  {
    name: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    password: "fernanda2025",
    age: 27,
    address: {
      street: "Rua das Palmeiras",
      number: 222,
      city: "Curitiba",
      state: "PR",
      country: "Brasil"
    },
    phone: "+55 41 94321-0987",
    active: false,
    role: "User",
    registrationDate: "2024-11-15T19:30:00",
    status: {
      online: false,
      verified: false,
      activeSubscription: false,
      lastAccess: "2024-12-25T23:59:00"
    }
  }
];
