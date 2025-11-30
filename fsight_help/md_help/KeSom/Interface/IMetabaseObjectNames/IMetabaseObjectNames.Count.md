# IMetabaseObjectNames.Count

IMetabaseObjectNames.Count
-


# IMetabaseObjectNames.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 наименований объекта.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором Object.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Obj: IMetabaseObjectDescriptor;

	    NameLocale: IMetabaseObjectName;

	    i: Integer;

	Begin

	    Obj := MetabaseClass.Active.ItemById("Object");

	    For i := 0 To Obj.Names.Count - 1 Do

	        NameLocale := Obj.Names.Item(i);

	        Debug.WriteLine("------------------------");

	        Debug.WriteLine("Locale = " + NameLocale.Locale.ToString);

	        Debug.WriteLine("Name = " + NameLocale.Name);

	        Debug.WriteLine("Наименование по умолчанию = " + NameLocale.IsDefault.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены все наименования
 объекта.


См. также:


[IMetabaseObjectNames](IMetabaseObjectNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
