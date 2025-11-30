# EaxToolBarView.ObjectStateChanged

EaxToolBarView.ObjectStateChanged
-


**


# EaxToolBarView.ObjectStateChanged


## Синтаксис


ObjectStateChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - метаданные, TypeUpdateData - тип обновляемых данных, задаваемый
 с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Описание


Событие ObjectStateChanged**
 наступает после изменения состояния объекта.


## Комментарии


В текущем контексте событие наступает после изменения состояния кнопки
 (выбрана/не выбрана) из группы других кнопок, предназначенных для выбора
 режима представления данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие ObjectStateChanged:


// Получим представление группы кнопок для выбора режима отображения данных
var toolBar = expressBox.getDataView().getToolBarView();
toolBar.ObjectStateChanged.add(
function(sender, args) {
     if (args.getMetadata().chart.visible) {
         alert("Диаграмма активна.");
     }
     else {
         alert("Диаграмма не активна.");
     }
});
// Делаем активной кнопку «Диаграмма»
toolBar.setActiveObject(PP.Exp.Ui.EaxObjectType.Chart);

После выполнения данного примера активной будет кнопка «Диаграмма» и
 сработает событие ObjectStateChanged,
 которое выведет в браузере сообщение о том, что активна диаграмма.


См. также:


[EaxToolBarView](EaxToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
