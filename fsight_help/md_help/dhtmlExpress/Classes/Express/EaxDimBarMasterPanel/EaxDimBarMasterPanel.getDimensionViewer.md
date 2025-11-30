# EaxDimBarMasterPanel.getDimensionViewer

EaxDimBarMasterPanel.getDimensionViewer
-


# EaxDimBarMasterPanel.getDimensionViewer


## Синтаксис


getDimensionViewer();


## Описание


Метод getDimensionViewer возвращает
 компонент отображения измерения в различных режимах управления отметкой.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим ключ первого измерения
 и выведем в консоль информацию о том, разрешена ли работа с деревом измерения
 (true - разрешена, false
 - запрещена):


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var masterPanel = dimBarMaster.getPanelByDimKey(dimKey);
// Получаем разрешение для работы с деревом измерения
var viewer = masterPanel.getDimensionViewer();
console.log("Key: %s, viewer: %s", dimKey, viewer.getAllowElements());
В результате выполнения примера в консоли браузера будет выведена информация
 о том, разрешена ли работа с деревом измерения:


Key: 10152, viewer : true


См. также:


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
