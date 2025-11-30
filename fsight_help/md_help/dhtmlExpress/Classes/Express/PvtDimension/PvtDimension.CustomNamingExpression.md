# PvtDimension.CustomNamingExpression

PvtDimension.CustomNamingExpression
-


# PvtDimension.CustomNamingExpression


## Синтаксис


CustomNamingExpression: String;


## Описание


Свойство CustomNamingExpression
 определяет выражение пользовательского наименования.


## Комментарии


Значение свойства CustomNamingExpression
 можно устанавливать из JSON и с помощью метода setCustomNamingExpression,
 а возвращать - при помощи свойства getCustomNamingExpression.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Экспресс отчет должен содержать
 частные измерения.


// Получим измерение
pDim = eaxAnalyzer.getDims()[2];
// Установим пользовательское наименование
pDim.setCustomNamingExpression("Элемент: %NAME%");
pDim.setUseCustomNaming(true);

В результате выполнения примера было установлено пользовательское наименование
 для элементов справочника.


См. также:


[PvtDimension](PvtDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
