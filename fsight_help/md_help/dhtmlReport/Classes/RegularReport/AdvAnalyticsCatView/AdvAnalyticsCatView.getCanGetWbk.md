# AdvAnalyticsCatView.getCanGetWbk

AdvAnalyticsCatView.getCanGetWbk
-


# AdvAnalyticsCatView.getCanGetWbk


## Синтаксис


getCanGetWbk();


## Описание


Метод getCanGetWbk определяет
 доступность функций, требующих базу данных временных рядов.


## Комментарии


Возвращаемое значение зависит от выбранной ячейки, если выделена ячейка
 загружена из базы данных временных рядов, то метод вернет значение true и станут доступны функции
 для работы с рабочей книгой и валидацией.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Откроем в отчете вкладку «Расширенная
 аналитика» и введем в консоли следующий код:


// Получим ленту инструментов
ribbon = reportBox.getRibbonView();
// Получим вкладку Расширенная аналитика
analyticCat = ribbon.getAnalyticsCategory();
// Получим доступность функций для работы с базой данных временных рядов
analyticCat.getCanGetWbk();
// -> false
В результате выполнения примера была определена доступность функций
 для работы с базой данных временных рядов.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
