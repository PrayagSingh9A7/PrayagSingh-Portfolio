type SectionHeaderProps = {
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
};

export function SectionHeader({ kicker, title, children }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-kicker">{kicker}</p>
      <div>
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}
