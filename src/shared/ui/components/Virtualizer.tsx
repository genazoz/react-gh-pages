import {ReactElement} from "react";
import {FixedSizeList as List, FixedSizeListProps, ListChildComponentProps} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

type VirtualizerProps<T = any> = Omit<FixedSizeListProps<T>, 'width' | 'height' | 'children'> & {
  renderRow: (index: number) => ReactElement
}

export const Virtualizer = <T = any>(
  props: VirtualizerProps<T>
): ReactElement | null => {
  const {
    renderRow,

    ...otherProps
  } = props

  return (
    <AutoSizer>
      {({width, height}) => (
        <List
          height={height}
          width={width}
          {...otherProps}
        >
          {({style, index}: ListChildComponentProps) => (
            <div style={{...style, ...{display: "flex"}}}>
              {renderRow(index)}
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  )
}

