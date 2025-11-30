# IDimIndexInstance.IndexAttributesValues

IDimIndexInstance.IndexAttributesValues
-


# IDimIndexInstance.IndexAttributesValues


## Синтаксис


IndexAttributesValues(Element: Integer): Variant;


## Параметры


Element - индекс
 элемента справочника.


## Описание


Метод IndexAttributesValues
 осуществляет поиск элемента с номером Element
 и возвращает значение всех его атрибутов, включенных в индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    Attrs: IDimIndexAttributes;

	    v: Variant;

	    Attr: Array Of Variant;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    IndxsInst := Dimen.Indexes;

	    If IndxsInst.Count <> 0 Then

	        IndexInst := IndxsInst.Item(0);

	        Attrs := IndexInst.Index.Attributes;

	        v := IndexInst.IndexAttributesValues(Dimen.Elements.Count - 1);

	        If v Is Array Then

	            Attr := v As Array;

	            For i := 0 To Attr.Length - 1 Do

	                Debug.Write("Атрибут: " + Attrs.Item(i).Name);

	                Debug.WriteLine("; Значение элемента по атрибуту: " + Attr[i]);

	            End For;

	        Else

	            Debug.Write("Атрибут: " + Attrs.Item(i).Name);

	            Debug.WriteLine("; Значение элемента по атрибуту: " + v);

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 и значения атрибутов, по которым создан первый индекс справочника, для
 последнего элемента справочника.


См. также:


[IDimIndexInstance](IDimIndexInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
