import React, { useEffect } from "react";
import GooglePicker from "react-google-picker";
import { useAuth } from "../../auth/Auth";

function UploadData() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const heading = "Upload Data";
  const body = "Upload raw match data to the storage for advanced analytics.";
  const btntext = "Upload";

  return (
    <div className="card components" style={{ width: "18rem" }}>
      <img
        src="https://drive.google.com/uc?id=1LqQ0WaxM1n9hRJLVnNbqKHt1ymbbjq3e"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title component-name">{heading}</h5>
        <p className="card-text">{body}</p>
        <GooglePicker
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          developerKey={process.env.REACT_APP_GOOGLE_API_KEY}
          scope={["https://www.googleapis.com/auth/drive.file"]}
          onChange={(data) => console.log("on change:", data)}
          onAuthFailed={(data) => console.log("on auth failed:", data)}
          multiselect={true}
          navHidden={true}
          authImmediate={false}
          viewId={"DOCS"}
          mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
          createPicker={(google, oauthToken) => {
            const googleViewId = google.picker.ViewId.DOCS;
            const uploadView = new google.picker.DocsUploadView().setIncludeFolders(
              true
            );
            const docsView = new google.picker.DocsView(googleViewId)
              .setIncludeFolders(true)
              .setSelectFolderEnabled(true);

            const picker = new window.google.picker.PickerBuilder()
              .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
              .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
              .enableFeature(google.picker.Feature.MINE_ONLY)
              .addView(docsView)
              .addView(uploadView) /*DocsUploadView added*/
              .setOAuthToken(oauthToken)
              .setDeveloperKey(process.env.REACT_APP_GOOGLE_API_KEY)
              .setCallback((data) => {
                var url = "";
                if (data.action == google.picker.Action.PICKED) {
                  var doc = data.docs[0];
                  url = doc[google.picker.Document.URL];
                  var message = "You picked: " + url;
                  openInNewTab(url);
                }
              });
            picker.build().setVisible(true);
          }}
        >
          <a
            className="btn chk-btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {btntext}
          </a>
        </GooglePicker>
      </div>
    </div>
  );
}

export default UploadData;
// export default App;
