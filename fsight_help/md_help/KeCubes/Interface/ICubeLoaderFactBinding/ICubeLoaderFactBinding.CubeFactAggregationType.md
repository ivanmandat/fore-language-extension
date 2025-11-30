# ICubeLoaderFactBinding.CubeFactAggregationType

ICubeLoaderFactBinding.CubeFactAggregationType
-


# ICubeLoaderFactBinding.CubeFactAggregationType


## Синтаксис


		CubeFactAggregationType: [CubeFactBindingAggregationType](../../Enums/CubeFactBindingAggregationType.htm);


## Описание


Свойство CubeFactAggregationType
 определяет тип агрегации, который будет применяться при загрузке данных.


## Комментарии


Если какие-либо поля источника не привязаны к измерениям, то может возникнуть
 ситуация, когда по одной координате куба будут доступны несколько значений
 факта. В этом случае для однозначного представления данных по факту можно
 в свойстве CubeFactAggregationType
 задать агрегацию, которая будет применяться для получения какого-либо
 одного значения.


По умолчанию свойству установлено значение [CubeFactBindingAggregationType.None](../../Enums/CubeFactBindingAggregationType.htm),
 при этом из источника будет загружаться первая запись.


## Пример


Пример использования приведён в описании [ICubeLoaderDimensionBinding.Fields](../ICubeLoaderDimensionBinding/ICubeLoaderDimensionBinding.Fields.htm).


См. также:


[ICubeLoaderFactBinding](ICubeLoaderFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
