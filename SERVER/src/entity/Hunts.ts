import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Series } from "./Series";
import { Emails } from "./Emails";

@Entity()
@Unique("UQ_HUNT_SERIES", ["emails", "series"])
export class Hunts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  completed: boolean;

  @Column("simple-array")
  marker_map: string[];

  @ManyToOne(type => Series)
  @JoinColumn({ name: "series_id" })
  series: Series;
  // optional?
  @ManyToOne(type => Emails)
  @JoinColumn({ name: "emails_id" })
  emails: Emails;
}
