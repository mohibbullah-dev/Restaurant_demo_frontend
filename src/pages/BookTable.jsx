import ReservationForm from "../components/ReservationForm";
import Section from "../components/Section";

export default function BookTable() {
  // bg-obsidian
  return (
    <div className="min-h-screen pt-24 pb-12">
      <Section
        title="Private Booking"
        subtitle="Reserve your place at the Aurelia table for an unforgettable evening."
      >
        <div className="mt-12">
          {/* This is the component you just built! */}
          <ReservationForm />
        </div>
      </Section>
    </div>
  );
}
