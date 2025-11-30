# GantDiagram.LineClick

GantDiagram.LineClick
-


# GantDiagram.LineClick


## Синтаксис


LineClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Line - объект линии, класса PP.Ui.GantLine.


## Описание


Событие LineClick генерируется
 при щелчке по элементу диаграммы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TreeGantDiagram](../TreeGantDiagram/TreeGantDiagram.htm) (см.
 «[Пример
 создания компонента TreeGantDiagram](../../Components/TreeGantDiagram/TreeGantExample.htm)»). Добавим событие:


// Получим диаграмму
Diag = GantD.getDiagram();
// Добавим событие
Diag.LineClick.add(function (sender, args) {
console.log(args);
});

В результате выполнения примера было добавлено событие, выводящее доступные
 аргументы в консоль.


См. также:


[GantDiagram](GantDiagram.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
