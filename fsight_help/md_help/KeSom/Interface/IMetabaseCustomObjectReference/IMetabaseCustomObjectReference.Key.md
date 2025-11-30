# IMetabaseCustomObjectReference.Key

IMetabaseCustomObjectReference.Key
-


# IMetabaseCustomObjectReference.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
 зависимости.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором OBJ_CUSTOM.


	Sub Main;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	    References: IMetabaseCustomObjectReferences;

	    i: Integer;

	    Ref: IMetabaseCustomObjectReference;

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

	End Sub Main;


После выполнения примера в окно консоли буде выведена информация об
 объектах, от которых зависит указанный объект.


См. также:


[IMetabaseCustomObjectReference](IMetabaseCustomObjectReference.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
