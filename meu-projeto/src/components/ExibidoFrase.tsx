interface ExibidorFraseProps {
  curtidas: number;
}

export function ExibidorFrase({ curtidas }: ExibidorFraseProps) {
  return (
    <div>
      {curtidas > 5 && <p>TECINFO 2026 🔥</p>}
    </div>
  );
}