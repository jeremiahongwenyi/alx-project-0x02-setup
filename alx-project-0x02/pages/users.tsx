import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1>Users Page</h1>
      <p>This is where users will appear in the future.</p>

      <div style={{ marginTop: "20px" }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

// Fetch users at build time
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return {
      props: { users },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: { users: [] },
    };
  }
}
