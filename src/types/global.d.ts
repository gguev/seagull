interface Product {
    title: string,
    reviews: {
        reddit: {
            comments: Array<any>,
            submissions: Array<any>
        },
        youtube: {
            videos: Array<any>
        }
    }
}

declare module "*.module.css" {
    const styles: { [className: string]: string };
    export default styles;
}