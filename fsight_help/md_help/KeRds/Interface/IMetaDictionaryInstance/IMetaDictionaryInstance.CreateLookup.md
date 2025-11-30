# IMetaDictionaryInstance.CreateLookup

IMetaDictionaryInstance.CreateLookup
-


# IMetaDictionaryInstance.CreateLookup


## Синтаксис


CreateLookup([Attributes: String = ""]):
 [IMetaDictionaryLookup](../IMetaDictionaryLookup/IMetaDictionaryLookup.htm);


## Параметры


Attributes -
 список атрибутов, по значениям которых будет осуществляться поиск. Наименования
 атрибутов разделяются знаком «;».


## Описание


Метод CreateLookup создает объект,
 осуществляющий поиск элементов базы данных временных рядов по заданным
 значениям атрибутов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC. В данной базе должны присутствовать атрибуты
 «KEY» и «COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    RubD: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    Look: IMetaDictionaryLookup;

	Begin

	    Mb := MetabaseClass.Active;

	    RubD := Mb.ItemById("OBJ_FC");

	    RubrIn := RubD.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    Look := DictInst.CreateLookup("COUNTRY;KEY");

	End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий поиск элементов
 базы данных временных рядов по заданным атрибутам.


См. также:


[IMetaDictionaryInstance](IMetaDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
