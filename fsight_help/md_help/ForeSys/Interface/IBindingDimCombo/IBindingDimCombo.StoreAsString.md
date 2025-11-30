# IBindingDimCombo.StoreAsString

IBindingDimCombo.StoreAsString
-


# IBindingDimCombo.StoreAsString


## Синтаксис


StoreAsString:
 Boolean;


## Описание


Свойство StoreAsString определяет
 признак сохранения множественной отметки элементов справочника в виде
 строки в формате XML.


## Комментарии


Допустимые значения:


	- True. Множественная
	 отметка элементов справочника сохраняется в виде строки;


	- False. Множественная
	 отметка элементов справочника не сохраняется в виде строки.


Свойство используется для множественной отметки элементов справочника
 в ячейке регламентного отчёта, если справочник содержит [связанные
 атрибуты](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link_Property.htm). Для корректного отображения множественной
 отметки в ячейке свойство StoreAsString
 сохраняет отметку в факт куба в виде строки. Множественная отметка элементов
 справочника отображается в ячейке с помощью типа значений «[Раскрывающийся
 список справочника](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension)».


Также значение свойства можно задать в строке связи в формате:


STOREASSTRING="TRUE"


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT и справочника с идентификатором D_SEP.
 В справочнике должен содержаться связываемый атрибут TERRID.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IPrxReport;

	    BM: IBindingManager;

	    DimComboBinding: IBindingDimCombo;

	    Tab: ITabSheet;

	    Style: ITabCellStyle;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем регламентный отчет

	    Report := mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем стиль ячейки в левом верхнем углу активного листа отчета

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Style := Tab.Cell(0, 0).Style;

	    // Задаём формат ячейки

	    Style.Binding := "UI=""DimCombo"" SLICEDIM="""" FIXEDDIM="""" DISABLEATTRIBUTESELECT=""""

	                      ID=""D_SEP"" ATTRIBUTEVALUE=""TERRID"" STOREASSTRING=""TRUE""";

	    // Сохраняем изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в первой ячейке регламентного
 отчёта будет задан формат раскрывающегося списка, который поддерживает
 корректное отображение множественной отметки элементов справочника с идентификатором
 D_SEP.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
