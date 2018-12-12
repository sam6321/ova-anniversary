import React from 'react';
import any from './any.png';

class ShowMore extends React.Component {

    state = {show: false};

    onClick = () => {
        this.setState(state => ({show: !state.show}));
    };

    render()
    {
        return (
            <>
                <div className="show-more" onClick={this.onClick}>{this.props.title}</div>
                <div className={this.state.show ? "show" : "hide"}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default class extends React.Component {
    static title = "Any";
    static img = any;

    render() {
        return (
            <p>
                hi<br/>
                this year has been significant<br/>
                i don't feel like so much has happened in my life in the span of one year before<br/>
                thanks to the people in ova i've finally seen who i truly am, when before all i knew about myself is that<br/>
                i was intelligent and that's it<br/>
                every single one of you has helped me through rough times (see: the greek incident) and that only proves<br/>
                that we aren't just a community, we're friends.<br/>
                thanks to:<br/>
                cal, i've finally started to pursue dreams that felt so away (see: rap)
                <br/><br/>
                sayo, i've felt my worth
                <br/><br/>
                douwert, i've learned to somewhat express myself
                <br/><br/>
                snow, i've learned that even in the most rough conditions one can prevail
                <br/><br/>
                supared, i've learned that sleep is the most important thing in life (jk you're the coolest and nicest person i know and thanks to you i've learned that it's good to be good)
                <br/><br/>
                vase, i've got plans to watch jojo sometime soon
                <br/><br/>
                cake, i've learned to understand myself
                <br/><br/>
                kray, i've learned that stealth is not my juice and politics are more interesting than i thought
                <br/><br/>
                deelon and chr, i've learned that it's important to be yourself
                <br/><br/>
                those are just few from many examples of the lessons i've been taught over this year, some more important<br/>
                than the others, but all of them valuable for me<br/>
                year summary: this year was the best game-wise for me - i've got some games that were ages on my steam wishlist,<br/>
                my library got really enlargened, thanks steam<br/>
                but this year wasn't the best either - puberty catching up, the feeling of getting older, more things to<br/>
                worry about, school was really demanding + the happy little greek incident<br/>
                if i had to rate it, it's a solid 7<br/>
                above average, but not what would define a good year.<br/>
                Although, even through all the hardships we went through, we (OVA) survived everything. We can now safely say<br/>
                we did it, reddit<br/>
                - Remigiusz Jan Grzybowski aka any_key to the OVA, 22:07 UTC +1
                <br/><br/>

                <ShowMore title="NEXT-SECTION-IS-MEANT-TO-BE-READ-BY-CALMAXYS-ONLY">
                    <p>
                        szczerze, nie wiem od czego zacz¹æ. Okaza³eœ siê byæ dobrym przyjacielem, który nawet jeœli wie, ¿e nie umie pomóc, to siê stara.
                        Posiadliœmy strasznie podobne zainteresowania i przez okres tego ca³ego roku wydawa³o mi siê, ¿e jesteœ bli¿szy mnie ni¿ wszyscy inni.
                        Jesteœ osob¹, która potrafi dobrze dyskutowaæ na dany temat (przyk³ad: nasza dyskusja o half-life), a tak¿e potrafisz ¿artowaæ.
                        Nie masz pojêcia jak bardzo rodak na serwerze potrafi umiliæ same doœwiadczenie - to nie jest coœ czêsto spotykanego, zw³aszcza
                        w tak niszowych krêgach, jakimi jest fanbase DDLC. Pokaza³eœ mi to, co chcê robiæ dalej w ¿yciu.
                        Prawda jest taka, ¿e gdybyœ siê nie zgodzi³ na "Pierwsze Uderzenie", to nawet nie robi¹c nic mnie zmotywowa³eœ.
                        Zmotywowa³eœ mnie to pod¹¿ania za tym, czego chcê bez pesymistycznych myœli.
                        Potrafisz za¿artowaæ, masz rozum i godnoœæ cz³owieka.
                        Nie s¹ to puste s³owa - wartoœæ tej wypowiedzi ma podwy¿szyæ jêzyk polski tu zastosowany, abyœ wiedzia³,
                        ¿e to jest skierowane do ciebie. Nie jest to skierowane to obywatela OVA co siê zapl¹ta³ i polecia³ z pr¹dem.
                        Jest to skierowane do Bartosza Otfinowskiego (takie by³o twoje nazwisko, je¿eli mnie pamiêæ nie myli), aka Calmaxys.
                        Jak to mówi¹ w niektórych krêgach, trzymaj siê i z fartem, mordo
                        - Remigiusz Jan Grzybowski, aka any_key do Calmaxysa, 22:21 UTC+1
                    </p>
                </ShowMore>
                <br/><br/><br/>
            </p>
        );
    }
}