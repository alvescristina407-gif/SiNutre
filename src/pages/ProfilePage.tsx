import { useEffect, useState } from 'react';

import { SimpleHeader } from '@/components/layout/SimpleHeader';
import {
  getHealthData,
  saveHealthData,
} from '@/services/healthService';

export function ProfilePage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [targetDietDaily, setTargetDietDaily] =
    useState('');

  const [levelActivity, setLevelActivity] =
    useState('MODERADO');

  async function loadData() {
    const data = await getHealthData();

    if (data.weightLog) {
      setHeight(
        String(data.weightLog.height),
      );
      setWeight(
        String(data.weightLog.weight),
      );
    }

    if (data.healthData) {
      setTargetDietDaily(
        String(data.healthData.targetDietDaily),
      );
      setLevelActivity(
        data.healthData.levelActivity,
      );
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleSave() {
    await saveHealthData({
      height: Number(height),
      weight: Number(weight),
      targetDietDaily: Number(
        targetDietDaily,
      ),
      levelActivity,
    });

    alert('Dados salvos com sucesso!');
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <SimpleHeader
        title="Meus Dados"
        subtitle="Dados complementares"
      />

      <div className="space-y-4 mt-6">
        <input
          className="input input-bordered w-full"
          placeholder="Altura (cm)"
          type="number"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value)
          }
        />

        <input
          className="input input-bordered w-full"
          placeholder="Peso (kg)"
          type="number"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value)
          }
        />

        <input
          className="input input-bordered w-full"
          placeholder="Meta calórica"
          type="number"
          value={targetDietDaily}
          onChange={(e) =>
            setTargetDietDaily(e.target.value)
          }
        />

        <select
          className="select select-bordered w-full"
          value={levelActivity}
          onChange={(e) =>
            setLevelActivity(e.target.value)
          }
        >
          <option value="SEDENTARIO">
            Sedentário
          </option>

          <option value="LEVE">
            Leve
          </option>

          <option value="MODERADO">
            Moderado
          </option>

          <option value="INTENSO">
            Intenso
          </option>
        </select>

        <button
          className="btn w-full text-white border-0"
          style={{
            backgroundColor: '#C85C5C',
          }}
          onClick={handleSave}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}