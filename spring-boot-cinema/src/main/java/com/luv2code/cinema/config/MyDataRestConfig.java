package com.luv2code.cinema.config;

import com.luv2code.cinema.entity.Film;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
       //RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        HttpMethod[] theUnsupportedActions = { HttpMethod.PUT, HttpMethod.POST};

        //disable Http à methoods for film: Put ,POST , DELETE
        config.getExposureConfiguration()
                .forDomainType(Film.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
        //disable Httpà methoods for Catrgory film: Put ,POST , DELETE
        config.getExposureConfiguration()
                .forDomainType(Film.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // call an internal helper method
        exposeIds (config);

    }

    private void exposeIds(RepositoryRestConfiguration config) {
        // expose entity ids
        //get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        // create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();
        // get the entity types for the entities
        for (EntityType tempEntityType : entities){
            entityClasses.add(tempEntityType.getJavaType());
        }
        //expose the entity ids for the array of entity / domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);

    }
}
