import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

const Footer = ({ t }) => (
  <div className='flex justify-between items-center p-4 '>
    <p>{t("description")}</p>
  </div>
);
Footer.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("footer")(Footer);
