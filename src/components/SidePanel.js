import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BrandLogo from "../media/brand-logo.png";
import AllNotesIcon from "../media/navigation-bar/all-notes.svg";
import RecentNotesIcon from "../media/navigation-bar/recent-notes.svg";
import ToDoListIcon from "../media/navigation-bar/to-do-list.svg";
import SettingIcon from "../media/navigation-bar/settings.svg";

export default function SidePanel() {
  const navbar_settings = useSelector((state) => state.Settings.navigation_bar);

  const navigation_items = [
    {
      title: "all notes",
      url: "all_notes",
      icon: AllNotesIcon,
      alt: "all_notes_icon",
    },
    {
      title: "recent notes",
      url: "recent_notes",
      icon: RecentNotesIcon,
      alt: "recent_notes_icon",
    },
    {
      title: "to do list",
      url: "to_do_list",
      icon: ToDoListIcon,
      alt: "to_do_list_icon",
    },
    {
      title: "settings",
      url: "settings",
      icon: SettingIcon,
      alt: "setting_icon",
    },
  ];

  return (
    <div className="side-panel pt-5">
      <div className="d-block brand-logo">
        <img
          src={
            navbar_settings.application_logo === ""
              ? BrandLogo
              : navbar_settings.application_logo
          }
          alt="app_logo"
          style={{ width: "180px" }}
        />
      </div>

      <div className="navigation-items">
        {navigation_items.map((item) => (
          <Link
            key={item.title}
            to={`./${item.url}`}
            className="d-block each-item"
          >
            <img src={item.icon} alt={item.alt} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>

      <div className="navigation-footer">
        <p className="mb-0">Fully customizable note app</p>
        <p>Created by Mohammadhosein</p>
      </div>
    </div>
  );
}
