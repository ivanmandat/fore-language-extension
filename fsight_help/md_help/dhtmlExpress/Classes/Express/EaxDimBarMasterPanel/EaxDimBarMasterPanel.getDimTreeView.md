# EaxDimBarMasterPanel.getDimTreeView

EaxDimBarMasterPanel.getDimTreeView
-


**


# EaxDimBarMasterPanel.getDimTreeView


## Синтаксис


getDimTreeView();


## Описание


Метод getDimTreeView**
 возвращает дерево измерения на данной панели мастера управления отметкой.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим дерево измерения на
 одной из панелей в мастере управления отметкой и запретим в нем множественный
 выбор:


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var masterPanel = dimBarMaster.getPanelByDimKey(dimKey);
// Отключаем режим формирования пакета данных запроса для отправки серверу
masterPanel.setBatchMode(false);
var title = masterPanel.getTitle();
console.log("Key: %s, title: %s", dimKey, title);
// Получаем дерево измерения
var tree = masterPanel.getDimTreeView().getControl();
// Запрещаем множественный выбор в измерении с ключом dimKey и обновляем отметки на панели измерений
tree.setSelectionMode(PP.Ui.TreeListSelectionMode.SingleSelect);
masterPanel.refreshSelection();
В результате выполнения примера в дереве на панели, содержащей измерение
 с ключом 1646 и заголовком «Страны», будет запрещен множественный
 выбор, а в консоли браузера будет выведена информация о данном измерении:


Key: 1646, Title: Страны


Запросы серверу отсылались автоматически без формирования пакета данных.


См.
 также:


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
