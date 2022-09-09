import PropTypes from 'prop-types'
import css from 'components/FriendList/FriendList.module.css'

export const FriendList = ({friends}) => {
    console.log(friends)
    return (
        <ul className="friend-list">
            
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={css.status}></span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{ friend.name}</p>
                </li>
    )) }
            
</ul>
    )
}