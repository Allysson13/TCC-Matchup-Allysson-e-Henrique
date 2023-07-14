package model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
@Embeddable
public class ContactID implements Serializable {
    @Column(name = "id_user_1", nullable=false, updatable=false)
    private Long idUser1;

    @Column(name = "id_user_2", nullable=false, updatable=false)
    private Long idUser2;

    //encapsulation

    public Long getIdUser1() {
        return idUser1;
    }

    public Long getIdUser2() {
        return idUser2;
    }

    //methods

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

}
