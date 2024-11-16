import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics','Marvel Comics'];

    if ( !validPublisher.includes(publisher) ) {
        
        throw new Error(`el ${publisher} it's not a validate publisher`)
        
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}