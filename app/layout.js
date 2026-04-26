export const metadata = {
  title: "NOEMGROUP",
  description: "Maritime Chartering, Cargo Movement & Marine Fuel Strategy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#071426", color: "#e5e7eb" }}>
        {children}
      </body>
    </html>
  );
}
