# IMetabaseClassSecurityDescriptor.ClassId

IMetabaseClassSecurityDescriptor.ClassId
-


# IMetabaseClassSecurityDescriptor.ClassId


## Синтаксис


		ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm);


## Описание


Свойство ClassId возвращает
 идентификатор типа объектов.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    SecDescrs: IMetabaseClassesSecurityDescriptors;

		    MS: IMetabaseSecurity;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    // Получим список типов объектов с правами

		    SecDescrs := MS.MetabaseClassesSecurityDescriptors;

		    For i := 0 To SecDescrs.Count - 1 Do

		        Debug.WriteLine(SecDescrs.Item(i).ClassId);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будут выведены [типы объектов](KeSom.chm::/Enums/MetabaseObjectClass.htm),
 для которых заданы права доступа.


См. также:


[IMetabaseClassSecurityDescriptor](IMetabaseClassSecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
