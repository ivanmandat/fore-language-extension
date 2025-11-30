# PivotFilterTransformDialogLeftPanel.TreeDragStart

PivotFilterTransformDialogLeftPanel.TreeDragStart
-


# PivotFilterTransformDialogLeftPanel.TreeDragStart


## Синтаксис


TreeDragStart: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TreeDragStart
 наступает после начала перетаскивания из дерева в левой панели.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).А так же должен быть вызван экземпляр компонента [PivotFilterTransformDialog](../PivotFilterTransformDialog/Constructor_PivotFilterTransformDialog.htm).


window.transformDialog._LeftPanelContent.TreeDragStart.add(
function (){
console.log("Произошло перетаскивание из дерева.")
});


После выполнения примера в консоли будет выведено сообщение:


"Произошло перетаскивание из дерева."


См. также:


[PivotFilterTransformDialogLeftPanel](PivotFilterTransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
