// import React, { useState } from 'react';
import { ExternalLink, Code2, CodeXml } from 'lucide-react';


export const DeveloperCredit = ({
    variant = 'footer',
    devName = 'Ing. Yael Ulrick',
    portfolioUrl = 'https://portafolio-alpha-sepia-99.vercel.app/',
    // role = 'Frontend & UI Specialist',
}) => {
    // const [showTooltip, setShowTooltip] = useState(false);

    // Credito sencillos
    if (variant === 'footer') {
        return (
            <div className="w-full py-4 text-center text-[10px] text-slate-500">
                <p className="flex items-center justify-center gap-1.5 font-medium transition-colors opacity-50 hover:text-slate-700 dark:hover:text-slate-300">
                    <span>Desarrollado por</span>
                    <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold decoration-slate-500 decoration-1 underline underline-offset-2 transition-all hover:text-indigo-600 hover:decoration-indigo-500"
                    >
                        {devName}
                        <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                </p>
            </div>
        );
    }

    // Creditos Administrador
    if (variant === 'sidebar') {
        return (
            <div className="w-full border-t border-slate-200/60 p-3 dark:border-slate-800">
                <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                >
                    <div className="flex items-center gap-2">
                        <Code2 className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-indigo-500" />
                        <span className="font-medium">Dev: {devName}</span>
                    </div>
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
            </div>
        );
    }

    // Creditos publicos
    if (variant === 'Tooltip') {
        return (
            <div className="relative flex justify-end w-[90%]">
                <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center rounded-full border border-slate-200 bg-white/80 opacity-25 p-2 text-xs text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:px-3 hover:opacity-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400"
                >
                    {/* Icono siempre visible */}
                    <CodeXml className="h-4 w-4 shrink-0 text-indigo-500" />

                    {/* Texto que se expande progresivamente al hacer hover */}
                    <span className="flex max-w-0 items-center overflow-hidden opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:opacity-100">
                        <span className="ml-1">Creado por</span>
                        <span className="ml-1 font-semibold text-slate-900 dark:text-slate-100">
                            {devName}
                        </span>
                    </span>
                </a>

                {/* Card hover (Desactivado/Comentado temporalmente)
            {showTooltip && (
                <div
                    onMouseEnter={() => setShowTooltip(false)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="absolute bottom-full w-56 -translate-x-1/2 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xl transition-all dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                {devName}
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                {role}
                            </p>
                        </div>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950/50" />
                    </div>

                    <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-300">
                        ¿Necesitas desarrollo web o consultoría?
                    </p>

                    <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-2.5 py-1.5 text-center text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 active:bg-indigo-700"
                    >
                        <span>Ver Portafolio</span>
                        <ExternalLink className="h-3 w-3" />
                    </a>
                </div>
            )}
            */}
            </div>
        );
    }

};