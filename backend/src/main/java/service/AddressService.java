package service;

import model.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import repository.AddressRepository;
@Service
public class AddressService {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {this.addressRepository = addressRepository;}

    public Address saveAddress(Address addressToSave){
        return addressRepository.save(addressToSave);
    }

    public Page<Address> findByPartOfTheStreet(String partOfTheStreet){
        return addressRepository.findByPartOfTheStreet(partOfTheStreet);
    }

}
