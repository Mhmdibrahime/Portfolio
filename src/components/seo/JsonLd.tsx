export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Ibrahim",
    url: "https://www.mohamed-ibrahim.online",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer specializing in backend architecture and full-stack development.",
    email: "moibrahime697@gmail.com",
    sameAs: ["https://github.com/Mhmdibrahime"],
    knowsAbout: [
      "ASP.NET Core",
      "C#",
      "React",
      "Full Stack Development",
      "Backend Engineering",
      "REST APIs",
      "SQL Server",
      "Azure",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohamed Ibrahim — Software Engineer",
    url: "https://www.mohamed-ibrahim.online",
    author: { "@type": "Person", name: "Mohamed Ibrahim" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
