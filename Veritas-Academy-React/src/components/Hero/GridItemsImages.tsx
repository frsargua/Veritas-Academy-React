import { Grid } from "@mui/material";

import ClassroomImg from "../../assets/images/classroomStockImage.jpg";
import KidImg from "../../assets/images/kidStockImage.jpg";
import ZoomImg from "../../assets/images/zoomStockImage.png";

export function GridItemsImages() {
  function GridItemComponent(url: string) {
    return (
      <Grid
        component="img"
        item
        xs={4}
        sx={{ objectFit: "cover", height: 350 / 2 }}
        src={`${url}`}
      />
    );
  }

  return (
    <>
      {GridItemComponent(ClassroomImg)}
      {GridItemComponent(KidImg)}
      {GridItemComponent(ZoomImg)}
      {GridItemComponent(ClassroomImg)}
      {GridItemComponent(KidImg)}
      {GridItemComponent(ZoomImg)}
    </>
  );
}
