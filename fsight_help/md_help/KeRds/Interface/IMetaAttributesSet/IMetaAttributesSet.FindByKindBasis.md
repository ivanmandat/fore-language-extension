# IMetaAttributesSet.FindByKindBasis

IMetaAttributesSet.FindByKindBasis
-


# IMetaAttributesSet.FindByKindBasis


## Синтаксис


FindByKindBasis(Basis: Integer; kKind: [MetaAttributeKind](../../Enums/MetaAttributeKind.htm);
 Var Index: Integer): [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);


## Параметры


Basis - базис, по которому
 осуществляется поиск.


kKind - тип искомого атрибута.


Index - переменная, в которой
 будет возвращен индекс найденного атрибута.


## Описание


Метод FindByKindBasis осуществляет
 поиск атрибута по типу и базису.


## Пример


Для выполнения примера предполагается наличие
 в репозитории базы данных временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    Atts: IMetaAttributes;

	    Attr: IMetaAttribute;

	    SS: IMetaAttributesSubset;

	    Rds: IMetabaseObjectDescriptor;

	    i: Integer;

	    ind: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.Attributes;

	    SS := Atts.CreateSubset("KEY;FACTOR", SubsetOperation.Select_);

	    Rds := mb.ItemById("RDS_REPO");

	    Attr := Atts.FindByKindBasis(-1, MetaAttributeKind.Revision, ind);

	    If Attr <> Null Then

	        SS.Add(Attr);

	    End If;

	    For i := 0 To SS.Count - 1 Do

	        Debug.WriteLine(SS.Item(i).Name);

	    End For;

	End Sub UserProc;


После выполнения примера будет создан набор, состоящий из атрибутов
 «KEY» и «FACTOR». Также в набор будет включен атрибут, определяющий ревизию
 показателя, в переменной «ind» будет храниться его индекс. В окно консоли
 будут выведены наименования всех атрибутов, входящих в набор.


См. также:


[IMetaAttributesSet](IMetaAttributesSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
