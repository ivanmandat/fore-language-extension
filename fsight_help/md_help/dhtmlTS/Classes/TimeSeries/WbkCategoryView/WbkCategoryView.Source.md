# WbkCategoryView.Source

WbkCategoryView.Source
-


# WbkCategoryView.Source


## Синтаксис


Source: PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm);


## Описание


Свойство Source определяет источник данных для базовой категории ленты инструментов рабочей книги.


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setSource, а возвратить - с помощью метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим ключ источника данных для базовой категории ленты инструментов:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим категорию «Главная» ленты инструментов
var mainCategory = ribbon.getMainCategory();
// Установим источник данных для данной категории, если он отсутствует
var source = mainCategory.getSource(); // Получим источник данных
if (source == null | source == undefined) {
    mainCategory.setSource(workbookBox.getSource());
    console.log("Ключ источника данных: " + mainCategory.getSource().getKey());
} else {
    console.log("Ключ источника данных: " + source.getKey());
};

В результате выполнения примера в консоли браузера был выведен ключ источника данных для базовой категории ленты инструментов в рабочей книге:


Ключ источника данных: 2944


См. также:


[WbkCategoryView](WbkCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
