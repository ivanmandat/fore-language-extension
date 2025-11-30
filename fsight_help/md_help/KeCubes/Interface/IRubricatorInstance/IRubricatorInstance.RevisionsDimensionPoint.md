# IRubricatorInstance.RevisionsDimensionPoint

IRubricatorInstance.RevisionsDimensionPoint
-


# IRubricatorInstance.RevisionsDimensionPoint


## Синтаксис


RevisionsDimensionPoint(Factor: Integer; CalendarPoint:
 [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm)): [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


Factor. Ключ показателя, данные
 ревизий которого необходимо получить.


CalendarPoint. Дата, на которую
 будут получены данные.


## Описание


Свойство RevisionsDimensionPoint
 возвращает данные справочника ревизий показателя для определенной даты.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В базе создан показатель с ключом
 1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubrInst: IRubricatorInstance;

	    RevDim: IDimInstance;

	    DimEl: IDimElements;

	    DimAtt: IDimAttributesInstance;

	    DimA: IDimAttributeInstance;

	    i, j: integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    RevDim := RubrInst.RevisionsDimensionPoint(12195998, DateTime.Parse("01.01.2020 00:00:00"));

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


После выполнения примера в окно консоли будут выведены данные справочника
 ревизий для показателя с указанным ключом на первое января 2020 года.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
