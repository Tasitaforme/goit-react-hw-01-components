import css from "./Section.module.css"
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
      <section>
        {title && <h2 className={css.section_title}>{title}</h2>}
        {children}
      </section>
    );
};

Section.propTypes = {
  title: PropTypes.string,
};