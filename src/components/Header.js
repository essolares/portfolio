import React, { useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Icon } from '@iconify/react';
//import crescentMoon from '@iconify-icons/emojione-v1/crescent-moon';
//import sun from '@iconify-icons/emojione-v1/sun';
import crescentMoon from '@iconify-icons/twemoji/crescent-moon';
import sun from '@iconify-icons/twemoji/sun';



const Header = (props) => {
  let titles = [];
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange= (checked) => {
    setChecked(checked);
    setTheme();
  }

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  if (props.sharedData) {
    var name = props.sharedData.name;
    titles = props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
  }

  const HeaderTitleTypeAnimation = React.memo( () => {
    return <Typical className="title-styles" steps={titles} loop={50} />
  }, (props, prevProp) => true);

  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#0B0C10"
              onColor="#164990"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span>
                  <Icon icon={crescentMoon} className="iconify"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}/>
                </span>
              }
              checkedIcon={
                <span><Icon icon={sun} className="iconify"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}/></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
