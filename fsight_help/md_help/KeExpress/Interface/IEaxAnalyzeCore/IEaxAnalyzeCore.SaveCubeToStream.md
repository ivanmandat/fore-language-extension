# IEaxAnalyzeCore.SaveCubeToStream

IEaxAnalyzeCore.SaveCubeToStream
-


# IEaxAnalyzeCore.SaveCubeToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 [DimSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)
 = Null]);


## Параметры


Stream. Поток, в который сохраняется
 экспресс-отчет;


DimSelectionSet. Отметка элементов
 измерений в сохраняемом отчете.


## Описание


Метод SaveCubeToStream сохраняет
 в поток данные отмеченных элементов измерений экспресс-отчета в виде куба.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    Fs: IFileStream;

	    DimSelSet: IDimSelectionSet;

	    Context: IUiCommandExecutionContext;

	    CommandTarget: IUiCommandTarget;

	    mb: IMetabase;

	    Expr: IEaxAnalyzer;

	Begin

	    CommandTarget := WinApplication.Instance.GetPluginTarget("EXPRESS_REPORT");

	    Context := CommandTarget.CreateExecutionContext;

	    mb := MetabaseClass.Active;

	    Expr := mb.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Context.Data := Expr As Variant;

	    DimSelSet := CommandTarget.Execute("DimSelectionSetup", Context);

	    If (DimSelSet <> Null) Then

	        Fs := New FileStream.Create("C:\EXPRESS_REPORT_C.p5с", FileOpenMode.Create, FileShare.Exclusive);

	        Expr.SaveToStream(Fs, DimSelSet);

	    End If;

	End Sub UserProc;


После выполнения примера экспресс-отчет в виде куба будет сохранен в
 поток, представляющий файл C:\EXPRESS_REPORT_C.p5с. Отметка для отчета
 будет задана с использованием команды [сервиса
 «Express»](UiLib.chm::/Interface/IWinApplication/IWinApplication.GetPluginTarget.htm).


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
