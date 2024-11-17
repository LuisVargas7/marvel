import {Link} from "react-router-dom";

const CharactersByActor = ({alter_ego,characters}) =>{

   return (characters === alter_ego) ?  (<></>) : (<p>{characters}</p>);

}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

  

    const HeroImageUrl = `/marvel/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4 ">

                        <img src={HeroImageUrl} className="card-img" alt={superhero} />

                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-tittle">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            {/* { alter_ego !==  characters  && (<p>{characters}</p> )} */}

                            <CharactersByActor alter_ego={alter_ego} characters={characters}/>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to= {`/hero/${id}`}> Mas...</Link>
                            


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}