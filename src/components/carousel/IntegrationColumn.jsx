'use client'
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';
import { Fragment } from "react";

const IntegrationsColumn = ({ integrations, className, reverse }) => {
    return (
        <motion.div className={twMerge("flex flex-col gap-4 pb-4", className)}
            initial={{ y: reverse ? '-50%' : 0 }}
            animate={{ y: reverse ? 0 : '-50%' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map(integration => (
                        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6" key={integration.name}>
                            <div className="flex justify-center">
                                <Image className="size-24" width={150} height={150} src={integration.icon} alt={integration.name} />
                            </div>
                            <p className="text-2xl text-center mt-6">{integration.name}</p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}

export default IntegrationsColumn;