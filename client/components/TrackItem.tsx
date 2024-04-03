import React from 'react';
import {ITrack} from "@/types/track";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <div>
            <div>{track.domain}</div>
        </div>
    );
};

export default TrackItem;
