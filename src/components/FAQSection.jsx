import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { faqs } from '../data/faqs';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const listRef = useReveal();

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="faq section--dark" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader
          kicker="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de empezar"
          subtitle="Si no encuentras la respuesta aquí, escríbenos por WhatsApp — respondemos rápido."
        />

        <div ref={listRef} className="faq__list reveal" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq__item ${isOpen ? 'open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  {faq.q}
                  <ChevronDown size={18} className="faq__chevron" aria-hidden />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
