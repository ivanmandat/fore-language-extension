# PivotFilterTransformDialogLeftPanel.TreeDblClick

PivotFilterTransformDialogLeftPanel.TreeDblClick
-


# PivotFilterTransformDialogLeftPanel.TreeDblClick


## Синтаксис


TreeDblClick: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TreeDblClick наступает
 после двойного щелчка по элементу в дереве левой панели.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).А так же должен быть вызван экземпляр компонента [PivotFilterTransformDialog](../PivotFilterTransformDialog/Constructor_PivotFilterTransformDialog.htm).


window.transformDialog._LeftPanelContent.TreeDblClick.add(
function (){
console.log("Произошло двойное нажатие на элемент.")
});


После выполнения примера в консоли будет выведено сообщение:


"Произошло двойное нажатие на элемент."


См. также:


[PivotFilterTransformDialogLeftPanel](PivotFilterTransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
