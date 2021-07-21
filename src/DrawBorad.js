import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import React, { useRef } from "react";
import { useParams } from 'react-router-dom';

const myTheme = {
  // Theme object to extends default dark theme.
};

const MyComponent = () => {
  const editorRef = useRef(null);
  const { userName } = useParams();

  console.log('userName' , userName)

  const handleClickButton = () => {
    const editorInstance = editorRef.current.getInstance();
    console.log("editorRef.current", editorRef);
    console.log("editorInstance", editorInstance);

    // let jsonString = JSON.stringify(editorInstance);
    // console.log(jsonString);
    // if (boradSync.length > 0) {
    //   boradSync.delete(0, boradSync.length);
    // }
    // boradSync.insert(0, [jsonString]);

    // editorInstance.getCanvasJson();
  };

  return (
    <>
      <button onClick={handleClickButton}>Flip image by X Axis!</button>
      <ImageEditor
        ref={editorRef}
        includeUI={{
          loadImage: {
            path: "",
            name: "SampleImage"
          },
          theme: myTheme,
          menu: [
            "crop",
            "flip",
            "rotate",
            "draw",
            "shape",
            "icon",
            "text",
            "mask",
            "filter"
          ],
          initMenu: "filter",
          uiSize: {
            width: "1000px",
            height: "700px"
          },
          menuBarPosition: "bottom"
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70
        }}
        usageStatistics={true}
      />
    </>
  );
};

export default MyComponent;
