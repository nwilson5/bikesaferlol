import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome! Let&apos;s Shame My Brother Publicly</h1>

      <p className="text-base mb-6">
        Bike Safer @ Lol
      </p>

      <p className="text-base mb-6">
        <Link href="/about">About</Link>&nbsp;&middot;&nbsp;
        <Link href="/contact">Contact</Link>
      </p>

      <p className="text-base mb-6 mt-12">
        <h1 className="text-2xl font-bold mb-4">Current Crash Counter: 6+</h1>
      </p>

      <p className="text-base mb-6 mt-12">
        <h1 className="text-2xl font-bold mb-4">Bad Takeaways/Quotes:</h1>
        <p className="text-base mb-6 mt-12">
          "I&apos;ve had a few falls where I neither bled nor needed a new helmet, but four where I bled, and I&apos;ve gone through three helmets." - Him
        </p>

        <p className="text-base mb-6 mt-12">
          Him: Visibility is bad<br />
          Me: Then maybe we should ride slower<br />
          Him: Going slower won&apos;t help<br />
          Me: Then what will?<br />
          Him: Being safer<br />
          * four days later, crashes again *<br />
          * next day, this website went up *
        </p>
      </p>

    </div>
);
}
