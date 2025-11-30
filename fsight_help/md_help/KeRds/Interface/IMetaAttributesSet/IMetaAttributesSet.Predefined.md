# IMetaAttributesSet.Predefined

IMetaAttributesSet.Predefined
-


# IMetaAttributesSet.Predefined


## Синтаксис


Predefined(tPredefined: [MetaAttributeKind](../../Enums/MetaAttributeKind.htm)):
 [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);


## Параметры


tPredefined - тип атрибута.


## Описание


Свойство Predefined возвращает
 атрибут заданного типа из набора.


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

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.Attributes;

	    AttsSet := Atts.CreateSubset("", SubsetOperation.Select_);

	    BaseSet := AttsSet.BaseSet;

	    Debug.WriteLine("Показатель: " + BaseSet.Predefined(MetaAttributeKind.Factor).Name);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен идентификатор
 атрибута, определяющего ключ показателя.


См. также:


[IMetaAttributesSet](IMetaAttributesSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
