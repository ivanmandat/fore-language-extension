# EaxDimBarMaster.refresh

EaxDimBarMaster.refresh
-


# EaxDimBarMaster.refresh


## Синтаксис


refresh();


## Описание


Метод refresh обновляет представления
 по ключу измерения, либо по параметрам события [PropertyChanged](EaxDimBarMaster.PropertyChanged.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим измерения в мастере
 и получим список их ключей:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отобразим мастер на панели свойств
dimBarMaster.show();
// Получим массив измерений
var dims = dimBarMaster.getCurrentState().dims.its.it;
// Обновим все измерения
dimBarMaster.refreshSelections(dims);
// Выведем ключи всех измерений в мастере
var keys = "";
for(var i = 0; i < dims.length; i++) {
    keys += dims[i].k;
    keys += " ";
};
console.log("Keys: " + keys);
//Обновим мастер управления отметкой
dimBarMaster.refresh();

В результате выполнения данного примера будут обновлены измерения в
 мастере, а в консоли браузера будут выведены их ключи:


Keys: 1646 2038 1824 2042


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
