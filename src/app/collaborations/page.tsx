"use client";

import CollaborationSection from "@/components/CollabortionComponent/CollaborationSection";
import { Collabortion } from "@/data/CollabortionData";

export default function CollabortionPage() {
  return (
    <main className="bg-white overflow-x-hidden py-40 px-4 sm:px-6 lg:px-16">
      <CollaborationSection
        title={Collabortion.title}
        subTitle={Collabortion.subTitle}
        collabortions={Collabortion.collabortions}
      />
    </main>
  );
}
