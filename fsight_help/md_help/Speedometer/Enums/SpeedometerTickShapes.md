# SpeedometerTickShapes

SpeedometerTickShapes
-


# SpeedometerTickShapes


## Описание


Перечисление SpeedometerTickShapes содержит формы делений шкалы спидометра.


Используется следующим свойством:


-
[ISpeedometerTickInfo.Shape](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Shape.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 Linear. Линейные деления.


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается высота делений.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) не используется.


 1
 Circle. Круглые деления.


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается диаметр круга.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) не используется.


 2
 Rombus. Ромбовидные деления.


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается длина стороны ромба.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) определяет отношение диагоналей ромба.


 3
 Rect. Прямоугольные деления (в отличие от линейных, имеют толщину).


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается высота прямоугольника.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) определяет отношение ширины и высоты прямоугольника.


 4
 TrapOutside. Деления в виде трапеции вершиной наружу.


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается высота трапеции.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) определяет отношение длины большего основания к длине высоты трапеции.


 5
 TrapInside. Деления в виде трапеции вершиной внутрь.


-
в свойстве [Height](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Height.htm) задается высота трапеции.


-
свойство [Proportion](../Interface/ISpeedometerTickInfo/ISpeedometerTickInfo.Proportion.htm) определяет отношение длины большего основания к длине высоты трапеции.


См. также:


[Перечисления сборки Speedometer](Speedometer_EnumsList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
