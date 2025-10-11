import CompanyLogo from '@/components/CompanyLogo';

export default function LogoTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Company Logo Test</h1>
      
      <div className="space-y-8">
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Systrends, Inc.</h2>
          <CompanyLogo company="Systrends, Inc." size={64} />
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">EcoLong</h2>
          <CompanyLogo company="EcoLong" size={64} />
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Duke University Materials Initiative</h2>
          <CompanyLogo company="Duke University Materials Initiative" size={64} />
        </div>
      </div>
    </div>
  );
}

