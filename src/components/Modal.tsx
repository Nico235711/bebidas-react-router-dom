import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { DrinkDetails } from '../types';

export default function Modal() {

  const { drinkDetails, modal, closeModal, ifExists, addFavourite } = useAppStore()
  const renderIngredients = () => {

    const ingredients: JSX.Element[] = []
    for (let index = 1; index <= 6; index++) {
      const ingredient = drinkDetails[`strIngredient${index}` as keyof DrinkDetails]
      const measure = drinkDetails[`strMeasure${index}` as keyof DrinkDetails]
      if (ingredient && measure) {
        ingredients.push(
          <li key={index} className='text-lg'>{ingredient} - {measure}</li>
        )
      }
    }
    return ingredients
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                    {drinkDetails.strDrink}
                  </DialogTitle>

                  <img src={drinkDetails.strDrinkThumb} alt={`Imagen de la bebida ${drinkDetails.strDrink}`} className='mx-auto w-96' />
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </DialogTitle>

                  {renderIngredients()}
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </DialogTitle>

                  <p>{drinkDetails.strInstructions}</p>

                  <div className="flex justify-between my-4 gap-3">
                    <button
                      type='button'
                      className="bg-red-500 px-5 py-1 text-white text-xl hover:bg-red-600 transition-all w-full"
                      onClick={closeModal}
                    >Cerrar</button>
                    <button
                      type='button'
                      className="bg-blue-600 px-5 py-1 text-white text-xl hover:bg-blue-800 transition-all w-full"
                      onClick={() => {
                        addFavourite(drinkDetails)
                        closeModal()
                      }}
                    >{ifExists ? "Eliminar de Favoritos" : "Añadir a Favoritos"}</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}