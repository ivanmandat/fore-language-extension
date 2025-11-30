# IEaxDataAreaExternalTransformations.RefreshSourcesAfterSave

IEaxDataAreaExternalTransformations.RefreshSourcesAfterSave
-


# IEaxDataAreaExternalTransformations.RefreshSourcesAfterSave


## Синтаксис


RefreshSourcesAfterSave: Boolean;


## Описание


Свойство RefreshSourcesAfterSave
 определяет признак необходимости переоткрыть источники данных после сохранения
 данных в них.


## Комментарии


Свойство актуально, если к отчёту подключены алгоритмы расчёта, которые
 срабатывают на сохранение данных. Более подробное описание по подключению
 алгоритмов представлено в примере «[Использование
 алгоритма расчёта для вычислений в отчётах](../../Samples/use_algo_for_calculate.htm)».


Допустимые значения:


	- True. Переоткрывать
	 источники данных;


	- False. Не переоткрывать
	 источники данных.


См. также:


[IEaxDataAreaExternalTransformations](IEaxDataAreaExternalTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
