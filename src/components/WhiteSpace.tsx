interface WhiteSpaceProps {
  width?: string;
  height?: string;
}

export default function WhiteSpace({ width = "100%", height = "100%" }: WhiteSpaceProps) {
  return <div style={{ width: width, height: height }} />;
}
