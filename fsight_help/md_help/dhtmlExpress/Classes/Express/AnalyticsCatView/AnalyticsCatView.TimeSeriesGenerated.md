# AnalyticsCatView.TimeSeriesGenerated

AnalyticsCatView.TimeSeriesGenerated
-


# AnalyticsCatView.TimeSeriesGenerated


## Синтаксис


TimeSeriesGenerated: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TimeSeriesGenerated
 наступает после создания объекта, используя кнопку «Анализ
 временных рядов».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Откроем в отчете вкладку «Расширенная
 аналитика» и введем в консоли следующий код:


// Получим ленту инструментов
ribbon = expressBox.getRibbonView();
// Получим вкладку Расширенная аналитика
analyticCat = ribbon.getAnalyticsCategory();
// Добавим событие
analyticCat.TimeSeriesGenerated.add(function(sender, args){
  console.log(args);
});
В результате выполнения примера было добавлено событие.


См. также:


[AnalyticsCatView](AnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
