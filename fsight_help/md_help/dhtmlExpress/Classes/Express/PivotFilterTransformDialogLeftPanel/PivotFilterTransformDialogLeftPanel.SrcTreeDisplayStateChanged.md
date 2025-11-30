# PivotFilterTransformDialogLeftPanel.SrcTreeDisplayStateChanged

PivotFilterTransformDialogLeftPanel.SrcTreeDisplayStateChanged
-


# PivotFilterTransformDialogLeftPanel.SrcTreeDisplayStateChanged


## Синтаксис


SrcTreeDisplayStateChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SrcTreeDisplayStateChanged
 наступает после изменения режима отображения дерева в левой панели (отметка\метаданные).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)).А так же должен быть вызван экземпляр компонента [PivotFilterTransformDialog](../PivotFilterTransformDialog/Constructor_PivotFilterTransformDialog.htm).


window.transformDialog._LeftPanelContent.SrcTreeDisplayStateChanged.add(
function (){
console.log("Произошло изменение режима отображения.")
});


После выполнения примера в консоли будет выведено сообщение:


"Произошло изменение режима отображения."


См. также:


[PivotFilterTransformDialogLeftPanel](PivotFilterTransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
