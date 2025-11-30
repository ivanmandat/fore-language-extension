# IRubricatorInstance.RevisionsDimension

IRubricatorInstance.RevisionsDimension
-


# IRubricatorInstance.RevisionsDimension


## Синтаксис


RevisionsDimension(Factor: Integer): [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


Factor. Ключ показателя, данные
 ревизий которого необходимо получить.


## Описание


Свойство RevisionsDimension
 возвращает данные справочника ревизий для показателя.


## Комментарии


В качестве значения параметра Factor
 также допускается передавать следующие отрицательные значения:


	- -1. Свойство вернет
	 метки ревизий базы данных временных рядов;


	- -2. Свойство вернет
	 все существующие ревизии и метки ревизий базы данных временных рядов.


Ввод прочих отрицательных значений не предусмотрен.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    RevDim: IDimInstance;

	    DimEl: IDimElements;

	    DimAtt: IDimAttributesInstance;

	    DimA: IDimAttributeInstance;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    RevDim := RubrIn.RevisionsDimension(-1);

	    DimEl := RevDim.Elements;

	    DimAtt := RevDim.Attributes;

	    For j := 0 To DimEl.Count - 1 Do

	        Debug.WriteLine("Элемент: " + j.ToString);

	        For i := 0 To DimAtt.Count - 1 Do

	            DimA := DimAtt.Item(i);

	            Debug.WriteLine("Атрибут: " + DimA.Attribute.Name + ". Значение: " + DimA.Value(j));

	        End For;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены метки ревизий
 базы данных временных рядов.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
