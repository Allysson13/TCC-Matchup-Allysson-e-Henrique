package service;

import model.Friendship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import repository.FriendshipRepository;
@Service
public class FriendshipService {

    private final FriendshipRepository friendshipRepository;

    @Autowired
    public FriendshipService(FriendshipRepository friendshipRepository) {this.friendshipRepository = friendshipRepository;}

    public Friendship saveAddress(Friendship friendshipToSave){
        return friendshipRepository.save(friendshipToSave);
    }

    /*public Page<Friendship> findById(Long id){
        return friendshipRepository.findById(id);
    }*/

}
