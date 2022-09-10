import PropTypes from 'prop-types'
import css from 'components/FriendList/FriendList.module.css'
// import { FriendListItem } from "./FriendListItem/FriendListItem"
// import friends from '../friends'

export const FriendList = ({friends}) => {
    console.log(friends)
    return (
        <ul className={css.friend_list}>
            
            {friends.map(({ id, avatar, name, isOnline }) => (
                
                <li className={css.item} key={id}>
                    <span className={css.status}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{ name}</p>
                </li>
    )) }
            
</ul>
    )
}

// export const FriendList = ({friends}) => {
//     console.log(friends)
//     return (
//         <ul className={css.friend_list}>
//             {friends.map(({id, avatar,name, isOnline}) => (
//                 <FriendListItem
//                     key={id}
//                     avatar={avatar}
//                     name={name}
//                     isOnline={isOnline}
//                 />
//             ))}
//         </ul>
//     )
// }

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.exact({
//         id: PropTypes.number.isRequired,
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired
//     }))
// }