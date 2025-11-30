# ITabRange.CopyToStream

ITabRange.CopyToStream
-


# ITabRange.CopyToStream


## Синтаксис


CopyToStream(DestStream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


DestStream. Поток, в который
 осуществляется копирование.


## Описание


Метод CopyToStream копирует
 данные диапазона в указанный поток.


## Комментарии


В поток копируется все содержимое диапазона: значения ячеек, формулы,
 оформление, комментарии.


Примечание.
 Перед копированием необходимо очистить поток с целью избежания некорректного
 копирования и смешивания с данными, которые могут содержаться в потоке.


Используется только в настольном приложении.


## Пример


Пример использования приведен в описании методов [ITabRange.PasteFromStream](ITabRange.PasteFromStream.htm),
 [ITabRange.PasteFromStreamEx](ITabRange.PasteFromStreamEx.htm).


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
