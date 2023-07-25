package service;

import model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import repository.MessageRepository;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository){this.messageRepository = messageRepository;}

    public Message saveUser(Message messageToSave){
        return messageRepository.save(messageToSave);
    }

    /*public Page<Message> findById(Long id){
        return messageRepository.findById(id);
    }*/

}
