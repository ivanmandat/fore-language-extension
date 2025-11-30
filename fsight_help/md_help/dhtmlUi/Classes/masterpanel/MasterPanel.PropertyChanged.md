# MasterPanel.PropertyChanged

MasterPanel.PropertyChanged
-


# MasterPanel.PropertyChanged


## Синтаксис


PropertyChanged: function (sender,args)


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: объект класса
 [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления [PP.Exp.Ui.ControlType](dhtmlExpress.chm::/Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - настройки, TypeUpdateData - тип обновляемых данных, задаваемый
 с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](dhtmlExpress.chm::/Enums/ViewTypeUpdate.htm),
 Callback - возвратная функция.


## Описание


Событие PropertyChanged наступает
 после изменения настроек панели мастера.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Обработаем событие
 PropertyChanged:


// Получаем мастер управления отметкой в измерениях
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Отображаем панель
dimBarMaster.show();
// Получаем текущую панель
var masterPanel = dimBarMaster.getActivePanel();
// Получим массив пользовательских элементов меню
masterPanel.PropertyChanged.add(function (sender, args) {
console.log("Измененное свойство: " + args.getPropertyName()); });

В результате выполнения примера после наступления события PropertyChanged
 (например, изменения типа текущего измерения) в консоли браузера было
 выведено наименование измененного свойства.


См. также:


[MasterPanel](MasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
