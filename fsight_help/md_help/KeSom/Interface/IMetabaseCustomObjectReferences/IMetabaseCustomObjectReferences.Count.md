# IMetabaseCustomObjectReferences.Count

IMetabaseCustomObjectReferences.Count
-


# IMetabaseCustomObjectReferences.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 зависимостей в коллекции.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором OBJ_CUSTOM.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	    References: IMetabaseCustomObjectReferences;

	    Ref: IMetabaseCustomObjectReference;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Bind As IMetabaseCustomObject;

	    Reader := CustomObject.CreateReader;

	    References := Reader.References;

	    For i := 0 To References.Count - 1 Do

	        Ref := References.Item(i);

	        Debug.WriteLine("Наименование объекта: " + Ref.Object.Name);

	        Debug.WriteLine("Ключ зависимости: " + Ref.Key.ToString);

	        Debug.WriteLine("---");

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли буде выведена информация об
 объектах, от которых зависит указанный объект.


См. также:


[IMetabaseCustomObjectReferences](IMetabaseCustomObjectReferences.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
