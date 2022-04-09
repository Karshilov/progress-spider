declare module 'progress-spider' {
    type Config = {
        left: number;
        bottom: number;
        style: any;
    };
    function SpiderProgress(begin?: string, target?: string, config?: Config): void;
    export default SpiderProgress;
}
