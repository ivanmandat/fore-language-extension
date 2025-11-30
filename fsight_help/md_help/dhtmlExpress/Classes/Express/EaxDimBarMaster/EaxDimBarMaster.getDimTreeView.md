# EaxDimBarMaster.getDimTreeView

EaxDimBarMaster.getDimTreeView
-


**


# EaxDimBarMaster.getDimTreeView


## Синтаксис


getDimTreeView(key: Number);


## Параметры


*key.* Ключ измерения.


## Описание


Метод getDimTreeView** возвращает представление дерева измерений в мастере управления отметкой.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим представление дерева одного из измерений в мастере управления отметкой , запретим в нем множественный выбор, а также выведем заголовок панели с помощью ключа измерения:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Покажем мастер управления отметкой
dimBarMaster.show();
// Получим ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var title = dimBarMaster.getPanelByDimKey(dimKey).getTitle();
console.log("Key: " + dimKey + ", Title: " + title);
// Получим дерево измерений
var tree = dimBarMaster.getDimTreeView(dimKey).getControl();
// Запретим множественный выбор в измерении с ключом dimKey
tree.setMultiSelect(false);

В результате выполнения примера в измерении с ключом 1646 и заголовком «Страны» будет запрещен множественный выбор, а в консоли браузера будет выведена информация о данном измерении:


Key: 1646, Title: Страны


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
