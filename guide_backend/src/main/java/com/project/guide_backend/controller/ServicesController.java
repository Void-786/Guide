package com.project.guide_backend.controller;

import com.project.guide_backend.modal.Services;
import com.project.guide_backend.service.ServicesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/services")
public class ServicesController {

    private final ServicesService servicesService;

    @PostMapping("/add-service")
    @PreAuthorize("hasRole('MENTOR')")
    public ResponseEntity<Services> addService(Services service) {
        Services createdService = servicesService.createService(service);
        return ResponseEntity.ok(createdService);
    }

    @DeleteMapping("/delete-service")
    @PreAuthorize("hasRole('MENTOR')")
    public ResponseEntity<?> deleteService(Services service) {
        servicesService.deleteService(service.getId());
        return ResponseEntity.ok("Service deleted successfully");
    }

    @PostMapping("/update-service")
    @PreAuthorize("hasRole('MENTOR')")
    public ResponseEntity<Services> updateService(Services service) {
        Services updatedService = servicesService.updateService(service);
        return ResponseEntity.ok(updatedService);
    }

    @PostMapping("/get-service")
    public ResponseEntity<Services> getServiceById(String id) {
        Services service = servicesService.getServiceById(id);
        if (service != null) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/all-services")
    public ResponseEntity<List<Services>> getAllServices() {
        List<Services> services = servicesService.getAllServices();
        return ResponseEntity.ok(services);
    }
}
