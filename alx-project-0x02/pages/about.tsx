import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function About() {
  return (
    <div style={{ padding: "20px" }}>
        <Header/>
      <h1>About Page</h1>
      <p>Learn more about us here.</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>

        <Button 
          label="Small Button" 
          size="small" 
          shape="rounded-sm"
        />

        <Button 
          label="Medium Button" 
          size="medium" 
          shape="rounded-md"
        />

        <Button 
          label="Large Button" 
          size="large" 
          shape="rounded-full"
        />

      </div>
    </div>
  );
}
