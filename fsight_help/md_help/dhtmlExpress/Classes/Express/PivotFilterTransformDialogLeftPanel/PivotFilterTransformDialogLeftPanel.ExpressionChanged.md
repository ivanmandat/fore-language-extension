# PivotFilterTransformDialogLeftPanel.ExpressionChanged

PivotFilterTransformDialogLeftPanel.ExpressionChanged
-


# PivotFilterTransformDialogLeftPanel.ExpressionChanged


## Синтаксис


ExpressionChanged: function (sender, args);


## Параметры


Sender. Источник события;


Args. Информация о событии.


## Описание


Событие ExpressionChanged наступает
 после изменения выражения в редакторе формул.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). А также должен быть вызван экземпляр
 компонента [PivotFilterTransformDialog](../PivotFilterTransformDialog/Constructor_PivotFilterTransformDialog.htm).


window.transformDialog._LeftPanelContent.ExpressionChanged.add(

function (){
console.log("Было изменено выражение.")
});


В результате выполнения примера в окне консоли будет выведено сообщение
 об изменении выражения.


См. также:


[PivotFilterTransformDialogLeftPanel](PivotFilterTransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
