import axios from "axios";
import { SearchResultModel } from "@/models/search-result-model.js";

/**
 * 
 * @param {number} currentPage current page of the pagination
 * @param {number} pageSize page size of the pagination
 * @param {string} searchKeyword keyword for search
 * 
 * @description async function to run search for repo in github
 * 
 * @returns {object} totalRepoCount {number}, repos {array}
 */
async function getRepo(currentPage,pageSize,searchKeyword){
    let listsOfRepo = [],
    config = {
        params: {
            q: searchKeyword,
            page: currentPage,
            per_page: pageSize
        }
    },
    url = "https://api.github.com/search/repositories"
    
    //Try catch block to handle error
    try {
        let results = await axios.get(url,config);

        results.data.items.forEach(item=>{
            let srm = new SearchResultModel(item.id,
                                            item.name,
                                            item.html_url,
                                            item.description,
                                            item.updated_at,
                                            item.language,
                                            item.stargazers_count);
            
            listsOfRepo.push(srm);
        });

        return {
            totalReposCount: results.data.total_count,
            repos: listsOfRepo,
            message: 'Success'  
        }

    } catch (e){

        return {
            totalReposCount: 0,
            repos: listsOfRepo,
            message: 'Error' 
        }
    }
}

export default {
    getRepo: getRepo
}