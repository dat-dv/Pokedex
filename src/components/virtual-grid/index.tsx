"use client";

import { VirtuosoGrid, VirtuosoGridProps } from "react-virtuoso";

type VirtualGridProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onEndReached?: () => void;
  loadingMore?: boolean;
  hasMore?: boolean;
} & VirtuosoGridProps<T, unknown>;

export function VirtualGrid<T>({
  items,
  renderItem,
  onEndReached,
  loadingMore,
  hasMore = true,
  ...rest
}: VirtualGridProps<T>) {
  return (
    <>
      <VirtuosoGrid
        useWindowScroll
        data={items}
        endReached={() => {
          if (!loadingMore && hasMore && onEndReached) {
            onEndReached();
          }
        }}
        itemContent={(index, item) => renderItem(item, index)}
        overscan={400}
        {...rest}
      />

      {/* Loading Indicator at the bottom */}
      {hasMore && loadingMore && (
        <div className="h-40 w-full flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </>
  );
}
