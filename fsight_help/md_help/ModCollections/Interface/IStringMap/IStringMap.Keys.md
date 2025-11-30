# IStringMap.Keys

IStringMap.Keys
-


# IStringMap.Keys


## Синтаксис


Keys: [ICollection](../ICollection/ICollection.htm);


## Описание


Свойство Keys возвращает коллекцию
 ключей карты.


## Пример


	Sub UserProc;

	Var

	    StrMap: IStringMap;

	Begin

	    StrMap := New StringMap.Create;

	    StrMap.Add(GuidGenerator.Generate, "B");

	    StrMap.Add(GuidGenerator.Generate, "A");

	    StrMap.Add(GuidGenerator.Generate, "C");

	    StrMap.Add(GuidGenerator.Generate, "E");

	    Debug.WriteLine("Keys:");

	    ShowValues(StrMap.Keys);

	    Debug.WriteLine("Values:");

	    ShowValues(StrMap.Values);

	End Sub UserProc;


	Sub ShowValues(myList: ICollection);

	Var

	    v: Variant;

	Begin

	    For Each v In myList Do

	        Debug.Write(v + ' ');

	    End For;

	    Debug.WriteLine("");

	End Sub ShowValues;


После выполнения примера будет сгенерирована карта строк. В качестве
 ключа будет использоваться сгенерированный GUID. Карта автоматически отсортируется
 по значениям ключей. Ключи и значения элементов будут выведены в консоль
 среды разработки.


См. также:


[IStringMap](IStringMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
