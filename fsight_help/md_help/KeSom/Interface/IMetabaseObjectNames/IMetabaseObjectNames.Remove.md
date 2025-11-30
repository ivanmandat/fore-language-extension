# IMetabaseObjectNames.Remove

IMetabaseObjectNames.Remove
-


# IMetabaseObjectNames.Remove


## Синтаксис


		Remove(Value: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
		 Boolean;


## Параметры


Value. Язык.


## Описание


Метод Remove удаляет наименование
 по заданному языку.


## Комментарии


Метод возвращает True, если
 удаление прошло успешно, в противном случае – False.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором «OBJECT», у которого существует наименование для испанского
 языка (Аргентина).


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

		    NamesL.Remove(LocaleCodeID.Spanish_Argentina);

		    Obj.SaveDescriptor;

		End Sub UserProc;


После выполнения примера для объекта будет удалено название для испанского
 языка.


См. также:


[IMetabaseObjectNames](IMetabaseObjectNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
