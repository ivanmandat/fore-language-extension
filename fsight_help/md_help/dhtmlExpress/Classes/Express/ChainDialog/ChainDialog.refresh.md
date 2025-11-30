# ChainDialog.refresh

ChainDialog.refresh
-


# ChainDialog.refresh


## Синтаксис


refresh();


## Описание


Метод refresh обновляет диалог
 цепочки расчета.


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
// Получим формулы
dialog.refresh()

В результате выполнения примера диалог цепочки расчета был обновлен.


См. также:


[ChainDialog](ChainDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
