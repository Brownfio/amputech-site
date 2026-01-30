import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="relative w-full -mx-6 mb-12">
        <Image src="/hero-several-feet.jpg" alt="Product" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-3xl text-center mx-auto text-white">
            <h1 className="text-3xl md:text-5xl font-bold">About Amputech</h1>
            <p className="mt-4 text-lg">Practical prosthetics, safety-first consulting, and technology that helps people move with confidence.</p>
            <p className="mt-3 text-sm opacity-90">Amputech improves mobility outcomes by combining prosthetics-centered support, safety-focused consulting, and practical technology solutions. We help people move with more confidence and independence in real-world environments.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card title="Mission">Improve real-world mobility outcomes with practical, reliable support.</Card>
            <Card title="Vision">Accessible, repeatable solutions that help people move safely and confidently.</Card>
            <Card title="Values">Safety, clarity, integrity, and follow-through.</Card>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="aspect-video rounded-md overflow-hidden border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rySqMiMPygQ"
                  title="Amputech intro video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 space-y-8">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Our Approach</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">"Absolute stability through due diligence" has been our company's core belief since starting our shower foot as a college research project.</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">Driving our business is the desire to help persons with disabilities by offering simplistically superior prosthetics.</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">What makes our process unique is that we are focused on beating the costs currently available through the complex disability manufacturing system that keeps the best prosthetic technology for affluent amputees away from those who need it most.</p>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Our Story</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
            <p>This invention came about through a simple question to the inventor Frank Jones, asked by myself, Michael Simonetti.</p>
            <p>While working on my Master of Science (MS) degree in Rehabilitation Counseling, I chose Assistive Technology as a certification as well.</p>
            <p>Conducting a matching person-to-technology inventory with Frank brought about the question, "What is the single biggest headache in your life?"</p>
            <p>Frank answered "Bathing... I have fallen so many times in the bathroom I've lost count." This turns out to be a common problem for many lower limb amputees.</p>
            <p>Having collaborated on a prosthetic project of lesser complexity the previous semester, Frank and I used our combined technical skills to bring about a simple solution to his problem of bathing in safety on two legs again.</p>
            <p>From our humble beginnings using a toilet plunger suction cup for our first prototype, to our current stainless steel device, attention to detail and a focus on giving the user a physical feedback of absolute stability has driven our production.</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Meet the Team</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 items-start">
            <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
              <Image src="/pete.jpg" alt="Frank Jones" width={572} height={826} className="h-28 w-28 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Frank Jones</div>
                <div className="text-sm text-gray-500">Inventor — Founder &amp; Chief Operating Officer</div>
                <p className="mt-2 text-sm text-gray-700">For well over 30 years Frank Jones has been a dedicated and meticulous Harley Davidson motorcycle technician with hands-on experience in diagnosis and repair as well as building one-off custom builds for his clientele.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
              <Image src="/simo.jpg" alt="Michael Simonetti" width={572} height={572} className="h-28 w-28 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Michael Simonetti</div>
                <div className="text-sm text-gray-500">Co-founder &amp; Chief Executive Officer</div>
                <p className="mt-2 text-sm text-gray-700">Graduate of San Diego State University in 2017 with a Master of Science degree in Rehabilitation Counseling and a certificate in Assistive Technology. Michael is a 23 year naval veteran who retired as a U.S. Navy hard helmet diver.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="font-semibold text-gray-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-gray-600">{children}</p>
    </div>
  )
}

