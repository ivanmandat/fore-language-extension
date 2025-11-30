# IImportRequestResultEx

IImportRequestResultEx
-


# IImportRequestResultEx


## Описание


Интерфейс IImportRequestResultEx
 содержит расширенные свойства для работы с отчетом об импорте показателей.


## Комментарии


Если для справочников базы данных временных рядов заданы [правила](KeRds.chm::/Interface/IMetaDataRules/IMetaDataRules.htm),
 то при импорте будет осуществляться проверка на соответствие условиям
 этих правил. При нарушении каких-либо условий правил будет формироваться
 массив, в который будут занесены ключи импортируемых показателей. После
 импорта сформированный массив ключей можно получить в свойстве [InvalidFactors](IImportRequestResultEx.InvalidFactors.htm)
 данного интерфейса.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [InvalidFactors](IImportRequestResultEx.InvalidFactors.htm)
		 Свойство InvalidFactors
		 возвращает массив ключей показателей, при импорте которых произошла
		 ошибка.


## Свойства, унаследованные от [IImportRequestResult](../IImportRequestResult/IImportRequestResult.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Log](../IImportRequestResult/IImportRequestResult.Log.htm)


		 Свойство Log возвращает
		 отчет об импорте показателей.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
