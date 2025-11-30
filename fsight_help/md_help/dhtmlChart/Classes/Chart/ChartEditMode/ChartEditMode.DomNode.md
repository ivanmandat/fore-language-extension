# ChartEditMode.DomNode

ChartEditMode.DomNode
-


# ChartEditMode.DomNode


## Синтаксис


DomNode: PP.Ui.[Canvas](dhtmlGraphicBase.chm::/Classes/Canvas/Canvas.htm);


## Описание


Свойство DomNode определяет
 область отрисовки диаграммы в режиме редактирования.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getDomNode.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания компонента Chart](../../../Components/Chart/Chart_Example.htm)»). Получим размеры области отрисовки диаграммы
 в режиме редактирования:


// Получаем размеры области отрисовки диаграммы в режиме редактирования
console.log("Высота: " + chart.getToolTip().getDomNode().height);
console.log("Ширина: " + chart.getToolTip().getDomNode().width);
В результате в консоль были выведены размеры области отрисовки диаграммы
 в режиме редактирования:


Высота: 500


Ширина: 600


См. также:


[ChartEditMode](ChartEditMode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
