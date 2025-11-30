# IMetabaseObjectDescriptor.Params

IMetabaseObjectDescriptor.Params
-


# IMetabaseObjectDescriptor.Params


## Синтаксис


Params: [IMetabaseObjectParams](../IMetabaseObjectParams/IMetabaseObjectParams.htm);


## Описание


Свойство Params возвращает коллекцию
 параметров объекта репозитория.


## Комментарии


Свойство Params не предназначено
 для работы со справочниками НСИ. Для работы с параметрами справочников
 НСИ используйте интерфейс [IRdsParams](KeRds.chm::/Interface/IRdsParams/IRdsParams.htm).


## Пример


Для выполнения примера предполагается наличие объекта репозитория с
 идентификатором «CUBE».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Desc: IMetabaseObjectDescriptor;

		    ObjParams: IMetabaseObjectParams;

		    Param: IMetabaseObjectParam;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Desc := Mb.ItemById("CUBE");

		    ObjParams := Desc.Params;

		    Debug.WriteLine("Количество параметров объекта: " + ObjParams.Count.ToString);

		    Debug.WriteLine("Параметры объекта: ");

		    Debug.Indent;

		    For i:=0 To ObjParams.Count-1 Do

		        Param := ObjParams.Item(i);

		        Debug.WriteLine((i+1).ToString + ". " + Param.Name);

		    End For;

		    Debug.Unindent;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- количество параметров объекта репозитория;


	- наименования параметров объекта репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
