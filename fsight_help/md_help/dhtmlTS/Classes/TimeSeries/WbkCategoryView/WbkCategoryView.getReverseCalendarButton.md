# WbkCategoryView.getReverseCalendarButton

WbkCategoryView.getReverseCalendarButton
-


# WbkCategoryView.getReverseCalendarButton


## Синтаксис


getReverseCalendarButton();


## Описание


Метод getReverseCalendarButton возвращает кнопку «Обратный календарь» на ленте инструментов рабочей книги.


## Комментарии


Метод возвращает значение типа [PP.Ui.RibbonButton](dhtmlRibbon.chm::/Classes/RibbonButton/RibbonButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Переименуем кнопку «Обратный календарь» на ленте инструментов рабочей книги:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим категорию «Главная» ленты инструментов
var mainCategory = ribbon.getMainCategory();
// Получим кнопку «Обратный календарь»
var reverseCalendarButton = mainCategory.getReverseCalendarButton();
// Переименуем данную кнопку
reverseCalendarButton.setContent("В обратном порядке");

В результате выполнения примера кнопка «Обратный календарь» на ленте инструментов рабочей книги стала называться «В обратном порядке»:


![](WbkCategoryView_getReverseCalendarButton.png)


См. также:


[WbkCategoryView](WbkCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
