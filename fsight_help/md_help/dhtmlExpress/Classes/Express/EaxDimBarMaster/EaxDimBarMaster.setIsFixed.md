# EaxDimBarMaster.setIsFixed

EaxDimBarMaster.setIsFixed
-


**


# EaxDimBarMaster.setIsFixed


## Синтаксис


setIsFixed(meta);


## Параметры


*meta.* Метаданные. Представляет собой JSON-объект со следующими свойствами: dimKey - ключ фиксируемого измерения, value - признак того, нужно фиксировать указанное измерение (true - нужно, false - не нужно).


## Описание


Метод setIsFixed** фиксирует измерение в мастере управления отметкой.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Зафиксируем измерение в мастере управления отметкой:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Покажем мастер управления отметкой
dimBarMaster.show();
// Получим ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var title = dimBarMaster.getPanelByDimKey(dimKey).getTitle();
// Выведем информацию об измерении
console.log("Key: " + dimKey + ", Title: " + title);
// Помечаем данное измерение как фиксированное
dimBarMaster.setIsFixed({ dimKey : dimKey, value : true });

В результате выполнения примера измерение «Социально-экономические показатели» было перемещено в группу «Фиксированные». В консоли браузера была выведена информация о данном измерении:


Key: 104, Title: Социально-экономические показатели


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
