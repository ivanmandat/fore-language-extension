# EaxDimBarMasterPanel.DimServiceMenuItems

EaxDimBarMasterPanel.DimServiceMenuItems
-


# EaxDimBarMasterPanel.DimServiceMenuItems


## Синтаксис


DimServiceMenuItems: Array;


## Описание


Свойство DimServiceMenuItems
 содержит пользовательские элементы меню измерения.


## Комментарии


Значение свойства задается через JSON, возвращается при помощи метода
 getDimServiceMenuItems.


Пользовательские элементы меню будут расположены перед стандартными.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим панель в мастере управления
 отметкой:


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем текущую панель
var masterPanel = dimBarMaster.getActivePanel();
// Получим массив пользовательских элементов меню
masterPanel.getDimServiceMenuItems();
В результате выполнения примера были получены пользовательские элементы
 меню.


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
