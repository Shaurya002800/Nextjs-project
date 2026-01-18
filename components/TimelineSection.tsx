export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="min-h-screen bg-white text-black p-12 flex flex-col gap-8"
    >
      <h1 className="text-4xl font-semibold">Timeline</h1>

      <div className="border-l border-neutral-300 pl-6 flex flex-col gap-6">
        <div>
          <h3 className="text-xl">Registrations Open</h3>
          <p className="text-neutral-600">Jan 25</p>
        </div>

        <div>
          <h3 className="text-xl">Round 1 Begins</h3>
          <p className="text-neutral-600">Feb 8</p>
        </div>

        <div>
          <h3 className="text-xl">Final Results</h3>
          <p className="text-neutral-600">Feb 10</p>
        </div>
      </div>
    </section>
  );
}

