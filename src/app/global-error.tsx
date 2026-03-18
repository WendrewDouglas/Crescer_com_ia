"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Algo deu errado</h2>
          <p>Ocorreu um erro inesperado.</p>
          <button onClick={() => reset()} style={{ marginTop: "1rem", cursor: "pointer" }}>
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
