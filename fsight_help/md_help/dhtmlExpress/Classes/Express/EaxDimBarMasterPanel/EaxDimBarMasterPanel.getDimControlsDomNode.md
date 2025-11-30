# EaxDimBarMasterPanel.getDimControlsDomNode

EaxDimBarMasterPanel.getDimControlsDomNode
-


# EaxDimBarMasterPanel.getDimControlsDomNode


## Синтаксис


getDimControlsDomNode();


## Описание


Метод getDimControlsDomNode возвращает
 DOM-вершину содержимого панели.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим ключ первого измерения
 и выведем в консоль информацию о классах DOM-вершины:


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var masterPanel = dimBarMaster.getPanelByDimKey(dimKey);
// Получаем DOM-вершину содержимого панели
var dom = masterPanel.getDimControlsDomNode();
console.log("Key: %s, Dom: %s", dimKey, dom.className);
В результате выполнения примера в консоли браузера будет выведена информация
 о ключе и наименования классов DOM-вершины:


Key: 10152, Dom: PPMasterPanel


См. также:


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
