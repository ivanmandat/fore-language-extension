# IMetabaseObjectNames.Add

IMetabaseObjectNames.Add
-


# IMetabaseObjectNames.Add


## Синтаксис


		Add(Value: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
		 [IMetabaseObjectName](../IMetabaseObjectName/IMetabaseObjectName.htm);


## Параметры


Value. Язык.


## Описание


Метод Add добавляет наименования
 объекта для заданного языка.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором «OBJECT».


Добавьте ссылку на системную сборку Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Obj: IMetabaseObjectDescriptor;

		    NamesL : IMetabaseObjectNames;

		Begin

		    MB := MetabaseClass.Active;

		    Obj := MB.ItemById("Object").EditDescriptor;

		    NamesL := Obj.Names;

		    NamesL.Add(LocaleCodeID.Spanish_Argentina).Name := "Escenario";

		    Obj.SaveDescriptor;

		End Sub UserProc;


После выполнения примера для объекта будет добавлено название для испанского
 языка (Аргентина).


См. также:


[IMetabaseObjectNames](IMetabaseObjectNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
