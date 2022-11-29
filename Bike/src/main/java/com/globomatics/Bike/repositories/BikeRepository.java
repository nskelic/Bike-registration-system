package com.globomatics.Bike.repositories;


import com.globomatics.Bike.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository  extends JpaRepository<Bike, Long>{
}
