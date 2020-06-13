import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import Message from '../../Components/Message/Message';
import { useQuery, useLazyQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const GET_MESSAGES = gql`
  query getMessages($filter: MessageFilter, $order: SortOrder) {
    messages(filter: $filter, order: $order) {
      id
      body
      flow
      recipient {
        id
      }
      sender {
        id
      }
    }
  }
`;

const CREATE_MESSAGE = gql`
	mutation createMessage($input: MessageInput!) {
		createMessage(input: $input) {
			message {
				id
				body
				flow
			}
			errors {
				key
				message
			}
		}
	}
`;

const Dashboard = () => {

  const [messages, setMessages] = useState(null);
  const { loading, error, data } = useQuery(GET_MESSAGES);
  const [createMessage] = useMutation(CREATE_MESSAGE, {
    update(cache, { data: { createMessage } }) {
      // const messages: any = cache.readQuery({ query: GET_MESSAGES });
      // cache.writeQuery({
      // 	query: GET_MESSAGES,
      // 	data: { messages: messages.messages.concat(createMessage.message) },
      // });
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setMessages(data.messages);
    }
  }, [data]);
  if (loading) return 'Loading...';
  if (error) return 'Error :(';

  const userId = 1;

  const sendMessage = (e) => {
    e.preventDefault();
    const payload = {
      body: e.target.content.value,
      recipientId: 2,
      senderId: 1,
      type: "TEXT",
      flow: "OUTBOUND",
      // waStatus: "DELIVERED"
    }
    setMessages([
      ...messages,
      payload
    ]);
    createMessage({
      variables: {
        input: payload
      }
    });
    e.target.content.value = '';
  }

  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className={styles.MessagesFrame}>
        {messages && messages.map((message, index) => {
          if (message.senderId === userId) {
            return <Message key={index} message={message} userId={userId} />;
          }
          return <Message key={index} message={message} userId={userId} />;
        })}
        <form className={styles.MessageSendForm} onSubmit={sendMessage}>
          <input type="text" name="content" placeholder="Type a message..." className={styles.FormControl} />
          <button type="submit" className={styles.SendButton}>&#10140;</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard;
