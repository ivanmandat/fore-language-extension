# IMetabaseObjectNames.FindByLocale

IMetabaseObjectNames.FindByLocale
-


# IMetabaseObjectNames.FindByLocale


## Синтаксис


		FindByLocale(Value: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
		 [IMetabaseObjectName](../IMetabaseObjectName/IMetabaseObjectName.htm);


## Параметры


Value. Язык.


## Описание


Метод FindByLocale осуществляет
 поиск наименования по заданному языку среди всех наименований объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «OBJECT», у которого существует наименование для испанского
 языка (Аргентина).


Добавьте ссылку на системную сборку Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    Obj:IMetabaseObjectDescriptor;

		    NamesL : IMetabaseObjectNames;

		    NameLocale:IMetabaseObjectName;

		Begin

		    MB := MetabaseClass.Active;

		    Obj := MB.ItemById("OBJECT").EditDescriptor;

		    NamesL := Obj.Names;

		    NameLocale := NamesL.FindByLocale(LocaleCodeID.Spanish_Argentina);

		    NameLocale.Name := "Escenario";

		    Obj.SaveDescriptor;

		End Sub UserProc;


После выполнения примера для объекта будет изменено название для испанского
 языка.


См. также:


[IMetabaseObjectNames](IMetabaseObjectNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
