import React from 'react'

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2 className="">{props.title}</h2>
        </div>
        <div className="container">
            <h3 className="">So that the page was not empty, I quickly throw it away with non-kid quotes.</h3>
        </div>
        <div className="">
            <blockquote>
                -“Evil is evil, Stregobor,” the Witcher said seriously, getting up.<br />- The smaller, the larger, the middle — everything is one, the proportions are conditional, and the boundaries are blurred. I am not a holy hermit, not only one good did in life. But if you have to choose between one evil and another, I prefer not to choose at all.
                    <cite><br />
                        “Last Desire”, the story “Lesser Evil”, "Saga of the Witcher"
                    </cite>
            </blockquote>
            <blockquote>
                Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.
                    <cite><br />
                        "Nineteen Eighty-Four"
                    </cite>
            </blockquote>
            <blockquote>
                She was fifteen, but seemingly all thirty-five, Doc, although I was told that she was eighteen. It was impossible to pass by her, you understand what I mean. I would have to sew a fly. Between us, if you saw this redhead bitch, then you would understand me. Before her, no man would not have stood. And now they tell me that I am crazy, because I did not sit on the spot like a freaking vegetable. I would be crazy if I missed such a case. No more, no less.
                    <cite><br />
                        "One Flew Over the Cuckoo's Nest", McMurphy
                    </cite>
            </blockquote>
            <blockquote>
                We pay any debt to ourselves. In each of us sits the lender and the debtor at the same time. The main thing is to balance this bill. We come to the world as a particle of the given life, and then all the time we only know that we are paying the price. With myself. In order to finally come together balance.
                    <cite><br />
                        "Saga of the Witcher", Eitne
                    </cite>
            </blockquote>
            <blockquote>
                Twilight. The best time of the day and the most peaceful. Although the saddest thing, because it means the end of the day and the approach of the night
                <cite><br />
                    "Twilight", Edward Cullen
                </cite>
            </blockquote>
        </div>
    </div>
);

export default Home