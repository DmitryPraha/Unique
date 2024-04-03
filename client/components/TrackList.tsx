import React from 'react';
import {ITrack} from "@/types/track";
//import {Box, Grid} from "@material-ui/core";
//import {Book} from "@material-ui/icons";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {

    return (
       <div>
           {tracks.map(track =>
               <TrackItem
                   key={track.id}
                   track={track}
               />
           )}
       </div>
    );
};

export default TrackList;
