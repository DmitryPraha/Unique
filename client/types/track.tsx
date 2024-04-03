export interface ITrack{
id:string;
domain:string;
login:string;
password:string;
isActive:boolean;
}

export interface TrackState {
    tracks: ITrack[];
    error: string;
}

export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}

interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS;
    payload: ITrack[]
}

interface FetchTracksErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR;
    payload: string
}

export type TrackAction = FetchTracksAction | FetchTracksErrorAction
