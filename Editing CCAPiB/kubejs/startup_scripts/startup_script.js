// #######################################################################################
// #######################################################################################
//                                         Mod Names
// #######################################################################################
// #######################################################################################
Platform.mods.kubejs.name = 'kubejs'
// #######################################################################################
// #######################################################################################
//                                         Blocks
// #######################################################################################
// #######################################################################################
StartupEvents.registry('block', event => {

})

// #######################################################################################
// #######################################################################################
//                                         Items
// #######################################################################################
// #######################################################################################
StartupEvents.registry('item', event => {
    // mold initialisation
    event.create('blank_sand_mold').maxStackSize(1).displayName('Sand Blank Mold').tag('createmetallurgy:sand_molds')

    event.create('ingot_sand_mold').maxStackSize(1).displayName('Sand Ingot Mold').tag('createmetallurgy:sand_molds')

    event.create('nugget_sand_mold').maxStackSize(1).displayName('Sand Nugget Mold').tag('createmetallurgy:sand_molds')

    event.create('plate_sand_mold').maxStackSize(1).displayName('Sand Plate Mold').tag('createmetallurgy:sand_molds')

    event.create('rod_sand_mold').maxStackSize(1).displayName('Sand Rod Mold').tag('createmetallurgy:sand_molds')

    event.create('gear_sand_mold').maxStackSize(1).displayName('Sand Gear Mold').tag('createmetallurgy:sand_molds')

    event.create('sand_mold_mix').displayName('Sand Mold Mix')
})

// #######################################################################################
// #######################################################################################
//                                         Fluids
// #######################################################################################
// #######################################################################################
StartupEvents.registry('fluid', event => {
    event.create('molten_andesite_alloy')
    .displayName('Molten Andesite Alloy')
    .tint(0x3F76E4)
    .type(type => type
        .renderType('solid')
        .stillTexture('kubejs:block/example_block')
        .flowingTexture('kubejs:block/example_block')
        .canSwim(false)
        .canDrown(false)
        .density(3000)
        .viscosity(6000))
})