# IMetaAttributeNaming.Attribute

IMetaAttributeNaming.Attribute
-


# IMetaAttributeNaming.Attribute


## Синтаксис


Attribute: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm);


## Описание


Свойство Attribute возвращает
 атрибут, для которого задано наименование.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IRubricator;

	    Facts: IMetaDictionary;

	    Atts: IMetaAttributeNamings;

	    AtrN: IMetaAttributeNaming;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit As IRubricator;

	    Facts := Rubr.Facts;

	    Atts := Facts.AttributeNamings;

	    Debug.WriteLine("Разделитель: " + Atts.NamingDelimiter);

	    Debug.WriteLine("-------------------");

	    For i := 0 To Atts.Count - 1 Do

	        AtrN := Atts.Item(i);

	        Debug.WriteLine("Наименование: " + AtrN.Name);

	        Debug.WriteLine("Ключ: " + AtrN.Key.ToString);

	        Debug.WriteLine("Идентификатор: " + AtrN.Id);

	        If AtrN.NamingFormat <> ""

	            Then Debug.WriteLine("Формат наименования: " + AtrN.NamingFormat);

	            Else Debug.WriteLine("Формат наименования не определен");

	        End If;

	        Debug.WriteLine("Атрибут: " + AtrN.Attribute.Name);

	        Debug.WriteLine("-------------------");

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 наименованиях, заданных для показателей базы данных временных рядов.


См. также:


[IMetaAttributeNaming](IMetaAttributeNaming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
