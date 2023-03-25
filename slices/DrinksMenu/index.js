import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import DrinksBis from '../../components/ui/menu/DrinksBis';
import logoBlue from '../../public/images/logos/logo-toasteur-villeray-navy.png';
import classes from '../../components/ui/menu/DrinksBis.module.css';
import toastOrange from '../../public/images/logos/illustration-house-orange.png';

/**
 * @typedef {import("@prismicio/client").Content.DrinksMenuSlice} DrinksMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DrinksMenuSlice>} DrinksMenuProps
 * @param { DrinksMenuProps }
 */
const DrinksMenu = ({ slice }) => (
  <section className={classes['section-drinks-menu']}>
    <div className={`${classes['menu-grid']} ${'container'}`}>
      <div className={classes['box-text']}>
        <div className={classes['left-side']}>
          {/* <h2>BOISSON</h2> */}
          <PrismicRichText field={slice.primary.title} />
          <span>{slice.primary.description}</span>
        </div>
        <div className={classes['right-side-illustration']}>
          <PrismicNextImage
            field={slice.primary.illustration}
            alt={slice.primary.illustration}
            className="Illustration Le Toasyeut"
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes['menu-list']}>
        <div className={classes['left-grid']}>
          {/* ***************First box BLOCK ONEEE :*/}
          <div className={classes['upper-box']}>
            <span>{slice.primary.simpledouble}</span>
            {/** item **/}
            {slice.primary.topdrinkdescription1 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle1} />
                  <span>{slice.primary.topdrinkprice1}</span>
                </div>
                <p>{slice.primary.topdrinkdescription1}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription2 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle2} />
                  <span>{slice.primary.topdrinkprice2}</span>
                </div>
                <p>{slice.primary.topdrinkdescription2}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription3 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle3} />
                  <span>{slice.primary.topdrinkprice3}</span>
                </div>
                <p>{slice.primary.topdrinkdescription3}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription4 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle4} />
                  <span>{slice.primary.topdrinkprice4}</span>
                </div>
                <p>{slice.primary.topdrinkdescription4}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription5 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle5} />
                  <span>{slice.primary.topdrinkprice5}</span>
                </div>
                <p>{slice.primary.topdrinkdescription5}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription6 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle6} />
                  <span>{slice.primary.topdrinkprice6}</span>
                </div>
                <p>{slice.primary.topdrinkdescription6}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription7 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle7} />
                  <span>{slice.primary.topdrinkprice7}</span>
                </div>
                <p>{slice.primary.topdrinkdescription7}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription8 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle8} />
                  <span>{slice.primary.topdrinkprice8}</span>
                </div>
                <p>{slice.primary.topdrinkdescription9}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription10 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle10} />
                  <span>{slice.primary.topdrinkprice10}</span>
                </div>
                <p>{slice.primary.topdrinkdescription10}</p>
              </div>
            )}
            {/** item **/}
            {slice.primary.topdrinkdescription11 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.topdrinktitle11} />
                  <span>{slice.primary.topdrinkprice11}</span>
                </div>
                <p>{slice.primary.topdrinkdescription11}</p>
              </div>
            )}
          </div>

          {/* BOTTOM BOX HEEERE */}
          <div className={classes['bottom-box']}>
            {/** item **/}
            {slice.primary.btmdrinkdescription1 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle1} />
                  <span>{slice.primary.btmdrinkprice1}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription1}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription2 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle2} />
                  <span>{slice.primary.btmdrinkprice2}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription2}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription3 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle3} />
                  <span>{slice.primary.btmdrinkprice3}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription3}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription4 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle4} />
                  <span>{slice.primary.btmdrinkprice4}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription4}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription5 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle5} />
                  <span>{slice.primary.btmdrinkprice5}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription5}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription6 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle6} />
                  <span>{slice.primary.btmdrinkprice6}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription6}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription7 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle7} />
                  <span>{slice.primary.btmdrinkprice7}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription7}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription8 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle8} />
                  <span>{slice.primary.btmdrinkprice8}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription8}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription9 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle9} />
                  <span>{slice.primary.btmdrinkprice9}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription9}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription10 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle10} />
                  <span>{slice.primary.btmdrinkprice10}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription10}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription11 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle11} />
                  <span>{slice.primary.btmdrinkprice11}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription11}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription12 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle12} />
                  <span>{slice.primary.btmdrinkprice12}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription12}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription13 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle13} />
                  <span>{slice.primary.btmdrinkprice13}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription13}</p>
              </div>
            )}

            {/** item **/}
            {slice.primary.btmdrinkdescription14 && (
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <PrismicRichText field={slice.primary.btmdrinktitle14} />
                  <span>{slice.primary.btmdrinkprice14}</span>
                </div>
                <p>{slice.primary.btmdrinkdescription14}</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT GRID HERE */}
        <div className={classes['right-grid']}>
          {/* Items */}
          <div className={classes['item-card']}>
            <div className={classes['title-row-right']}>
              <h3>Jus pressé</h3>
              <span>5</span>
            </div>
            <p>orange, pamplemousse, 1/2-1/2</p>
          </div>
          {slice?.items?.map((item, i) => (
            <React.Fragment key={i}>
              <div className={classes['item-card']}>
                <div className={classes['title-row-right']}>
                  <PrismicRichText field={item.drinktitle} />
                  <span>{item.price}</span>
                </div>
                <span>{item.description}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className={classes['sentence']}>
          <span>{slice.primary.instruction}</span>
        </div>
      </div>
    </div>

    <div className={classes['logo-box']}>
      <Image
        className={classes['logo-blue-transparent']}
        src={logoBlue}
        alt="test"
        // layout="fill"
        // width={207}
        // height={106}
      />
    </div>
  </section>
);

export default DrinksMenu;
