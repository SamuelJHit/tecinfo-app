interface BotaoCurtirProps {
    onCurtir: () => void;
    curtidas: number;
}

export function BotaoCurtir({ onCurtir, curtidas }: BotaoCurtirProps) {
  return (
    <div>
      <p>Curtidas atuais: {curtidas}</p>
      <button onClick={onCurtir}>
        Curtir 👍
      </button>
    </div>
  )
}