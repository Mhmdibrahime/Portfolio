import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#08090a",
          color: "#f5f5f0",
          fontFamily: "Inter, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#5a5a5a",
              marginBottom: "1.5rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            PAGE NOT
            <br />
            <span style={{ color: "#a8ff3e" }}>FOUND</span>
          </h1>
          <p style={{ color: "#a1a1a1", marginBottom: "2.5rem" }}>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              backgroundColor: "#a8ff3e",
              color: "#08090a",
              borderRadius: "0.75rem",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
