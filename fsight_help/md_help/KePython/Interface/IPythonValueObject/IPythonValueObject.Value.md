# IPythonValueObject.Value

IPythonValueObject.Value
-


# IPythonValueObject.Value


## Синтаксис


		Value: Variant;


## Описание


Свойство Value возвращает значение
 объекта.


## Комментарии


В зависимости от [типа](../IPythonObject/IPythonObject.Type.htm)
 объекта, значение может быть приведено к одному из Fore-типов:


	- PyTypeBool. Boolean;


	- PyTypeClass. [IPythonClassObject](../IPythonClassObject/IPythonClassObject.htm);


	- PyTypeFloat. Double,
	 Decimal или Currency;


	- PyTypeInt. Integer;


	- PyTypeList. [IPythonList](../IPythonList/IPythonList.htm);


	- PyTypeNone. Значение
	 Null;


	- PyTypeStr. String;


	- PyTypeTuple. [IPythonTuple](../IPythonTuple/IPythonTuple.htm).


См. также:


[IPythonValueObject](IPythonValueObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
