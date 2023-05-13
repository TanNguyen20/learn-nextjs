'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Management() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        <Link href="/dashboard/setting">Go to setting page</Link>
      </p>
      <Link href="/dashboard#contentParagraph">Go to Content</Link>
      <p id="contentParagraph">Content after lorem paragraph</p>
    </div>
  );
}