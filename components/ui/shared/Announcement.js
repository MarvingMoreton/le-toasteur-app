import classes from './Announcement.module.css';
import Link from 'next/link';
import Image from 'next/image';
import foodAllergy from '../../../public/images/illustrations/allergie-food--1.jpg';
import foodAllergyTwo from '../../../public/images/illustrations/allergie-food--2.jpg';

import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandDots } from '@fortawesome/free-solid-svg-icons';

function Announcement(props) {
  return (
    <section className={`${classes['section-book-table']} ${'container'}`}>
      <div className={classes['container-book-table']}>
        <div className={classes['box-left']}>
          <div className={classes['box-left--text']}>
            <h2>Allergies </h2>
            <FontAwesomeIcon icon={faHandDots} />
          </div>
        </div>
        <div className={classes['box-right']}>
          <span>🤧</span>
          <h2>Nous prenons vos allergies à cœur</h2>
          <div className={classes['box-right-paragraphs']}>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          {/* <Link href="/menu">
            <a className="btn-primary">Notre menu</a>
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Announcement;
