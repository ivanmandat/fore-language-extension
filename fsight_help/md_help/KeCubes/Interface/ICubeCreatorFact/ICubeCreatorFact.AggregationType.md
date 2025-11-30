# ICubeCreatorFact.AggregationType

ICubeCreatorFact.AggregationType
-


# ICubeCreatorFact.AggregationType


## Синтаксис


		AggregationType: [CubeFactBindingAggregationType](../../Enums/CubeFactBindingAggregationType.htm);


## Описание


Свойство AggregationType определяет
 тип агрегации на источнике данных.


## Комментарии


Если какие-либо поля источника не привязаны к измерениям, то может возникнуть
 ситуация, когда по одной координате куба будут доступны несколько значений
 факта. В этом случае для однозначного представления данных по факту можно
 в свойстве AggregationType задать
 агрегацию, которая будет применяться для получения какого-либо одного
 значения.


По умолчанию свойству установлено значение [CubeFactBindingAggregationType.None](../../Enums/CubeFactBindingAggregationType.htm),
 при этом из источника будет загружаться первая запись.


## Пример


Пример использования приведен в описании свойства [Table](ICubeCreatorFact.Table.htm).


См. также:


[ICubeCreatorFact](ICubeCreatorFact.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
