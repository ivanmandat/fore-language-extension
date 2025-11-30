# IMetabaseObjectDescriptor.Description

IMetabaseObjectDescriptor.Description
-


# IMetabaseObjectDescriptor.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание (примечание) объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TSDB.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    S: String;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("TSDB");

	    S := Desc.Description;

	End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться описание
 (примечание) указанного объекта репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
