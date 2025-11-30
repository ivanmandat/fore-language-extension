# IIOStreamClass.FromVariant

IIOStreamClass.FromVariant
-


# IIOStreamClass.FromVariant


## Синтаксис


FromVariant(Value: Variant): [IIOStream](../IIOStream/IIOStream.htm);


## Параметры


Value.
 Значение, которое необходимо поместить в поток.


## Описание


Метод FromVariant создает поток
 и заносит в него данные, передаваемые посредством параметра Value.


## Комментарии


В качестве значения параметра Value
 могут передаваться объекты, унаследованные от [IIOStream](../IIOStream/IIOStream.htm).


Также FromVariant используется
 для работы с полями источников данных, имеющих пользовательский тип данных.
 Для получения значений полей укажите в параметре Value
 значение, полученное в свойстве [IDatasetInstanceField.Value](KeDb.chm::/Interface/IDatasetInstanceField/IDatasetInstanceField.Value.htm)
 или [IDalCursorField.Value](Dal.chm::/Interface/IDalCursorField/IDalCursorField.Value.htm).
 При этом содержимое поля будет загружено в поток.


Примечание.
 При работе с некоторыми СУБД, если поток создан на базе поля, полученного
 из курсора, то [размер потока](../IIOStream/IIOStream.Size.htm)
 может отражаться некорректно. Для получения верного значения создайте
 поток в [памяти](../IMemoryStream/IMemoryStream.htm) и [скопируйте](../IIOStream/IIOStream.CopyFrom.htm)
 в него содержимое текущего потока.


См. также:


[IIOStreamClass](IIOStreamClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
