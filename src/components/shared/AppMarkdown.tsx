import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import type { DetailedHTMLProps, ReactElement } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Markdown, { type Components, type ExtraProps } from 'react-markdown';

import classes from './AppMarkdown.module.scss';

type AppMarkdownProps = {
  slug: string;
  content?: string;
};

export default function AppMarkdown({ content, slug }: AppMarkdownProps) {
  const customRedenrers: Partial<Components> = {
    img(
      image: DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >
    ) {
      console.log('image.src', image.src);
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt || ''}
          width={600}
          height={300}
        />
      );
    },
    p(
      paragraph: DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      > &
        ExtraProps
    ) {
      if (
        paragraph.children &&
        (paragraph.children as ReactElement<HTMLImageElement>).type === `img`
      ) {
        const image = paragraph.children as ReactElement<HTMLImageElement>;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.props.src}`}
              alt={image.props.alt || ''}
              width={600}
              height={300}
            />{' '}
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(
      code: DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
        ExtraProps
    ) {
      const { children, className, node, ...rest } = code;
      const match = /language-(\w+)/.exec(className || '') || ['', ''];
      return (
        <Prism
          language={match[1]}
          // eslint-disable-next-line react/no-children-prop
          children={String(children)}
          style={atomDark}
        />
      );
    },
  };

  return <Markdown components={customRedenrers}>{content}</Markdown>;
}
