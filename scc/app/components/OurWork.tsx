"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { EmailLink } from "./EmailConfirmationModal";

interface Project {
  name: string;
  files: string[];
}

interface OurWorkProps {
  projects: Project[];
}

export default function OurWork({ projects }: OurWorkProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Track mount state for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Randomize and select projects to display
  useEffect(() => {
    if (!projects || projects.length === 0) {
      setDisplayedProjects([]);
      return;
    }

    // If 6 or more projects, randomly select 6
    if (projects.length >= 6) {
      const shuffled = [...projects].sort(() => Math.random() - 0.5);
      setDisplayedProjects(shuffled.slice(0, 6));
    } else {
      // Show all projects if less than 6
      setDisplayedProjects(projects);
    }
  }, [projects]);

  // Prevent body scroll when modal or lightbox is open
  useEffect(() => {
    if (selectedProject || lightboxImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [selectedProject, lightboxImage]);

  // Empty projects early return
  if (!projects || projects.length === 0) {
    return (
      <section className="relative space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-[var(--accent-dark)] sm:text-4xl">Our Work</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our project gallery is coming soon. Check back to see examples of our quality workmanship.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-white p-12 text-center shadow-lg ring-1 ring-black/5">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent-red)]/10 blur-3xl" />
          <div className="relative space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-red)]/10">
              <svg className="h-8 w-8 text-[var(--accent-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Projects will be displayed here as they are added
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Create portal for modal to render outside component hierarchy
  const modal = selectedProject && mounted ? createPortal(
    <>
      {/* Full screen backdrop */}
      <div 
        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-lg"
        onClick={() => setSelectedProject(null)}
      />
      
      {/* Scrollable modal container */}
      <div 
        className="fixed inset-0 z-[10001] flex items-start sm:items-center justify-center overflow-y-auto"
        onClick={() => setSelectedProject(null)}
      >
        <div 
          className="relative bg-white w-full h-full sm:h-auto sm:max-h-[95vh] sm:rounded-2xl sm:max-w-6xl sm:m-4 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="sticky top-4 right-4 z-20 ml-auto mr-4 mt-4 h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition cursor-pointer"
            aria-label="Close project gallery"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-4 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent-dark)]">{selectedProject.name}</h3>
                <p className="text-neutral-600 mt-2">{selectedProject.files.length} {selectedProject.files.length === 1 ? 'Photo' : 'Photos'}</p>
              </div>
              <div className="relative h-6 w-12 sm:h-8 sm:w-16">
                <Image
                  src="/SCC.png"
                  alt="Second Chance Collision"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {selectedProject.files.map((file, fileIndex) => {
                const isVideo = file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi');
                
                return (
                  <div 
                    key={fileIndex} 
                    className={`relative rounded-xl bg-neutral-900 shadow-lg aspect-video overflow-hidden ${!isVideo ? 'cursor-pointer hover:ring-4 hover:ring-[var(--accent-red)]/50 transition' : ''}`}
                    onClick={() => !isVideo && setLightboxImage(file)}
                  >
                    {isVideo ? (
                      <video 
                        src={file} 
                        controls 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <Image
                          src={file}
                          alt={`${selectedProject.name} - Image ${fileIndex + 1}`}
                          fill
                          className="object-cover transition hover:scale-105"
                        />
                        {/* Zoom indicator on hover */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                            <svg className="h-6 w-6 text-[var(--accent-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                    {/* Watermark on each image - large in bottom right */}
                    <div className="absolute bottom-3 right-3 opacity-90 pointer-events-none">
                      <div className="relative h-16 w-32 sm:h-20 sm:w-40">
                        <Image
                          src="/SCC.png"
                          alt="SCC"
                          fill
                          className="object-contain"
                          style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-6 pb-4 border-t border-neutral-200">
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[var(--accent-dark)]">Looking for Similar Quality Work?</h4>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
                    Get your vehicle back to showroom condition. Contact us today for a free estimate and see how we can help.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="tel:0000000000"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-red)] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-700 hover:scale-105 cursor-pointer"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call for Free Estimate
                  </a>
                  <EmailLink
                    subject="Request for Information"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--accent-red)] bg-white px-6 py-3 text-sm font-bold text-[var(--accent-red)] shadow-lg transition hover:bg-red-50 hover:scale-105 cursor-pointer"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </EmailLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  ) : null;

  // Create lightbox portal for full-screen image viewing
  const lightbox = lightboxImage && mounted ? createPortal(
    <>
      {/* Full screen backdrop */}
      <div 
        className="fixed inset-0 z-[10002] bg-black/98 backdrop-blur-lg"
        onClick={() => setLightboxImage(null)}
      />
      
      {/* Lightbox content */}
      <div 
        className="fixed inset-0 z-[10003] flex items-center justify-center p-4"
        onClick={() => setLightboxImage(null)}
      >
        {/* Close Button */}
        <button
          onClick={() => setLightboxImage(null)}
          className="absolute top-4 right-4 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer"
          aria-label="Close lightbox"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div 
          className="relative max-w-7xl max-h-[90vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={lightboxImage}
            alt="Full size view"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      <section className="relative space-y-8">{modal}
      {lightbox}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-[var(--accent-dark)] sm:text-4xl">Our Work</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            See examples of our quality collision repair and auto body work
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition hover:shadow-2xl hover:scale-[1.02] aspect-video cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={project.files[0]}
                alt={project.name}
                fill
                className="object-cover transition group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle Gradient Overlay - less prominent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              
              {/* Hover Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <svg className="h-8 w-8 text-[var(--accent-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </section>
      {modal}
    </>
  );
}
