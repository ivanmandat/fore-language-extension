# ICachedDataset.RecordsBufferThreshold

ICachedDataset.RecordsBufferThreshold
-


# ICachedDataset.RecordsBufferThreshold


## Синтаксис


RecordsBufferThreshold: Integer;


## Описание


Свойство RecordsBufferThreshold
 определяет пороговое количество записей в кеше.


## Комментарии


Данное свойство используется, если заранее известно количество загружаемых
 записей, для ограничения размера памяти, выделяемой под кеш. По умолчанию
 память выделяется для 8192 записей. При преодолении порогового значения,
 размер кеша автоматически увеличивается.


См.также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
