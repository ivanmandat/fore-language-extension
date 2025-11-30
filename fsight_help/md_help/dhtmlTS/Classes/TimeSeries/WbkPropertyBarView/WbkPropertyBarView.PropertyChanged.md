# WbkPropertyBarView.PropertyChanged

WbkPropertyBarView.PropertyChanged
-


# WbkPropertyBarView.PropertyChanged


## Синтаксис


PropertyChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает после окончания изменения свойств рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем события PropertyChanged, [PropertyChanging](WbkPropertyBarView.PropertyChanging.htm) и [RequestMetadata](WbkPropertyBarView.RequestMetadata.htm), а затем программно вызовем их:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Определим обработчики событий изменения настроек панели свойств и запроса метаданных
var onChanged = function (sender, args) {
    console.log(args.Args);
};
var onChanging = function (sender, args) {
    console.log(args.Args);
};
// Обработаем события PropertyChanging, PropertyChanged и RequestMetadata
propertyBar.PropertyChanging = new PP.Delegate(onChanging, this, "Property changing.");
propertyBar.PropertyChanged = new PP.Delegate(onChanged, this, "Property changed.");
propertyBar.RequestMetadata = new PP.Delegate(onChanged, this, "Request of metadata.");
// Вызовем данные события
propertyBar.PropertyChanging.fire(this);
propertyBar.PropertyChanged.fire(this);
propertyBar.RequestMetadata.fire(this);

После выполнения примера были вызваны события PropertyChanged, [PropertyChanging](WbkPropertyBarView.PropertyChanging.htm) и [RequestMetadata](WbkPropertyBarView.RequestMetadata.htm), в результате чего в консоли браузера были выведены соответствующие уведомления:


Property changing.


Property changed.


Request of metadata.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
