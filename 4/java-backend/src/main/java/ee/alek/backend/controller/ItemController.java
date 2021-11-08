package ee.alek.backend.controller;

import ee.alek.backend.model.Item;
import ee.alek.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:3000")

public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItems(@RequestBody Item item) {
        itemService.saveItem(item);
        return "ese edukalt esitatud - " + item.getName();
    }

    @GetMapping("item/{id}")
    public String getItem(@PathVariable Long id) {
        return id+". "+itemService.getItem(id).getName();
    }

    @GetMapping("items/delete/{id}")
    public String deleteItem(@PathVariable Long id){
        String name = itemService.getItem(id).getName();
        itemService.deleteItem(itemService.getItem(id));
        return "item "+ id +" deleted - "+ name;
    }

}

