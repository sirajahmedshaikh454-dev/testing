import { useState } from "react";
import Select from "./ui/Select";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ResultCard from "./ResultCard";

export default function PredictorForm() {
  const [formData, setFormData] = useState({
    brand: "Toyota",
    year: 2019,
    mileage: 45000,
  });
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "brand" ? value : Number(value),
    }));
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPrediction(null);

    try {
      // Future API Call goes here
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.estimated_price);
    } catch (error) {
      setTimeout(() => setPrediction(18500), 1200); // Simulated delay
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Vehicle Valuation
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Enter the specs to get an AI-powered estimate.
          </p>
        </div>

        <form onSubmit={handlePredict}>
          <Select
            label="Manufacturer"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            options={["Toyota", "Honda", "Ford", "BMW", "Audi"]}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Year"
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
            />
            <Input
              label="Mileage"
              name="mileage"
              type="number"
              value={formData.mileage}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" isLoading={isLoading}>
            Calculate Price
          </Button>
        </form>

        <ResultCard price={prediction} />
      </div>
    </div>
  );
}
