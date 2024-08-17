import React from 'react';

const TransformationsPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>TransformationsPage for {params.id}</div>;
};

export default TransformationsPage;
