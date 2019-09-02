$(document).ready(function(){
    //櫃子
    $('.closetExpand').click(function(){
        $('.closets').css('left', '0');
    });
    $('.closetClose').click(function(){
        $('.closets').css('left', '-100%');
        $('.clothEquipped').css('z-index', '6');
        $('.weaponEquipped').css('z-index', '5');
        $('.accessoryEquipped').css('z-index', '4');
    });
    $('.tabClothes').click(function(){
        $('.clothEquipped').css('z-index', '6');
        $('.weaponEquipped').css('z-index', '5');
        $('.accessoryEquipped').css('z-index', '4');
    });
    $('.tabWeapons').click(function(){
        $('.clothEquipped').css('z-index', '4');
        $('.weaponEquipped').css('z-index', '6');
        $('.accessoryEquipped').css('z-index', '5');
    });
    $('.tabAccessories').click(function(){
        $('.clothEquipped').css('z-index', '5');
        $('.weaponEquipped').css('z-index', '4');
        $('.accessoryEquipped').css('z-index', '6');
    });
    $('.weaponFire').click(function(){
        $('.weaponEquip img').attr('src', 'img/weaponFire.png');
    });
    $('.weaponGuitar').click(function(){
        $('.weaponEquip img').attr('src', 'img/weaponGuitar.png');
    });
    
    $('.closetClothesExpand').click(function(){
        if($('.closetClothesExpand').text() == '展開衣櫃'){
            $('.closetClothesExpand').text('X');
            $('.closetClothesExpand').css('width', '0%');
            $('.closetClothesExpand').css('left', '100%');
            $('.closetClothesExpand').css('padding', '86px 10px');
            $('.closetClothes').css('width', '100%');
            $('.clothEquipped').css('width', '100%');
        }else{
            $('.closetClothes').css('width', '300%');
            $('.clothEquipped').css('width', '33.3%');
            $('.closetClothesExpand').css('padding', '86px 0');
            $('.closetClothesExpand').css('left', '33.3%');
            $('.closetClothesExpand').css('width', '33.3%');
            $('.closetClothesExpand').text('展開衣櫃');
        }
    });
    $('.closetWeaponsExpand').click(function(){
        if($('.closetWeaponsExpand').text() == '展開武器櫃'){
            $('.closetWeapons').css('width', '100%');
            $('.weaponEquipped').css('width', '100%');
            $('.closetWeaponsExpand').text('收合武器櫃');
        }else{
            $('.closetWeapons').css('width', '300%');
            $('.weaponEquipped').css('width', '33.3%');
            $('.closetWeaponsExpand').text('展開武器櫃');
        }
    });
    $('.closetAccessoriesExpand').click(function(){
        if($('.closetAccessoriesExpand').text() == '展開飾品櫃'){
            $('.closetAccessories').css('width', '100%');
            $('.accessoryEquipped').css('width', '100%');
            $('.closetAccessoriesExpand').text('收合飾品櫃');
        }else{
            $('.closetAccessories').css('width', '300%');
            $('.accessoryEquipped').css('width', '33.3%');
            $('.closetAccessoriesExpand').text('展開飾品櫃');
        }
    });
    //商店
    $('.storesExpand').click(function(){
        $('.stores').css('right', '0');
    });
    $('.storesClose').click(function(){
        $('.stores').css('right', '-100%');
        $('.storeClothes').css('z-index', '3');
        $('.storeWeapons').css('z-index', '2');
        $('.storeAccessories').css('z-index', '1');
    });
    $('.storeTabClothes').click(function(){
        $('.storeClothes').css('z-index', '3');
        $('.storeWeapons').css('z-index', '2');
        $('.storeAccessories').css('z-index', '1');
    });
    $('.storeTabWeapons').click(function(){
        $('.storeClothes').css('z-index', '1');
        $('.storeWeapons').css('z-index', '3');
        $('.storeAccessories').css('z-index', '2');
    });
    $('.storeTabAccessories').click(function(){
        $('.storeClothes').css('z-index', '2');
        $('.storeWeapons').css('z-index', '1');
        $('.storeAccessories').css('z-index', '3');
    });
    $('.storeClothesExpand').click(function(){
        if($('.storeClothesExpand').text() == '展開衣服商店'){
            $('.clothesInStore').css('width', '100%');
            $('.storeClothes').css('width', '100%');
            $('.storeClothesExpand').text('收合衣服商店');
        }else{
            $('.clothesInStore').css('width', '300%');
            $('.storeClothes').css('width', '33.3%');
            $('.storeClothesExpand').text('展開衣服商店');
        }
    });
    $('.storeWeaponsExpand').click(function(){
        if($('.storeWeaponsExpand').text() == '展開武器商店'){
            $('.weaponsInStore').css('width', '100%');
            $('.storeWeapons').css('width', '100%');
            $('.storeWeaponsExpand').text('收合武器商店');
        }else{
            $('.weaponsInStore').css('width', '300%');
            $('.storeWeapons').css('width', '33.3%');
            $('.storeWeaponsExpand').text('展開武器商店');
        }
    });
    $('.storeAccessoriesExpand').click(function(){
        if($('.storeAccessoriesExpand').text() == '展開飾品商店'){
            $('.accessoriesInStore').css('width', '100%');
            $('.storeAccessories').css('width', '100%');
            $('.storeAccessoriesExpand').text('收合飾品商店');
        }else{
            $('.accessoriesInStore').css('width', '300%');
            $('.storeAccessories').css('width', '33.3%');
            $('.storeAccessoriesExpand').text('展開飾品商店');
        }
    });
});