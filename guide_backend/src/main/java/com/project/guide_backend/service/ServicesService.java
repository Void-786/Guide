package com.project.guide_backend.service;

import com.project.guide_backend.modal.Services;
import com.project.guide_backend.repository.ServicesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ServicesService {

    private final ServicesRepository servicesRepo;

    public Services createService(Services service) {
        return servicesRepo.save(service);
    }

    public Services getServiceById(String id) {
        return servicesRepo.findById(id).orElse(null);
    }

    public Services updateService(Services service) {
        Services existingService = servicesRepo.findById(service.getId()).orElse(null);
        if (existingService != null) {
            existingService.setMentorId(service.getMentorId());
            existingService.setServiceName(service.getServiceName());
            existingService.setDescription(service.getDescription());
            existingService.setPrice(service.getPrice());
            existingService.setDuration(service.getDuration());
            existingService.setAvailable(service.isAvailable());
            return servicesRepo.save(existingService);
        }
        return null;
    }

    public void deleteService(String id) {
        servicesRepo.deleteById(id);
    }

    public List<Services> getAllServices() {
        return servicesRepo.findAll();
    }

    public List<Services> getServicesByMentorId(String mentorId) {
        return servicesRepo.findByMentorId(mentorId);
    }
}
