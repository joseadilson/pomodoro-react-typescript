import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  const { text, onClick, className } = props;

  return (
    <>
      <button onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
}
