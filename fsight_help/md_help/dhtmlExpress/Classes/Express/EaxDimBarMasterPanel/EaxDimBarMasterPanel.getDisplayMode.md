# EaxDimBarMasterPanel.getDisplayMode

EaxDimBarMasterPanel.getDisplayMode
-


# EaxDimBarMasterPanel.getDisplayMode


## Синтаксис


getDisplayMode();


## Описание


Метод getDisplayMode возвращает
 режимы работы компонента для отображения измерения.


## Комментарии


Режим работы принимает значения:


		 Значение
		 Описание


		 0
		 Elements. Режим работы
		 с элементами измерения.


		 1
		 CalendarPeriod. Режим
		 работы в режиме выбора диапазона дат, доступен только для календарного
		 измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим ключ первого измерения
 и выведем в консоль информацию о режиме работы компонента:


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
var masterPanel = dimBarMaster.getPanelByDimKey(dimKey);
// Получаем режим работы компонента для отображения измерения
var displayMode = masterPanel.getDisplayMode();
console.log("Key: %s, displayMode: %s", dimKey, displayMode);
В результате выполнения примера в консоли браузера будет выведена информация
 о ключе и режиме работы компонента для отображения измерения:


Key: 10152, displayMode : 0


См. также:


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
