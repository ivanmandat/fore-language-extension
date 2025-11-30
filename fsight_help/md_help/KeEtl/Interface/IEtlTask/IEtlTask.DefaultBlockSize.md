# IEtlTask.DefaultBlockSize

IEtlTask.DefaultBlockSize
-


# IEtlTask.DefaultBlockSize


## Синтаксис


DefaultBlockSize: Integer;


## Описание


Свойство DefaultBlockSize определяет
 количество записей, обрабатываемых в рамках одного пакета.


## Комментарии


Свойство актуально, если свойству [IEtlTask.PartialFetch](IEtlTask.PartialFetch.htm)
 установлено значение True. Если
 свойству DefaultBlockSize установлено значение -1, то размер пакета вычисляется
 автоматически.


Если свойство [IEtlPlainDataProvider.FetchBlockSize](../IEtlPlainDataProvider/IEtlPlainDataProvider.FetchBlockSize.htm)
 принимает какое-нибудь значение, то оно перекрывает значение данного свойства.


## Пример


Использование свойства приведено в примере для [IEtlTask.PartialFetch](IEtlTask.PartialFetch.htm).


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
