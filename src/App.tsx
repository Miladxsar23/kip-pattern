/**
 * 🛡️ KIP PATTERN - DEMO APPLICATION
 *
 * This App demonstrates all three levels of the KIP pattern:
 * - Level 1: Button (Simple)
 * - Level 2: LoginForm (Medium)
 * - Level 3: DataGrid (Complex)
 *
 * Notice how clean the imports are - we only import from index.ts files.
 * All the internal complexity is hidden behind the component's public API.
 */

import { useState } from "react";
import { Button } from "./components/Button";
import type { ColumnDef } from "./components/DataGrid";
import { DataGrid } from "./components/DataGrid";
import type { LoginFormData } from "./components/LoginForm";
import { LoginForm } from "./components/LoginForm";

// Sample data for DataGrid
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Developer",
    status: "active",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    role: "Designer",
    status: "inactive",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    role: "Developer",
    status: "active",
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve@example.com",
    role: "Manager",
    status: "active",
  },
];

const userColumns: ColumnDef<User>[] = [
  {
    id: "name",
    header: "Name",
    accessor: (row) => row.name,
    width: "25%",
  },
  {
    id: "email",
    header: "Email",
    accessor: (row) => row.email,
    width: "30%",
  },
  {
    id: "role",
    header: "Role",
    accessor: (row) => row.role,
    width: "20%",
  },
  {
    id: "status",
    header: "Status",
    accessor: (row) => (
      <span
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.75rem",
          fontWeight: 600,
          backgroundColor: row.status === "active" ? "#10b981" : "#6b7280",
          color: "#fff",
        }}
      >
        {row.status}
      </span>
    ),
    width: "25%",
  },
];

function App() {
  const [message, setMessage] = useState<string>("");

  const handleLoginSuccess = (data: LoginFormData) => {
    setMessage(
      `✅ Login successful! Email: ${data.email}, Remember: ${data.rememberMe}`,
    );
  };

  const handleLoginError = (error: string) => {
    setMessage(`❌ ${error}`);
  };

  const handleRowClick = (user: User) => {
    setMessage(`👤 Clicked on user: ${user.name} (${user.email})`);
  };

  return (
    <div>
      <header>
        <h1>🛡️ KIP Pattern</h1>
        <p style={{ fontSize: "1.2rem", color: "#888" }}>
          Keep It Private - A React Architectural Pattern
        </p>
      </header>

      {/* Introduction */}
      <section className="section">
        <h2>What is KIP?</h2>
        <p>
          KIP (Keep It Private) is an architectural pattern that enforces strict
          encapsulation in component-based applications. Files starting with{" "}
          <code>_</code> are private to their folder, and <code>index.ts</code>{" "}
          acts as the only public API.
        </p>
        <p>
          <strong>The Golden Rules:</strong>
        </p>
        <ul
          style={{ textAlign: "left", maxWidth: "600px", margin: "1rem auto" }}
        >
          <li>
            <code>_</code> means PRIVATE - never import these files from outside
            their folder
          </li>
          <li>
            <code>index.ts</code> is THE GATE - the only public API for the
            component
          </li>
          <li>Components scale progressively - only use the files you need</li>
        </ul>
      </section>

      {/* Level 1: Button */}
      <section className="section">
        <h2>Level 1: Simple Component</h2>
        <h3>Button</h3>
        <p>
          A simple component with just <code>_type.ts</code>,{" "}
          <code>_component.tsx</code>, and <code>index.ts</code>
        </p>
        <div className="demo-container">
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              variant="primary"
              onClick={() => setMessage("Primary button clicked!")}
            >
              Primary
            </Button>
            <Button
              variant="secondary"
              onClick={() => setMessage("Secondary button clicked!")}
            >
              Secondary
            </Button>
            <Button
              variant="danger"
              onClick={() => setMessage("Danger button clicked!")}
            >
              Danger
            </Button>
            <Button
              variant="ghost"
              onClick={() => setMessage("Ghost button clicked!")}
            >
              Ghost
            </Button>
          </div>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>
        <pre
          style={{
            marginTop: "1rem",
            textAlign: "left",
            maxWidth: "600px",
            margin: "1rem auto",
          }}
        >
          {`📂 Button/
 ├── _type.ts       # ButtonProps, variants
 ├── _component.tsx # UI implementation
 └── index.ts       # Public API`}
        </pre>
      </section>

      {/* Level 2: LoginForm */}
      <section className="section">
        <h2>Level 2: Medium Component</h2>
        <h3>LoginForm</h3>
        <p>
          A medium-complexity component with hooks and utilities:{" "}
          <code>_hook.ts</code>, <code>_util.ts</code>
        </p>
        <p style={{ fontSize: "0.875rem", color: "#888" }}>
          Try: demo@example.com / password
        </p>
        <div className="demo-container">
          <LoginForm
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>
        <pre
          style={{
            marginTop: "1rem",
            textAlign: "left",
            maxWidth: "600px",
            margin: "1rem auto",
          }}
        >
          {`📂 LoginForm/
 ├── _type.ts       # Form types
 ├── _util.ts       # Validation helpers
 ├── _hook.ts       # useLoginForm logic
 ├── _component.tsx # UI
 └── index.ts       # Public API`}
        </pre>
      </section>

      {/* Level 3: DataGrid */}
      <section className="section">
        <h2>Level 3: Complex Component</h2>
        <h3>DataGrid</h3>
        <p>
          A complex component with state management, sub-components, and
          utilities: <code>_store.ts</code>, <code>_slots.tsx</code>
        </p>
        <div className="demo-container">
          <DataGrid
            data={sampleUsers}
            columns={userColumns}
            sortable={true}
            filterable={true}
            onRowClick={handleRowClick}
          />
        </div>
        <pre
          style={{
            marginTop: "1rem",
            textAlign: "left",
            maxWidth: "600px",
            margin: "1rem auto",
          }}
        >
          {`📂 DataGrid/
 ├── _type.ts       # Complex types
 ├── _util.ts       # Data transformers
 ├── _store.ts      # Zustand store
 ├── _hook.ts       # Business logic
 ├── _slots.tsx     # Sub-components
 ├── _component.tsx # Main wrapper
 └── index.ts       # Public API`}
        </pre>
      </section>

      {/* Message Display */}
      {message && (
        <section className="section" style={{ backgroundColor: "#2a2a2a" }}>
          <h3>Event Log</h3>
          <p>{message}</p>
        </section>
      )}
    </div>
  );
}

export default App;
