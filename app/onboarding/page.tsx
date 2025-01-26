"use client"

import { FieldValues, useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { completeOnboarding } from './_actions';
import React from 'react';
import axios, { AxiosError } from 'axios';

export default function OnboardingPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useUser();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null); 

  const onSubmit = async (formData: FieldValues) => {
    try {
        const res = await completeOnboarding(formData); 
        // ...
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response && err.response.data && err.response.data.message) {
            setError(err.response.data.message);
          } else {
            setError('An error occurred while processing the request.'); 
          }
        } else {
          setError('An unexpected error occurred.');
        }
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="applicationName" className="block text-sm font-medium text-gray-700">
              Application Name
            </label>
            <input
              type="text"
              id="applicationName"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              {...register("applicationName", { required: true })}
            />
            {errors.applicationName && (
              <p className="text-red-500 mt-1">Application Name is required</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="applicationType" className="block text-sm font-medium text-gray-700">
              Application Type
            </label>
            <input
              type="text"
              id="applicationType"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              {...register("applicationType", { required: true })}
            />
            {errors.applicationType && (
              <p className="text-red-500 mt-1">Application Type is required</p>
            )}
          </div>

          {error && <p className="text-red-500 mt-2">Error: {error}</p>}

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  
}

