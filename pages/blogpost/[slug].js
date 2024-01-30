import React from 'react';
import { useRouter } from 'next/router';

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  console.log('Slug router - ', slug, router);
  return (
    <div>Slug page with ID
      <h1>Title of the page { slug }</h1>
      <hr />
      <div>
        Lorum ipsum text
      </div>
    </div>
  )
}

export default Slug