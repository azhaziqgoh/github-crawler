/**
 * @description View daya model for the search result
 * 
 * 
 */
class SearchResultModel {
    constructor(id,name,url,description,updated,language,starCount){
        this.id = id;
        this.name = name;
        this.url = url;
        this.description = description;
        this.updated = updated;
        this.language = language;
        this.starCount = starCount;
    }
}

export {
    SearchResultModel
}

