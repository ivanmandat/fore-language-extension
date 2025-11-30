# IMetabaseObjectDescriptor.Link

IMetabaseObjectDescriptor.Link
-


# IMetabaseObjectDescriptor.Link


## Синтаксис


Link: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm);


## Описание


Свойство Link определяет связь
 данного объекта с объектом, имеющим тип «Связь с репозиторием».


## Пример


Для выполнения примера предполагается наличие в другом репозитории объекта
 с идентификатором ObjTest.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc, Desc1: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("ObjTest");

	    Desc1 := Desc.Link;

	End Sub UserProc;


При выполнении примера если указанный объект находится в другом репозитории,
 то в переменной «Desc» будет содержаться описание этого объекта, а в переменной
 «Desc1» - описание объекта, осуществляющего связь с другим репозиторием.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
