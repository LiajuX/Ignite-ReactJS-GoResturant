import { useEffect, useState } from 'react';

import api from '../../services/api';

import { Food as FoodProps } from '../../types';

import { Header } from '../../components/Header';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

export function Dashboard() {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [editingFood, setEditingFood] = useState<FoodProps>({} as FoodProps);
  const [isModalAddFoodOpen, setIsModalAddFoodOpen] = useState(false);
  const [isModalEditFoodOpen, setIsModalEditFoodOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/foods');
      const data = response.data;

      setFoods(data);
    }

    loadData();
  }, []);

  async function handleAddFood(food: FoodProps) {
    try {
      const response = await api.post<FoodProps>('/foods', {
        ...food,
        available: true,
      });

      const data = response.data;

      setFoods(oldState => [...oldState, data]);

    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food: FoodProps) {
    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map(food =>
        food.id !== foodUpdated.data.id ? food : foodUpdated.data,
      );

      setFoods(foodsUpdated);
      
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered);
  }

  function toggleAddFoodModal() {
    setIsModalAddFoodOpen(!isModalAddFoodOpen);
  }

  function toggleEditFoodModal() {
    setIsModalEditFoodOpen(!isModalEditFoodOpen);
  }

  function handleEditFood(food: FoodProps) {
    setEditingFood(food);
    setIsModalEditFoodOpen(true);
  }

  return (
    <>
      <Header openModal={toggleEditFoodModal} />

      <ModalAddFood
        isOpen={isModalAddFoodOpen}
        setIsOpen={toggleAddFoodModal}
        handleAddFood={handleAddFood}
      />

      <ModalEditFood
        isOpen={isModalEditFoodOpen}
        setIsOpen={toggleEditFoodModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}
