import { List, WindowScroller } from 'react-virtualized';
import { PostItem } from '../../entities/post-item/index.ts';
import { useGetAllPostsQuery } from '../../shared/api/index.ts';

export default function PostList() {
  const { data, isFetching } = useGetAllPostsQuery();

  const rowRenderer: List['props']['rowRenderer'] = ({ index, key, style }) => {
    const { id, title, body } = data![index];
    return (
      <div
        key={key}
        style={style}
      >
        <PostItem
          id={id}
          title={title}
          description={body}
        />
      </div>
    );
  };

  return (
    <>
      <h2>Список постов</h2>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <WindowScroller>
          {({ height, scrollTop }) => (
            <List
              autoHeight
              height={height}
              rowCount={data?.length || 0}
              rowHeight={120}
              rowRenderer={rowRenderer}
              scrollTop={scrollTop}
              width={1000}
            />
          )}
        </WindowScroller>
      )}
    </>
  );
}
