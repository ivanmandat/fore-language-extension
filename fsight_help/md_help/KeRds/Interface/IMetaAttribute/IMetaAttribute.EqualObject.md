# IMetaAttribute.EqualObject

IMetaAttribute.EqualObject
-


# IMetaAttribute.EqualObject


## Синтаксис


EqualObject(ObjectKey: Integer): Boolean;


## Параметры


ObjectKey. Ключ объекта.


## Описание


Метод EqualObject возвращает
 признак того, принадлежит ли атрибут объекту, ключ которого указан в параметре
 ObjectKey. Если данный метод возвращает
 значение True, то атрибут принадлежит
 объекту, False - не принадлежит.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC и репозитория НСИ с идентификатором
 RDS_REPO. В репозитории НСИ должен присутствовать справочник с идентификатором
 DICT_IND.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubrObj: IMetabaseObject;

	    CatInst: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    HierarchyInst: IMetaHierarchyInstance;

	    HierarchyAttr: IMetaHierarchyAttributes;

	    Attr: IMetaAttribute;

	    Dict: IMetabaseObjectDescriptor;

	    Key: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubrObj := Mb.ItemById("OBJ_FC").Bind;

	    CatInst := RubrObj.Open(Null) As IRubricatorInstance;

	    DictInst := CatInst.GetDictionary(RubricatorDictionary.Facts);

	    HierarchyInst := DictInst.DefaultHierarchy;

	    HierarchyAttr := HierarchyInst.Attributes;

	    Attr := HierarchyAttr.Item(0);

	    Key := Mb.GetObjectKeyById("RDS_REPO");

	    Dict := Mb.ItemByIdNamespace("DICT_IND", Key);

	    If Attr.EqualObject(Dict.Key) Then

	        Debug.WriteLine("Атрибут '" + Attr.Name + "' принадлежит справочнику '" + Dict.Name
	 + "'");

	    Else

	        Debug.WriteLine("Атрибут '" + Attr.Name + "' не принадлежит справочнику '" + Dict.Name
	 + "'");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли буде выведено сообщение о том,
 принадлежит ли первый атрибут иерархии базы данных временных рядов справочнику
 DICT_IND.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
