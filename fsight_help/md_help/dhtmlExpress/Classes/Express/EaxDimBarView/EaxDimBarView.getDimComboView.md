# EaxDimBarView.getDimComboView

EaxDimBarView.getDimComboView
-


**


# EaxDimBarView.getDimComboView


## Синтаксис


getDimComboView(dimKey, sourceKey);


## Параметры


*dimKey.* Ключ измерения.


*sourceKey.* Ключ источника данных.


## Описание


Метод getDimComboView** возвращает представление раскрывающегося списка указанного измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим представление раскрывающегося списка одного из измерений, выведем наименование выбранного в списке элемента и запретим в нем множественный выбор:


var dimBar = expressBox.getPropertyBarView().getDimBarViewPanel();
// Покажем панель
dimBar.show();
// Раскроем панель
dimBar.expand(true);
// Получим ключ первого измерения
var dimKey = dimBar.getCurrentState().dims.its.it[0].k;
// Получим ключ источника данных
var srcKey = expressBox.getSource().getKey();
// Получим представление раскрывающегося списка с ключом dimKey
var combo = dimBar.getDimComboView(dimKey, srcKey.toString()).getControl();
// Получим выбранный элемент в раскрывающемся списке
var name = combo.getContent();
console.log(dimKey + ": " + name);
// Получим дерево измерений
var tree = dimBar.getDimTreeView(dimKey, srcKey.toString()).getControl();
// Запретим множественный выбор в раскрывающемся списке
tree.setMultiSelect(false);

В результате выполнения примера в раскрывающемся списке с ключом 1646 будет запрещен множественный выбор, а в консоли браузера будет выведено наименование выбранного элемента:


1646: Albania .. Saudi Arabia (132)


См. также:


[EaxDimBarView](EaxDimBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
