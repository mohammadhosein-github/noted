import React from "react";
import { v4 as uuid_v4 } from "uuid";
import { useSelector } from "react-redux";

export default function AllNotes() {
  const notes_data = useSelector((state) => state.Notes);
  const all_notes_settings = useSelector((state) => state.Settings.all_notes);

  const bg_color = { background: all_notes_settings.background_color };
  const bg_img = {
    backgroundImage: `url("${all_notes_settings.background_image}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div
      className="main-panel"
      style={all_notes_settings.background_image !== null ? bg_img : bg_color}
    >
      <div className="all-notes pt-5 px-5">
        <div className="header">
          <h1
            className="title"
            style={{
              color: all_notes_settings.page_title_color,
              fontSize: "3rem",
            }}
          >
            All Notes
          </h1>
          <p
            className="mb-0"
            style={{ color: all_notes_settings.page_des_color }}
          >
            Add your notes with + sign and edit it by clicking on it.
          </p>
          <p style={{ color: all_notes_settings.page_des_color }}>
            You can customize theme different elements in setting section.
          </p>
          <button className="add-note btn p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 103 103"
            >
              <g id="iconfinder_plus_1814113" transform="translate(-8.1 -8.1)">
                <g id="Icon-Plus" transform="translate(8.1 8.1)">
                  <path
                    id="Fill-38"
                    d="M31.6-166.9a51.5,51.5,0,0,1-51.5-51.5,51.5,51.5,0,0,1,51.5-51.5,51.5,51.5,0,0,1,51.5,51.5,51.5,51.5,0,0,1-51.5,51.5Zm0-97.4a46.074,46.074,0,0,0-45.9,45.9,46.074,46.074,0,0,0,45.9,45.9,46.074,46.074,0,0,0,45.9-45.9,46.074,46.074,0,0,0-45.9-45.9Z"
                    transform="translate(19.9 269.9)"
                    fill={all_notes_settings.plus_color}
                  />
                  <path
                    id="Fill-39"
                    d="M-8.7-247.4H45.5v6.1H-8.7Z"
                    transform="translate(33.102 295.85)"
                    fill={all_notes_settings.plus_color}
                  />
                  <path
                    id="Fill-40"
                    d="M2.6-258.7H8.7v54.2H2.6Z"
                    transform="translate(45.85 283.102)"
                    fill={all_notes_settings.plus_color}
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className="row">
          {notes_data.notes.map((item) => (
            <div className="col-lg-6 col-xl-4" key={uuid_v4()}>
              <div className="note-card mb-4">
                <h3>{item.title}</h3>
                <div className="card-description-container">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
