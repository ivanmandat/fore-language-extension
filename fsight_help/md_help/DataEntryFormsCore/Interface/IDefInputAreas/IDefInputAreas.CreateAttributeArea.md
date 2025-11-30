# IDefInputAreas.CreateAttributeArea

IDefInputAreas.CreateAttributeArea
-


# IDefInputAreas.CreateAttributeArea


## Синтаксис


		CreateAttributeArea(sheetKey: Integer; row:
		 Integer; column: Integer): [IDefAttributeArea](../IDefAttributeArea/IDefAttributeArea.htm);


## Параметры


sheetKey. Ключ листа, на который
 будет добавлена новая атрибутная область;


row. Индекс строки, начиная
 с которой будет располагаться атрибутная область;


column. Индекс столбца, начиная
 с которого будет располагаться атрибутная область.


## Описание


Метод CreateAttributeArea создаёт
 атрибутную область и возвращает её параметры.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «DICT_INDICATORS». Также предполагается наличие формы
 ввода, для которой указанный макрос назначен в качестве исполняемого метода
 для пользовательской кнопки. В форме ввода создан один параметр.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub AddAttribute(Report: IPrxReport);

		Var

		    Mb: IMetabase;

		    Sheet: IPrxSheet;

		    DEForm: IDataEntryForm;

		    AArea: IDefAttributeArea;

		    Dim: IDimensionModel;

		    Param: IDefParameter;

		Begin

		    Mb := MetabaseClass.Active;

		    // Создание отдельного листа

		    Sheet := Report.Sheets.Add("Лист для новой таблицы");

		    // Экземпляр текущей формы ввода

		    DEForm := New DataEntryForm.CreateByReport(report);

		    // Создание новой атрибутной области

		    AArea := DEForm.inpuTAreas.CreateAttributeArea(Sheet.Key, 1, 1);

		    // Указание справочника

		    Dim := Mb.ItemById("DICT_INDICATORS").Bind As IDimensionModel;

		    AArea.DictionaryKey := (Dim As IMetabaseObject).Key;

		    AArea.AttributeKey := Dim.Attributes.Name.Key;

		    // Параметр, с которым связана атрибутная область

		    Param := DEForm.Parameters.Item(0);

		    AArea.ParameterKey := Param.Key;

		    AArea.ParameterAttributeKey := Param.DimensionInstance.Attributes.FindById("KEY").Attribute.Key;

		    // Применить измерения к форме ввода

		    DEForm.inpuTAreas.ApplyAreaToReport(AArea.id);

		    DEForm._Dispose;

		End Sub AddAttribute;


При выполнении макроса в форме ввода будет создан новый лист. На листе
 будет создана атрибутная область, задан справочник и атрибут справочника,
 значения которого будут отображаться, задан параметр и атрибут параметра,
 которые будут использоваться для динамического изменения атрибутной области.


См. также:


[IDefInputAreas](IDefInputAreas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
