# IVariableStub.NameEx

IVariableStub.NameEx
-


# IVariableStub.NameEx


## Синтаксис


NameEx([FullName: Boolean = false]): String;


## Параметры


FullName. Признак того, возвращать
 ли полное наименование ряда. Необязательный параметр.


## Описание


Свойство NameEx возвращает
 наименование ряда по заданным параметрам.


## Комментарии


По умолчанию параметр FullName имеет
 значение False, т.е. NameEx будет возвращать наименование
 ряда идентичное свойству [INamedEntityModel.Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm).
 Если FullName = True, то NameEx будет возвращать наименование
 ряда в формате: <Имя рабочей книги>!<Имя
 ряда>.


## Пример


Использование свойства приведено в примере для [ILanerContext.FindSerieByStubKey](Laner.chm::/Interface/ILanerContext/ILanerContext.FindSerieByStubKey.htm).


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
