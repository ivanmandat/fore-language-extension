# TotalCount

TotalCount
-


# TotalCount


## Синтаксис


TotalCount: Number


## Описание


Свойство TotalCount определяет
 максимальное количество элементов справочника.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим максимальное
 количество элементов справочника:


eax = expressBox.getSource();
// Получим измерение с индексом 1
dim = eax.getDims()[1];
// Получим максимальное количество элементов
console.debug(dim.getTotalCount());
// -> 119
В результате выполнения примера в консоль было выведено максимальное
 количество элементов справочника с индексом 1.


См. также:


[DimSourceSettings](DimSourceSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
