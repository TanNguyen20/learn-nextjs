'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        <Link href="/dashboard/setting">Go to setting page</Link>
      </p>
      <Link href="/dashboard#contentParagraph">Go to Content</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nesciunt quod ullam nemo modi, dolorem sapiente rerum nisi minima dolores cum eos iure facilis, corrupti hic ipsa eum unde? Quas??
      </p>
      <p id="contentParagraph">Content after lorem paragraph</p>
    </div>
  );
}