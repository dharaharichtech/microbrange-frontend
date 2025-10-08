"use client";

import Image from "next/image";
import React from "react";
import Title from "../layouts/Title";
import { MoveUpRight } from 'lucide-react';
interface Field {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface GetStartFormProps {
  title: string;
  subTitle: string;
  socialMediaIcons: {
    id: number;
    icon: string;
    link: string;
  }[];
  form: {
    fields: Field[];
    button: {
      text: string;
      type: string;
    };
  };
}

const GetStartedSection: React.FC<GetStartFormProps> = ({
  title,
  subTitle,
  socialMediaIcons,
  form,
}) => {
  return (
    <section className="w-full px-4 md:px-20 py-20 bg-white">
      <div className=" mx-auto relative">
        <div className="relative mb-10">
          <div className="flex items-center justify-between">
            {/* Title Section - Left */}
            <div className="text-left w-1/2">
              <Title title={title} subTitle={subTitle} />
            </div>

            {/* Social Icons - Right */}
            <div className="hidden lg:flex flex-col space-y-4">
              {socialMediaIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-30 h-12  flex items-center justify-center"
                >
                  <Image src={item.icon} alt="icon" width={50} height={50} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {form.fields.map((field, index) =>
            field.type !== "textarea" ? (
              <input
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="border border-gray-300 rounded-md px-4 py-6 text-[#2D2D2D] text-sm w-full"
              />
            ) : null
          )}

          <div className="sm:col-span-3">
            {form.fields.map((field, index) =>
              field.type === "textarea" ? (
                <textarea
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="border border-gray-300 rounded-md px-4 py-3 text-sm w-full h-32"
                ></textarea>
              ) : null
            )}
          </div>

          <div className="sm:col-span-3">
            <button
              type={form.button.type as "submit" | "button"}
              className="bg-[#4BBA72] text-white px-6 py-3 rounded-md font-semibold text-[18px] flex items-center gap-2"
            >
              {form.button.text}
              <MoveUpRight  />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetStartedSection;
