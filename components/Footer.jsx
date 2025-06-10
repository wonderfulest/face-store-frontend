import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
    const [expanded, setExpanded] = useState(false);
    const footerRef = useRef(null);
    
    // Handle mouse enter/leave events
    const handleMouseEnter = () => {
        setExpanded(true);
    };
    
    const handleMouseLeave = () => {
        setExpanded(false);
    };

    return (
        <footer 
            ref={footerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-300 ${expanded ? "bg-black" : "bg-black/80 backdrop-blur-sm"} text-white fixed bottom-0 left-0 right-0 z-10 shadow-lg`}
        >
            {/* Footer content - expands on hover */}
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-32" : "max-h-0"}`}>
                <Wrapper className="flex justify-between py-4 flex-col md:flex-row gap-[50px] md:gap-0">
                    {/* LEFT START */}
                    <div className="text-[15px] text-white/[0.9] hover:text-white cursor-pointer text-center md:text-left">
                        <div>© 2025 WuKong OÜ. All Rights Reserved</div>
                        <div className="mt-1">Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551, Estonia</div>
                        <div className="mt-1">Email: support@wristo.io</div>
                    </div>
                    {/* LEFT END */}
                </Wrapper>
            </div>

            {/* Minimal footer - always visible */}
            <div className="py-4 text-center text-sm text-white/80 hover:text-white/90 transition-colors">
                © 2025 WuKong OÜ &nbsp;|&nbsp;
                <Link href="/terms" className="text-blue-300 hover:text-blue-200 underline transition-colors">Terms of Use</Link> &nbsp;|&nbsp;
                <Link href="/privacy" className="text-blue-300 hover:text-blue-200 underline transition-colors">Privacy Policy</Link> &nbsp;|&nbsp;   
                <Link href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors">Contact</Link> &nbsp;|&nbsp;
                <Link href="/faq" className="text-blue-300 hover:text-blue-200 underline transition-colors">FAQ</Link>
            </div>
        </footer>
    );
};

export default Footer;
