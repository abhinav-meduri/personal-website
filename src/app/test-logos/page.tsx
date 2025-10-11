export default function TestLogos() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Logo Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Systrends Logo:</h2>
          <img src="/logos/systrends.png" alt="Systrends" width="100" height="100" />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">EcoLong Logo:</h2>
          <img src="/logos/ecolong.png" alt="EcoLong" width="100" height="100" />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Duke Logo:</h2>
          <img src="/logos/duke.png" alt="Duke" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}

