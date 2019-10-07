export class Movie {

    private id: number;
    private image_url: string;

    constructor(id: number, image_url: string){
        this.id = id;
        this.image_url = image_url;
    }

    public getId(){
        return this.id;
    }

    public getImageUrl(){
        return this.image_url;
    }

}