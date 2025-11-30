# AdvAnalyticsCatView.PropertyChanging

AdvAnalyticsCatView.PropertyChanging
-


# AdvAnalyticsCatView.PropertyChanging


## Синтаксис


PropertyChanging: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanging наступает
 перед изменением элемента управления вкладки.


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
// Добавим событие
analyticCat.PropertyChanging.add(function(sender, args){
  console.log(args);
});
В результате выполнения примера было добавлено событие.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
