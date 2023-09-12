import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";

export type TFlexDirection = "vertical" | "horizontal";

export interface IFlexProps extends HTMLAttributes<HTMLElement> {
  gap: number;
  /** @default horizontal */
  direction?: TFlexDirection;
  align?: CSSProperties["alignItems"];
  /** @default start */
  justify?: CSSProperties["justifyContent"];
  /** @default div */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  width?: string | number;

  wrap?: CSSProperties["flexWrap"];

  flex?: CSSProperties["flex"];
  children: ReactNode;
}

const Flex = forwardRef<HTMLDivElement, IFlexProps>(
  (
    {
      justify = "start",
      as: Component = "div",
      direction = "horizontal",
      children,
      gap,
      align,
      width,
      wrap,
      flex,
      style,
      ...rest
    },
    ref
  ) => {
    const _style = useMemo(
      () => ({
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
        width,
        flex,
        ...style,
      }),
      [direction, justify, align, wrap, gap, width, flex, style]
    );

    return (
      <Component style={_style} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Flex;
