# FormatConditionSetup

FormatConditionSetup
-


# Команда FormatConditionSetup


## Назначение


Вызов стандартного диалога настройки параметров заданного условного
 формата.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm)
		 Страница, на которой расположен диапазон ячеек.


		 Элемент 2: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)
		 Диапазон ячеек, для которого будет вызван диалог настройки
		 параметров условного форматирования данных. Данный параметр используется
		 при создании новых условных форматов. Для диапазона, указанного
		 в данном параметре, будет применен новый условный формат. Если
		 осуществляется редактирование существующего условного формата,
		 то данный параметр можно не указывать, либо указывать диапазон,
		 для которого был создан условный формат.


		 Элемент 3: [ITabFormatCondition](TabSheet.chm::/Interface/ITabFormatCondition/ITabFormatCondition.htm)
		 Условный формат, параметры которого будут отображены в диалоге.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox и
 компонента UiReport с наименованием «UiReport1», являющегося источником
 данных для ReportBox.


Добавьте ссылки на системные сборки: Forms, Report, Tab, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sheet: ITabSheet;

	    Cond: ITabFormatCondition;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	Begin

	    Sheet := (UiReport1.Instance As IPrxReport).ActiveSheet As ITabSheet;

	    Cond := Sheet.FormatConditions.Add;

	    Cond.Type := TabConditionType.Duplicate;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[3];

	    Data[0] := Sheet;

	    Data[1] := Sheet.ParseRange("A0:C10");

	    Data[2] := Cond;

	    Context.Data := Data;

	    Target.Execute("FormatConditionSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку для текущего листа регламентного отчета, подключенного
 в «UiReport1», будет создан новый условный формат. Условный формат будет
 осуществлять форматирование ячеек с уникальными/дублирующимися значениями.
 На экран будет выведен диалог настройки условного формата. После настройки
 параметров условного нажатия кнопки «ОК» данный условный формат будет
 применен для диапазона «A0:C10» листа отчета.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
