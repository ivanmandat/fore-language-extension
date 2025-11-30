# ChainDialog.Source

ChainDialog.Source
-


# ChainDialog.Source


## Синтаксис


Source: PP.Exp.EaxDocument;


## Описание


Свойство Source определяет источник
 данных диалога.


## Комментарии


Значение свойства устанавливается из JSON и с помощью setSource,
 а возвращается с помощью метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).


// Получим ленту инструментов
ribb = expressBox.getRibbonView();
// Получим вкладку ленты инструментов
cat = ribb.getTableCategory();
// Получим диалог цепочки расчета
dialog = cat.getChainDialog();
// Получим источник данных
dialog.getSource()
// -> PP.Exp.EaxDocument {_Sheets: Object, _ActiveSheetKey: 23254, _DocumentMetadata: Object, _TabId: Object, _ChartId: Object…}

В результате выполнения примера был получен источник данных диалога.


См. также:


[ChainDialog](ChainDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
