# DimSelectionSetup

DimSelectionSetup
-


# Команда DimSelectionSetup


## Назначение


Создание отметки элементов измерений экспресс-отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет, на базе измерений которого создается отметка
		 элементов.


## Особенности применения


Команда может применяться только для экспресс-отчетов.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXPR».


Добавьте ссылки на системные сборки: Dimensions, Express, IO, Metabase,
 UI.


	Sub UserProc;

	Var

	    Fs: IFileStream;

	    DimSelSet: IDimSelectionSet;

	    Context: IUiCommandExecutionContext;

	    CommandTarget: IUiCommandTarget;

	    Mb: IMetabase;

	    Expr: IEaxAnalyzer;

	Begin

	    CommandTarget := WinApplication.Instance.GetPluginTarget("Express");

	    Context := CommandTarget.CreateExecutionContext;

	    Mb := MetabaseClass.Active;

	    Expr := Mb.ItemById("EXPR").Bind As IEaxAnalyzer;

	    Context.Data := Expr As Variant;

	    DimSelSet := CommandTarget.Execute("DimSelectionSetup", Context);

	    If (DimSelSet <> Null) Then

	        Fs := New FileStream.Create("C:\EXPR.ppexpress", FileOpenMode.Create, FileShare.Exclusive);

	        Expr.SaveToStream(Fs, DimSelSet);

	    End If;

	End Sub UserProc;


После выполнения примера экспресс-отчет будет сохранен в поток, представляющий
 файл «C:\EXPR.ppexpress». Отметка для отчета будет задана с использованием
 команды DimSelectionSetup.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
