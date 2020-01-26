import {useEffect} from 'react';

export default ({
  reference,
  callback = () => {},
  hasMore = true,
  threshold = 100,
}) => {
  const handleScroll = () => {
    if (
      reference.current.scrollHeight <=
      reference.current.offsetHeight +
      reference.current.scrollTop +
      threshold &&
      hasMore
    ) {
      callback();
    }
  };
  useEffect(() => {
    reference.current.addEventListener('scroll', handleScroll);
    return () => {
      reference.current.removeEventListener('scroll', handleScroll);
    };
  }, [hasMore,threshold]);
};
