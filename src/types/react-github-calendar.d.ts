declare module 'react-github-calendar' {
    import * as React from 'react';
    type Props = {
        username: string;
        blockSize?: number;
        blockMargin?: number;
        fontSize?: number;
        hideColorLegend?: boolean;
        transformData?: (contrib: any) => any;
        // any other props are allowed
        [key: string]: any;
    };
    const GithubCalendar: React.FC<Props>;
    export default GithubCalendar;
}