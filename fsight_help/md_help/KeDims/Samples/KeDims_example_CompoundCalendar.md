# Создание составного календарного измерения

Создание составного календарного измерения
-


# Создание составного календарного справочника


Составной календарный справочник представляет собой объединение нескольких
 календарных справочников с различной динамикой. Если в одном календарном
 справочнике присутствует лишь годовая динамика, а в другом квартальная
 и месячная, то в составном календарном справочнике, созданном на основе
 данных справочников, будут присутствовать годовая, квартальная и месячная
 динамики.


Для выполнения примера предполагается наличие в репозитории календарных
 справочников с идентификаторами CALEND_1 и CALEND_2.


	Sub UserProc;

	Var

	    createInfo: IMetabaseObjectCreateInfo;

	    calendar: ICompoundCalendar;

	    Des: IMetabaseObjectDescriptor;

	    Mb: IMetabase;

	    objCalend: IMetabaseObject;

	    Source: ICompoundDimensionSource;

	    dimModel: IDimensionModel;

	    dimModel1: IDimensionModel;

	    Cinstance: ICompoundDimensionInstance;

	    Instance: IDimInstance;

	    el: IDimElements;

	    i, j: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    createInfo := Mb.CreateCreateInfo;

	    createInfo.ClassId := MetabaseObjectClass.KE_CLASS_COMPOUNDCLNDIM;

	    createInfo.Name := "CompoundCalendar";

	    createInfo.Id := createInfo.Name;

	    createInfo.Permanent := True;

	    createInfo.Parent := Mb.Root;

	    Des := mb.CreateObject(createInfo);

	    objCalend := Des.Edit;

	    calendar := objCalend As ICompoundCalendar;

	    source := calendar.Sources.Add(1);

	    dimModel := Mb.ItemById("CALEND_1").Bind As IDimensionModel;

	    source.Dimensions.Add(dimModel);

	    source := calendar.Sources.Add(2);

	    dimModel1 := Mb.ItemById("CALEND_2").Bind As IDimensionModel;

	    source.Dimensions.Add(dimModel1);

	    objCalend.Save;

	    Cinstance := objCalend.Open(Null) As ICompoundDimensionInstance;

	    Instance := Cinstance As IDimInstance;

	    memo1.Lines.Add("Количество эл-ов " + Instance.Elements.Count.ToString);

	    el := Instance.Elements;

	    j := Instance.Attributes.FindById("NAME").Attribute.Key;

	    For i := 0 To el.Count - 1 Do

	        Debug.WriteLine("Элемент " + (i + 1).ToString + ": " + (el.AttributeValue(i, j) As String));

	    End For;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 составной календарный справочник, объединяющий справочники CALEND_1 и
 CALEND_2. В окно консоли будут выведены наименования элементов составного
 справочника.


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
