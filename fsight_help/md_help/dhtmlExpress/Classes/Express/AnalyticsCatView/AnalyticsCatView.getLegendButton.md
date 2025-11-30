# AnalyticsCatView.getLegendButton

AnalyticsCatView.getLegendButton
-


# AnalyticsCatView.getLegendButton


## Синтаксис


getLegendButton();


## Описание


Метод getLegendButton возвращает
 кнопку легенды валидаций.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Откроем в отчете вкладку «Расширенная
 аналитика» и введем в консоли следующий код:


// Получим ленту инструментов
ribbon = expressBox.getRibbonView();
// Получим вкладку Расширенная аналитика
analyticCat = ribbon.getAnalyticsCategory();
// Получим кнопку легенды
analyticCat.getLegendButton();
// -> PP.Ui.RibbonButton {_IsLargeControl: false, _Events: Object, _typeName: "PP.Ui.RibbonButton", ContentChanged: PP.Delegate, _IsRTL: false…}
В результате выполнения была получена кнопка легенды валидаций.


См. также:


[AnalyticsCatView](AnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
