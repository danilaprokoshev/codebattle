import socket from '../../socket';
import { fetchGameList } from '../actions';

const channelName = 'lobby';
const channel = socket.channel(channelName);

export const fetchState = () => (dispatch) => {
  channel.join()
    .receive('ignore', () => console.log('Lobby channel: auth error'))
    .receive('error', () => console.log('Lobby channel: unable to join'))
    .receive('ok', ({ games }) => dispatch(fetchGameList({ games })));
};
