import React from "react";
import { styled } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { color } from "../../utilities/themes";

const Loading = ({ loading }) => {
  return !loading ? null : (
    <LoadingWheel>
      <CircularProgress variant="indeterminate" />
    </LoadingWheel>
  );
};

const LoadingWheel = styled("div")({
  backgroundColor: color.primary_palette.white,
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  opacity: 0.8,
  zIndex: 2000
});

export default Loading;
