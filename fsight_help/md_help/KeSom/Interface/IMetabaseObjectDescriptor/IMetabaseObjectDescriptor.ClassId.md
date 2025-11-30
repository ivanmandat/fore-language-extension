# IMetabaseObjectDescriptor.ClassId

IMetabaseObjectDescriptor.ClassId
-


# IMetabaseObjectDescriptor.ClassId


## Синтаксис


ClassId: Integer;


## Описание


Свойство ClassId возвращает
 идентификатор класса объекта репозитория.


## Комментарии


Для проверки значения данного свойства используйте перечисление [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    S: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("obj_1111");

	    S := Desc.ClassId;

	End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться идентификатор
 класса объектов базы метаданных.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
