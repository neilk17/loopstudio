import React from "react";
import data from "../data-mobile"

const Creations = () => {
    const [cards, setCards] = React.useState(data)

    return (
      <section className="creations-mobile">
        <h2>Our creations</h2>
        <section>
          {cards.map((card) => {
            const {id, image, title} = card
            return (
              <article key={id}>
               <div>
                 <img src={require(`../images/${image}`)} alt="creations card" />
               </div>
               <h3>{title}</h3>
              </article>
            )
          })}
        </section>
      </section>
    )
}

export default Creations
