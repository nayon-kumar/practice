"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
  const { data, isPending } = useSession();
  const user = data?.user.name;
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
          <div>
            {isPending ? (
              <p>Loading...</p>
            ) : user ? (
              <div className="flex items-center gap-4">
                <p>{user}</p>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            ) : (
              <Link href="/auth/signin">Sign In</Link>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
