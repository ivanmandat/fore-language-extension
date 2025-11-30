# WbkCategoryView.PropertyChanged

WbkCategoryView.PropertyChanged
-


# WbkCategoryView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm), содержащий следующие свойства: PropertyName - наименование свойства, Metadata - метаданные, TypeUpdateData - тип обновляемых данных.


## Описание


Событие PropertyChanged наступает после изменения настроек в ленте инструментов рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем событие PropertyChanged, выводя в консоли браузера наименование изменённого свойства ленты инструментов рабочей книги:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим категорию «Главная» ленты инструментов
var mainCategory = ribbon.getMainCategory();
// Обработаем событие PropertyChanged
mainCategory.PropertyChanged.add(function (sender, args) {
    console.log("Наименование изменённого свойства: " + args.getPropertyName());
});

Выполним приведённый пример и нажмём на кнопку «Заголовок», расположенную на вкладке «Главная» . В результате этого в консоли браузера будет выведено наименование изменённого свойства ленты инструментов:


Наименование изменённого свойства: TitleVisible


См. также:


[WbkCategoryView](WbkCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
