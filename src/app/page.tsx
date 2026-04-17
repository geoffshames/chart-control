'use client';

import Hero from '@/components/Hero';
import ThresholdBento from '@/components/ThresholdBento';
import Calculator from '@/components/Calculator';
import Methodology from '@/components/Methodology';
import Validation from '@/components/Validation';
import HistoricalChart from '@/components/HistoricalChart';
import ChartTable from '@/components/ChartTable';
import Footer from '@/components/Footer';

export default function Home() {
  const handleCalculatorClick = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-[#0A0A0A] text-[#FAFAFA]">
      <Hero onCalculatorClick={handleCalculatorClick} />
      <ThresholdBento />
      <Calculator id="calculator" />
      <Methodology />
      <Validation />
      <HistoricalChart />
      <ChartTable />
      <Footer />
    </main>
  );
}
