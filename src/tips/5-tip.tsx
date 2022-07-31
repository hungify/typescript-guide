// #5: Building LOOSE AUTOCOMPLETE

// Issue
type IconSize1 = 'sm' | 'xs';

interface IconProps1 {
  size: IconSize1;
}
export function Icon1(props: IconProps1) {
  return <></>;
}
function Comp1() {
  return (
    <>
      <Icon1 size='sm' />
      <Icon1 size='something' />
    </>
  );
}

//Solution
export type LooseAutoComplete<T extends string> = T | Omit<string, T>;

export type IconSize = LooseAutoComplete<'sm' | 'xs'>;

interface IconProps {
  size: IconSize;
}
function Icon(props: IconProps) {
  return <></>;
}

export default function Comp() {
  return (
    <>
      <Icon size='sm' />
      <Icon size='something' />
    </>
  );
}
