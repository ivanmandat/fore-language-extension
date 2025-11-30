# IDiagnosticReport.MultipleExceptionImage

IDiagnosticReport.MultipleExceptionImage
-


# IDiagnosticReport.MultipleExceptionImage


## Синтаксис


MultipleExceptionImage: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство MultipleExceptionImage
 определяет изображение, которое отображается, если для точки выполняется
 более одного правила.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ImageList с наименованием
 «ImageList1», компонента TabSheetBox и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для TabSheetBox. В компонент
 ImageList должно быть загружено изображение, в «UiErAnalyzer1» должна
 быть загружена рабочая область базы данных временных рядов с идентификатором
 OBJ_FC. В данной базе должна присутствовать группа валидации с идентификатором
 VALIDATION_F.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    RurkKey: Integer;

	    ValidFilterObj: IMetabaseObject;

	    ValidFilter: IValidationGroup;

	    ValidExecSett: IValidationExecuteSettings;

	    Analyzer: IEaxAnalyzer;

	    Res: IValidationExecRun;

	    DiagnRep: IDiagnosticReport;

	    TabSheet: ITabSheet;

	    TabImg: ITabImages;

	    ValidationRules: IValidationRules;

	    Style: ITabCellStyle;

	Begin

	    Mb := MetabaseClass.Active;

	    RurkKey := Mb.GetObjectKeyById("OBJ_FC");

	    ValidFilterObj := Mb.ItemByIdNamespace("VALIDATION_F", RurkKey).Bind;

	    ValidFilter := ValidFilterObj As IValidationGroup;

	    ValidExecSett := New ValidationExecuteSettings.Create;

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    ValidExecSett.Laner := Analyzer.Laner;

	    Res := ValidFilter.Execute(ValidExecSett);

	    DiagnRep := New DiagnosticReport.Create;

	    DiagnRep.Run := Res;

	    DiagnRep.EaxAnalyzer := Analyzer;

	    TabSheet := Analyzer.Grid.TabSheet;

	    TabImg := TabSheet.Images;

	    TabImg.AddFromImageList(ImageList1);

	    DiagnRep.MultipleExceptionImage := TabImg.Item(0);

	    ValidationRules := DiagnRep.Exceptions(1, 1);

	    If ValidationRules.Count > 0 Then

	        Style := TabSheet.Cell(1, 1).Style;

	        Style.EnablePictures := TriState.OnOption;

	    End If;

	End Sub Button1OnClick;


После выполнения примера в компоненте TabSheetBox будет отображены данные
 диагностического отчета. Если для указанной ячейки выполняется более одного
 правила, то в ячейке будет отображено изображение.


См. также:


[IDiagnosticReport](IDiagnosticReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
