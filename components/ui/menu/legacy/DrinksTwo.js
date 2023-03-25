import classes from './DrinksTwo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import toastOrange from '../../../public/images/logos/toast-orange.png';
import logoBlue from '../../../public/images/logos/logo-toasteur-villeray-navy.png';

function DrinksTwo(props) {
  return (
    <section className={classes['section-drinks']}>
      <div className={`${classes['menu-grid']} ${'container'}`}>
        <div className={classes['menu-list']}>
          <div className={classes['grid__left']}>
            <div className={classes['box__titles']}>
              <h2>BOISSONS</h2>
              <span>
                PLATS SERVIS AVEC RISSOLÉES & SALADE MATINALE *exception des
                poutines et des salades NOS PAINS PROVIENNENT DE LA BOULANGERIE
                ‘LE PAIN DANS LES VOILES’
              </span>
            </div>
            <div className={classes['upper-box']}>
              {/* item */}
              <span>Simple | Double</span>
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
            </div>

            {/* BOTTOM BOX */}
            <div className={classes['bottom-box']}>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
              {/* item */}
              <div className={classes['item-card']}>
                <div className={classes['title-row']}>
                  <h3>Expresso</h3>
                  <span>2.5 | 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* **** */}
          <div className={classes['grid__right']}>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
            {/* Items */}
            <div className={classes['item-card']}>
              <div className={classes['title-row-right']}>
                <h3>Jus pressé</h3>
                <span>5</span>
              </div>
              <p>orange, pamplemousse, 1/2-1/2</p>
            </div>
          </div>
        </div>
        <div className={classes['sentence']}>
          <span>
            * tous nos cafés sont servis avec choix de lait de vache ou lait
            d’avoine
          </span>
        </div>
      </div>
    </section>
  );
}

export default DrinksTwo;
