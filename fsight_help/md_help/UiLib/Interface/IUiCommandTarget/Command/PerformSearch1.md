# PerformSearch: Плагин Report

PerformSearch: Плагин Report
-


# Команда PerformSearch


## Назначение


Вызов стандартного диалога поиска/замены в регламентном отчете.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [ITabCellSearch](TabSheet.chm::/Interface/ITabCellSearch/ITabCellSearch.htm)
		 Объект, содержащий параметры поиска, которые будут выставлены
		 в диалоге.


		 Элемент 2: Boolean
		 Параметр, определяющий какая вкладка будет активна при открытии
		 диалога. Если передается значение True,
		 то будет активна вкладка «Заменить», иначе - вкладка «Найти».
		 Параметр необязательный, по умолчанию передается значение False.


		 Элемент 3: [TabCellSearchTarget](TabSheet.chm::/Enums/TabCellSearchTarget.htm)
		 Параметр, определяющий какие свойства ячейки будут доступны
		 для поиска в разделе «Предмет
		 поиска» в дополнительных настройках. Необязательный параметр,
		 по умолчанию доступны все свойства ячейки.


		 Элемент 4:
		 [TabFindReplaceFormat](TabSheet.chm::/Enums/TabFindReplaceFormat.htm)
		 Параметр, определяющий возможность задания формата для искомого
		 и заменяемого текста.

Необязательный параметр, по умолчанию формат
		 можно задать как для искомого текста, так и для того текста, на
		 который будет производиться замена.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента ReportBox и компонента
 UiReport с наименованием «UiReport1», являющегося источником
 данных для ReportBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	    CellSearch: ITabCellSearch;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    CellSearch := ((UiReport1.Instance As IPrxReport).ActiveSheet As IPrxTable).TabSheet.CreateCellSearch;

	    Data := New Variant[4];

	    Data[0] := CellSearch;

	    Data[1] := False;

	    Data[2] := TabCellSearchTarget.Formula Or TabCellSearchTarget.Text;

	    Data[3] := TabFindReplaceFormat.Find;

	    Context.Data := Data;

	    Target.Execute("PerformSearch", Context);

	End Sub Button1OnClick;


При нажатии кнопки будет выведен стандартный диалог поиска/замены в
 регламентном отчете.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
