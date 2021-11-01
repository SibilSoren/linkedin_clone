import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, getDocs, setDoc, FieldValue, addDoc } from 'firebase/firestore/lite';

const Feed = () => {
    const [input, setInput] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(async () => {

    }, [])
    const sendPost = async (e) => {
        e.preventDefault();

    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => {
                            setInput(e.target.value)
                            console.log(input);
                        }} />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="orange" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="gray" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="lightgreen" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            })}
            <Post name="Sibil Sarjam" description="This is a description" message="This is a message" />

        </div>
    )
}

export default Feed
