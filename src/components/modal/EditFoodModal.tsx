import { useEffect, useState } from 'react';
import type { Food } from '@/types/food';
import { updateFood } from '@/services/foodService';

interface Props {
  modalId: string;
  food: Food | null;
  onUpdated: () => void;
}

export function EditFoodModal({
  modalId,
  food,
  onUpdated,
}: Props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  useEffect(() => {
    if (food) {
      setName(food.name);
      setCalories(food.caloriesPer100g);
      setCarbs(food.carbsPer100g);
      setProtein(food.proteinPer100g);
      setFat(food.fatPer100g);
    }
  }, [food]);

  async function handleSave() {
    if (!food) return;

    await updateFood(food.id, {
      name,
      caloriesPer100g: calories,
      carbsPer100g: carbs,
      proteinPer100g: protein,
      fatPer100g: fat,
    });

    await onUpdated();

    (
      document.getElementById(
        modalId,
      ) as HTMLDialogElement
    )?.close();
  }

  return (
    <dialog
      id={modalId}
      className="modal"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Editar alimento
        </h3>

        <div className="flex flex-col gap-3 mt-4">
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="number"
            className="input input-bordered w-full"
            value={calories}
            onChange={(e) =>
              setCalories(Number(e.target.value))
            }
          />

          <input
            type="number"
            className="input input-bordered w-full"
            value={carbs}
            onChange={(e) =>
              setCarbs(Number(e.target.value))
            }
          />

          <input
            type="number"
            className="input input-bordered w-full"
            value={protein}
            onChange={(e) =>
              setProtein(Number(e.target.value))
            }
          />

          <input
            type="number"
            className="input input-bordered w-full"
            value={fat}
            onChange={(e) =>
              setFat(Number(e.target.value))
            }
          />
        </div>

        <div className="modal-action">
          <button
            className="btn"
            onClick={() =>
              (
                document.getElementById(
                  modalId,
                ) as HTMLDialogElement
              )?.close()
            }
          >
            Cancelar
          </button>

          <button
            className="btn btn-primary"
            onClick={handleSave}
          >
            Salvar
          </button>
        </div>
      </div>
    </dialog>
  );
}