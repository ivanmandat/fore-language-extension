# IMetabaseObjectNames.Name

IMetabaseObjectNames.Name
-


# IMetabaseObjectNames.Name


## Синтаксис


		Name(Value: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
		 String;


## Параметры


Value. Язык.


## Описание


Свойство Name определяет наименование
 объекта для заданного языка. В случае если для заданного языка наименование
 не существовало, то оно будет создано.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором «OBJECT».


Добавьте ссылку на системную сборку Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Obj:IMetabaseObjectDescriptor;

		    NamesL : IMetabaseObjectNames;

		Begin

		    MB := MetabaseClass.Active;

		    Obj := MB.ItemById("OBJECT").EditDescriptor;

		    NamesL := Obj.Names;

		    NamesL.Name(LocaleCodeId.German_Germany) := "Bühne";

		    Obj.SaveDescriptor;

		End Sub UserProc;


После выполнения примера будет добавлено наименование объекта для немецкого
 языка.


См. также:


[IMetabaseObjectNames](IMetabaseObjectNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
