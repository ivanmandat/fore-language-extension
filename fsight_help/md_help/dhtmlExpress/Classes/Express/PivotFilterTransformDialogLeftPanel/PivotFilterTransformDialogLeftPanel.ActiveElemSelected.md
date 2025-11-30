# PivotFilterTransformDialogLeftPanel.ActiveElemSelected

PivotFilterTransformDialogLeftPanel.ActiveElemSelected
-


# PivotFilterTransformDialogLeftPanel.ActiveElemSelected


## Синтаксис


ActiveElemSelected: function (sender, args);


## Параметры


Sender. Источник события;


Args. Информация о событии.


## Описание


Событие ActiveElemSelected выделения
 активного элемента в дереве наступает после загрузки редактора формул.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). А также должен быть вызван экземпляр
 компонента [PivotFilterTransformDialog](../PivotFilterTransformDialog/Constructor_PivotFilterTransformDialog.htm).


window.transformDialog._LeftPanelContent.ActiveElemSelected.add(
function(){
console.log("Был выделен элемент в дереве.")
});
После выполнения примера в консоли будет выведено сообщение о выделении
 элемента в дереве.


См. также:


[PivotFilterTransformDialogLeftPanel](PivotFilterTransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
