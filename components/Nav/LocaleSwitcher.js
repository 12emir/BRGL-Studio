const LocaleSwitcher = () => {
  return (
    <div
      className='locale-switcher text-black mt-48 ml-48'
      style={{ zIndex: "999900" }}
    >
      <motion.span onClick={() => i18n.changeLanguage("pl")}>PL</motion.span>
      <span onClick={() => i18n.changeLanguage("en")}>EN</span>
    </div>
  );
};
export default LocaleSwitcher;
