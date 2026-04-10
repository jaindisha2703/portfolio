interface TagLabelProps {
  label: string;
}

export function TagLabel({ label }: TagLabelProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#034F46",
        background: "rgba(3,79,70,0.10)",
        borderRadius: "100px",
        padding: "4px 14px",
        marginBottom: "20px",
      }}
    >
      {label}
    </span>
  );
}
