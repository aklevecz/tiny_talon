import { Series, SeriesType } from "../entity/Series";
import { Hunts } from "../entity/Hunts";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Markers } from "../entity/Markers";

export const getRaptorsBySeries = async id => {
  const markerRepo = getRepository(Markers);
  const markers = await markerRepo
    .createQueryBuilder("markers")
    .leftJoin("markers.series", "series")
    .where("series.id = :id", { id })
    .getMany();

  return { markers };
};
export const getRaptorsMarkers = async (token, id) => {
  // GET THE HUNT.ID FROM THE URL?? OR IN THE BODY??
  const decoded = jwt.verify(token, process.env.SACRET);
  // it's a decent start
  // it at least should be structured where if they are already hunting
  // there is the smallest query time
  const huntsRepo = getRepository(Hunts);
  const hunt = await huntsRepo
    .createQueryBuilder("hunts")
    .leftJoinAndSelect("hunts.series", "series")
    .leftJoinAndSelect("series.markers", "markers")
    .leftJoinAndSelect("hunts.emails", "emails")
    .where("series.id = :sid", { sid: id })
    .andWhere("emails.id = :eid", { eid: decoded.id })
    .getOne();
  let markerMap = [];
  let markers = [];
  let completed = false;
  let success = false;

  if (hunt) {
    markerMap = hunt.marker_map;
    markers = hunt.series.markers;
    completed = hunt.completed;
    success = true;
  } else {
    const seriesRepo = getRepository(Series);
    const series = await seriesRepo
      .createQueryBuilder("series")
      .leftJoinAndSelect("series.markers", "markers")
      .where("series.id = :id", { id })
      .getOne();
    if (series && series.type === SeriesType.GLOBAL) {
      const hunt = new Hunts();
      hunt.emails = decoded.id;
      hunt.series = series;
      const huntRepo = getRepository(Hunts);
      await huntRepo.save(hunt);
      markers = series.markers;
      markerMap = hunt.marker_map;
      success = true;
    } else {
      // redunant?
      return { markers, markerMap, completed, success };
    }
  }
  return { markers, markerMap, completed, success };
};
