import ModalWrapper from "../ModalWrapper";
import React, { Fragment, useState } from "react";
import { Listbox, Transition, Switch } from '@headlessui/react'
import { Category, Price } from "@prisma/client";
import axios from "axios";

const CategorySelect = ({ category, setCategory }) => {
  return (
    <div>
      <Listbox value={category} onChange={setCategory}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full p-3 text-left bg-white border border-gray-300 rounded-lg cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{category}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            /> */}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {Object.values(Category).map((category, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {category}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

const AddItem = ({ isOpen, setIsOpen }) => {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("SHOES");
  const [price, setPrice] = useState("LOW");
  const [blur, setBlur] = useState(false);
  const [files, setFiles] = useState([]);

  // const formdata = new FormData();

  console.log(files)

  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-20">
        <div className="flex items-center w-full">
          <h1
            className="mt-1 mb-8 mr-auto text-5xl font-medium leading-6 text-gray-900 font-kyiv"
          >
            Add An Item
          </h1>
          <div
            onClick={() => setIsOpen(false)}
            className="mb-4 font-bold text-red-500 hover:cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col mt-3 mr-10">
            <h1 className="mb-4 text-2xl underline font-kyiv">Name <span className="text-red-400">*</span></h1>
            <input autoComplete="off" className="p-3 border border-gray-300 rounded-lg w-[30rem]" placeholder="Nike Shoes" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col mt-3 mr-24">
            <h1 className="mb-4 text-2xl underline font-kyiv">Category <span className="text-red-400">*</span></h1>
            <CategorySelect category={category} setCategory={setCategory} />
          </div>
          <div className="flex flex-col mt-3">
            <h1 className="mb-4 text-2xl underline font-kyiv">Price <span className="text-red-400">*</span></h1>
            <div className="flex items-center">
              {Object.values(Price).map((enumPrice, i) => (
                <div className="py-3 mr-5">
                  {[...Array(i + 1).keys()].map(x => <span onClick={() => setPrice(enumPrice)} className={`text-2xl hover:cursor-pointer ${enumPrice === price ? 'text-stoop-green' : 'text-stoop-brown'}`}>$</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="mb-4 text-2xl underline font-kyiv">Description </h1>
          <textarea autoComplete="off" onChange={(e) => setDesc(e.target.value)} rows={5} id="desc" placeholder="Red, Size 10. Like the impostor from among us." className="w-full p-3 border border-gray-300 outline-none rounded-xl" />
        </div>

        <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
            <div className="flex mt-4 text-sm leading-6 text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-stoop-green focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={async (e) => {
                  setFiles([...files, e.target.files[0]])
                }} />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <Switch
            checked={blur}
            onChange={setBlur}
            className={`${blur ? 'bg-stoop-green' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full mr-3`}
          >
            <span
              className={`${blur ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <h1 className="mr-auto text-xl font-kyiv">Blur?</h1>
          <button onClick={async () => {
            const formData = new FormData();
            files.forEach((file, i) => {
              formData.append(`Image ${i}`, file)
            });

            /* Send request to inventory data endpoint */


            await fetch(`/api/inventory/`, {
              method: "post",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: name,
                desc: desc,
                blur: blur,
                category: category,
                price: price,
              }),
            })
            /* Send request to image upload endpoint */

            await fetch(`/api/inventory/upload/${name}`, {
              method: "POST",
              body: formData,
            })

            /* Clear Form */
            setIsOpen(false);
            setName("")
            setDesc("")
            setBlur(false)
            setCategory("SHOES")
            setPrice("LOW")


          }} className="px-2 py-1 text-white font-kyiv rounded-xl bg-stoop-green">Add</button>
        </div>
      </div>

    </ModalWrapper >
  );
}

export default AddItem;