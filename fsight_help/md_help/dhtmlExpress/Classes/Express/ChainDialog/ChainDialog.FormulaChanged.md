# ChainDialog.FormulaChanged

ChainDialog.FormulaChanged
-


# ChainDialog.FormulaChanged


## Синтаксис


FormulaChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие FormulaChanged наступает
 после изменения формулы в диалоге.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Добавим событие для диалога :


// Получим ленту инструментов
ribb = expressBox.getRibbonView();
// Получим вкладку ленты инструментов
cat = ribb.getTableCategory();
// Получим диалог цепочки расчета
dialog = cat.getChainDialog();
// Обрабатываем событие FormulaChanged
dialog.FormulaChanged.add(
    function(sender, args) {
        console.log(args);
    }
);

В результате выполнения примера при наступлении события в консоль будут
 выведены аргументы события.


См. также:


[ChainDialog](ChainDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
