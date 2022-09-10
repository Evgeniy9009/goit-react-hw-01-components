import PropTypes from 'prop-types'
import { List } from './FriendList.styled'
import { FriendListItem } from "components/FriendListItem/FriendListItem"


export const FriendList = ({friends}) => {
    // console.log(friends)

    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
    )) }
            
</List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        }
    ))
    }
