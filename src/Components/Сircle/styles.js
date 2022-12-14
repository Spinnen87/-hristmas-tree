import styled from "styled-components";


export const Container = styled.div`
  --m: ${({m}) => m};
  --tan: ${({tan}) => tan};
  --d: 50px;
  --rel: 1;
  --r: calc(.5*(1 + var(--rel))*var(--d)/var(--tan));
  --s: calc(2*var(--r) + var(--d));
  --rotate-speed: 100s;
  animation: spin var(--rotate-speed) linear infinite;
  position: fixed;
  width: var(--s);
  height: var(--s);


  @keyframes spin {

    100%{
      transform: rotate(360deg);
    }
  }
`;


export const Item = styled.div`
  --i: ${({i}) => i};
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(-.1*var(--d));
  width: var(--d);
  height: var(--d);
  --az: calc(var(--i)*1turn/var(--m));
  transform: rotate(var(--az)) translate(var(--r)) rotate(calc(-1*var(--az)));
`;

export const Item2 = styled.div`
  animation: spin-b var(--rotate-speed) linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: .7em;


  @keyframes spin-b {

    100%{
      transform: rotate(-360deg);
    }
  }
`;