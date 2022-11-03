import UserForm from "./UserForm";
const usuarios_caliz = [
  {
    id: "u1",
    name: "Octavio",
    email: "octavio@gmail.com",
  },
  {
    id: "u2",
    name: "Daniel",
    email: "daniel@gmail.com",
  },
  {
    id: "u3",
    name: "Roberto",
    email: "roberto@gmail.com",
  },
];

const Users = () => {
  const usersList = usuarios_caliz.map();
  return (
    <div>
      <UserForm></UserForm>
    </div>
  );
};

export default Users;
