import styled from "styled-components";

export const Container = styled.div`
  --count: ${({ count }) => count};
  --tan: ${({ tan }) => tan};
  --d: 3em;
  --rel: 1;
  --r: calc(0.5 * (1 + var(--rel)) * var(--d) / var(--tan));
  --s: calc(2 * var(--r) + var(--d));
  --rotate-speed: 100s;
  animation: spin var(--rotate-speed) linear infinite;
  position: fixed;
  width: var(--s);
  height: var(--s);

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Item = styled.div`
  --i: ${({ i }) => i};
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(-0.5 * var(--d));
  width: var(--d);
  height: var(--d);
  --az: calc(var(--i) * 1turn / var(--count));
  transform: rotate(var(--az)) translate(var(--r)) rotate(calc(-1 * var(--az)));
`;

export const ImgAnimateContainer = styled.div`
  animation: spin-b var(--rotate-speed) linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7em;
  color: ##1677ff;
  font-weight: 600;

  @keyframes spin-b {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const StyledImg = styled.img`
  width: calc(var(--d) * 1.5);
  height: calc(var(--d) * 1.5);
  border-radius: 50%;
  box-shadow: 0 3px 10px #0003;
  background-color: #fff;
  border: 2px solid white;
  object-fit: cover;
`;
