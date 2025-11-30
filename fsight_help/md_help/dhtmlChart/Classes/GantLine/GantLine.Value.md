# GantLine.Value

GantLine.Value
-


# GantLine.Value


## Синтаксис


Value : Object;


## Описание


Свойство Value определяет значение
 линии диаграммы Ганта.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setValue,
 а возвращается с помощью метода getValue.


Значение должно содержать объект со следующей структурой:


Value : {
    Operation : String, //  наименование
    StartTime : Date, // время начала
    Duration : Number // длительность в мс
}

## Пример


Использование свойства приведено на странице «[Пример
 создания компонента TreeGantDiagram](../../Components/TreeGantDiagram/TreeGantExample.htm)».


См. также:


[GantLine](GantLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
