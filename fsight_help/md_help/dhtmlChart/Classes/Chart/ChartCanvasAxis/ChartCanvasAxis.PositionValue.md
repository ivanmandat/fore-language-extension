# ChartCanvasAxis.PositionValue

ChartCanvasAxis.PositionValue
-


# ChartCanvasAxis.PositionValue


## Синтаксис


PositionValue: Number;


## Описание


Свойство PositionValue определяет
 расположение оси относительно области построения диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и возвращается с помощью метода
 getPositionValue(withoutLogic).
 Параметр withoutLogic. При значении
 true возвращает сохраненное в
 свойстве значение, при значении false
 вычисляет текущее положение в зависимости от значения свойства [ChartCanvasAxis.Position](ChartCanvasAxis.Position.htm).


Свойство применяется, если значение свойства [ChartCanvasAxis.Position](ChartCanvasAxis.Position.htm)
 равно «custom».


## Пример


Пример использования приведён на странице «[Пример
 создания точечной диаграммы](../../../Components/Chart/ChartScatter.htm)».


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
