import { useState, useEffect } from "react";

interface FiltroProps {
  params: { categorias: string };
  onFilterChange: (filters: Record<string, string>) => void;
}

const FiltroComponent = ({ params, onFilterChange }: FiltroProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);

  const globalFilters = {
    situacao: ["destaque", "promocao", "queima de estoque"],
    cor: ["marrom", "preto"],

    disponibilidade: ["sim", "não"],
    valor: ["500", "999", "1500", "2000", "2500", "3000", "4000", "5000"],
  };

  const categoryFilters: Record<string, string[]> = {
    "Sala de Estar": [
      "Sofá Retrátil",
      "Sofá de Canto",
      "Sofá de 2 e 3 lugares",
      "Estante",
      "Painel",
      "Armario",
      "Mesa de Jantar",
    ],
    Cozinha: ["Kit de Cozinha", "balcao de cozinha", "mesa de alumínio"],
    Banheiro: ["Armário de banheiro"],
    "Quarto de Casal": [
      "Cama de Casal",
      "Guarda Roupa Casal",
      "Base de Casal",
      "Colchão de Casal",
    ],
    "Quarto de Solteiro": [
      "Cama de Solteiro",
      "Guarda Roupa Solteiro",
      "Base de Solteiro",
      "Colchao de Solteiro",
    ],
    Lavanderia: ["Multiuso"],
  };

  useEffect(() => {
    // Atualiza os filtros disponíveis com base na categoria
    const categoryKey = decodeURIComponent(params.categorias).replace(
      /%20/g,
      " "
    );
    if (categoryKey in categoryFilters) {
      setAvailableFilters(categoryFilters[categoryKey]);
    } else {
      setAvailableFilters([]);
    }
  }, [params.categorias]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[key] === value) {
        delete newFilters[key];
      } else {
        newFilters[key] = value;
      }
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <section className=" sm:w-64 p-4 bg-gray-100 rounded-lg shadow-md m-4">
      <h3 className="mb-4">Filtros:</h3>
      <div className="content">
        <div>
          <h2 className="mb-2 text-lg">Promoção:</h2>
          {globalFilters.situacao.map((situacao) => (
            <label key={situacao} className="flex flex-wrap mb-2 text-sm">
              <input
                type="checkbox"
                checked={filters.situacao === situacao}
                onChange={() => handleFilterChange("situacao", situacao)}
                className="mr-2"
              />
              {situacao.charAt(0).toUpperCase() + situacao.slice(1)}
            </label>
          ))}
        </div>
        <div>
          <h2 className="mb-2 text-lg">Disponibilidade:</h2>
          {globalFilters.disponibilidade.map((disponibilidade) => (
            <label
              key={disponibilidade}
              className="flex flex-wrap mb-2 text-sm"
            >
              <input
                type="checkbox"
                checked={filters.disponibilidade === disponibilidade}
                onChange={() =>
                  handleFilterChange("disponibilidade", disponibilidade)
                }
                className="mr-2"
              />
              Em estoque: {disponibilidade}
            </label>
          ))}
        </div>
        <h2 className="mb-6 text-lg">Range de Valor:</h2>
        <div id="mobile" className="flex flex-wrap gap-2 mt-[-1.25rem]">
          {globalFilters.valor.map((valor) => (
            <label key={valor} className="flex flex-wrap mb-2 text-sm">
              <input
                type="checkbox"
                checked={filters.valor === valor}
                onChange={() => handleFilterChange("valor", valor)}
                className="mr-2"
              />
              Até R${valor}
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={handleClearFilters}
        className="bg-yellow-500 text-white py-2 px-4 rounded transition duration-100 hover:bg-yellow-600 focus:outline-none focus:shadow-outline w-full sm:w-auto"
      >
        Limpar Filtros
      </button>
    </section>
  );
};

export default FiltroComponent;
