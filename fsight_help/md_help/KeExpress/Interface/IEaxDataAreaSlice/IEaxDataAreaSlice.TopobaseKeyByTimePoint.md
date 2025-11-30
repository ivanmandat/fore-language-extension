# IEaxDataAreaSlice.TopobaseKeyByTimePoint

IEaxDataAreaSlice.TopobaseKeyByTimePoint
-


# IEaxDataAreaSlice.TopobaseKeyByTimePoint


## Синтаксис


TopobaseKeyByTimePoint(Value: Integer): Integer;


## Параметры


Value. Индекс точки временной
 шкалы.


## Описание


Свойство TopobaseKeyByTimePoint
 возвращает ключ топоосновы, которая отображается в указанной точке временной
 шкалы.


## Комментарии


Отображение различных топооснов в разных точках временной шкалы доступно,
 если используется версионное территориальное измерение. В этом измерении
 для элементов, актуальных в определенный период времени, указываются различные
 значения по атрибуту TOPO_ID. В качестве значений данного атрибута указываются
 ключи топооснов репозитория.


## Пример


Использование свойства приведено в примере для [IEaxDataAreaSlice.TopobaseByTimePoint](IEaxDataAreaSlice.TopobaseByTimePoint.htm).


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
