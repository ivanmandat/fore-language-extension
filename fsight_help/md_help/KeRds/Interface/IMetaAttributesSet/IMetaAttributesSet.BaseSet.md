# IMetaAttributesSet.BaseSet

IMetaAttributesSet.BaseSet
-


# IMetaAttributesSet.BaseSet


## Синтаксис


BaseSet: [IMetaAttributesSet](IMetaAttributesSet.htm);


## Описание


Свойство BaseSet возвращает
 базовый набор атрибутов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    Atts: IMetaAttributes;

	    AttsSet: IMetaAttributesSet;

	    BaseSet: IMetaAttributesSet;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.Attributes;

	    AttsSet := Atts.CreateSubset("", SubsetOperation.Select_);

	    BaseSet := AttsSet.BaseSet;

	    For i := 0 To BaseSet.Count - 1 Do

	        Debug.WriteLine(BaseSet.Item(i).Name);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен базовый набор
 атрибутов для системной таблицы, содержащей информацию о показателях.


См. также:


[IMetaAttributesSet](IMetaAttributesSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
