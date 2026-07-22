//#region Tags
// #######################################################################################
// #######################################################################################
//                                         Tags
// #######################################################################################
// #######################################################################################

// Blocks
ServerEvents.tags('block', event => {
    // #############################################################
    //                       Removing tags
    // #############################################################
    // remove all tags by Block ID
    [
        
    ].forEach((BlockID) => {event.removeAllTagsFrom((BlockID))});

    // #############################################################
    //                    Creating/Adding tags
    // #############################################################

})

// Items
ServerEvents.tags('item', event => {
    // #############################################################
    //                       Removing tags
    // #############################################################
    // remove all tags by Item ID
    [
        
    ].forEach((ItemID) => {event.removeAllTagsFrom((ItemID))});
    event.add('createmetallurgy:sand_molds');
    [
        'kubejs:blank_sand_mold',
        'kubejs:ingot_sand_mold',
        'kubejs:nugget_sand_mold',
        'kubejs:plate_sand_mold',
        'kubejs:gear_sand_mold',
        'kubejs:rod_sand_mold'
    ].forEach((MoldID) => {
        event.add('createmetallurgy:sand_molds', (MoldID))
    });
})
//#endregion

//#region Recipes
// #######################################################################################
// #######################################################################################
//                                         Recipes
// #######################################################################################
// #######################################################################################

ServerEvents.recipes(event => {
    // #############################################################
    //                       Removing recipes
    // #############################################################
    // Remove by recipe ID
    [
        'tfmg:casting/steel',
        'createmetallurgy:crafting/materials/graphite',
        'createmetallurgy:alloying/steel'
    ].forEach((RecipeID) => {event.remove({id: (RecipeID)})});

    // Remove by recipe Type
    [
        'createbigcannons:melting'
    ].forEach((TypeID) => {event.remove({type: (TypeID)})});

    // Remove by output ID
    [
        'createmetallurgy:steel_ingot',
        'cgs:steel_ingot',
        'createnuclear:steel_ingot',
        'createbigcannons:steel_ingot',
        'createmetallurgy:steel_block',
        'cgs:steel_block',
        'createnuclear:steel_block',
        'createbigcannons:steel_block',
        'createmetallurgy:steel_nugget',
        'cgs:steel_nugget',
        'createnuclear:steel_nugget',
        'createbigcannons:steel_nugget',
        'createmetallurgy:graphite_blank_mold',
        'createmetallurgy:graphite_ingot_mold',
        'createmetallurgy:graphite_nugget_mold',
        'createmetallurgy:graphite_plate_mold',
        'createmetallurgy:graphite_rod_mold',
        'createmetallurgy:graphite_gear_mold'
    ].forEach((OutputID) => {event.remove({output: (OutputID)})});

    // Remove by input ID
    [
        
    ].forEach((InputID) => {event.remove({input: (InputID)})});

    // Custom removing

    event.remove({input: Fluid.of('createbigcannons:molten_nethersteel') })

    // #############################################################
    //                  Vanilla crafting recipes
    // #############################################################

    // Add crafting recipes

    event.shaped('kubejs:sand_mold_mix', 
        [
            'AAA',
            'AAA',
            'AAB'
        ], 
        {
            A: '#c:sands',
            B: 'minecraft:clay_ball'
        }
    );

    // Add shapeless recipes
    
    // Add stonecutter recipes
    [
        'kubejs:ingot_sand_mold',
        'kubejs:nugget_sand_mold',
        'kubejs:plate_sand_mold',
        'kubejs:rod_sand_mold',
        'kubejs:gear_sand_mold'
    ].forEach((MoldID) => {event.stonecutting((MoldID), 'kubejs:blank_sand_mold')});

    [
        'createmetallurgy:graphite_ingot_mold',
        'createmetallurgy:graphite_nugget_mold',
        'createmetallurgy:graphite_plate_mold',
        'createmetallurgy:graphite_rod_mold',
        'createmetallurgy:graphite_gear_mold'
    ].forEach((MoldID) => {event.stonecutting((MoldID), 'createmetallurgy:graphite_blank_mold')})


    // #############################################################
    //                       Create recipes
    // #############################################################

    // Compacting recipes

    event.recipes.create.compacting('kubejs:blank_sand_mold', 'kubejs:sand_mold_mix')
    event.recipes.create.compacting('createmetallurgy:graphite_blank_mold', 'createmetallurgy:graphite')
    // Crushing recipes

    // Cutting recipes

    // Deploying recipes

    // Emptying recipes

    // Filling recipes

    // Haunting recipes

    // Mechanical Crafting recipes

    // Milling recipes

    // Mixing recipes

    // Pressing recipes

    // Sandpaper Polishing recipes

    // Sequenced Assembly recipes

    // Splashing/Washing recipes

    // #############################################################
    //                       TFMG recipes
    // #############################################################

    // Casting recipes

    // Coking recipes

    // Distillation recipes

    // Industrial Blasting recipes

    // Polarizing recipes

    // Winding recipes

    // Hot blasting recipes

    // Chemical Vat recipes

    // #############################################################
    //                   Create Metallurgy recipes
    // #############################################################

    // Alloying recipes
    event.recipes.createmetallurgy.alloying(Fluid.of('createmetallurgy:molten_steel', 360), [Fluid.of('createmetallurgy:molten_iron', 360), 'tfmg:coal_coke'], 200)
    event.recipes.createmetallurgy.alloying(Fluid.of('createbigcannons:molten_nethersteel', 720), [Fluid.of('createmetallurgy:molten_steel', 360), 'minecraft:netherite_scrap'], 400)
    event.recipes.createmetallurgy.alloying(Fluid.of('createbigcannons:molten_nethersteel', 720), [Fluid.of('createbigcannons:molten_cast_iron', 720), 'minecraft:netherite_scrap'], 500)
    
    // Bulk Melting recipes

    // Casting In Table recipes
    
    event.recipes.createmetallurgy.casting_in_table('tfmg:heavy_plate', [Fluid.of('createmetallurgy:molten_steel', 90), 'kubejs:plate_sand_mold'], 100, true)
    event.recipes.createmetallurgy.casting_in_table('tfmg:steel_ingot', [Fluid.of('createmetallurgy:molten_steel', 90), 'kubejs:ingot_sand_mold'], 100, true)
    event.recipes.createmetallurgy.casting_in_table('tfmg:heavy_plate', [Fluid.of('createmetallurgy:molten_steel', 90), 'createmetallurgy:graphite_plate_mold'], 100, false)
    event.recipes.createmetallurgy.casting_in_table('tfmg:steel_ingot', [Fluid.of('createmetallurgy:molten_steel', 90), 'createmetallurgy:graphite_ingot_mold'], 100, false)
    event.recipes.createmetallurgy.casting_in_table('tfmg:rebar', [Fluid.of('createmetallurgy:molten_steel', 45), 'kubejs:rod_sand_mold'], 50, true)

    // Casting In Basin recipes

    event.recipes.createmetallurgy.casting_in_basin('tfmg:steel_block', Fluid.of('createmetallurgy:molten_steel', 810), 900, false)

    // Entity Melting recipes

    // Grinding recipes

    // Melting recipes

    // #############################################################
    //                   Create Big Cannons recipes
    // #############################################################

    
    
})
//#endregion