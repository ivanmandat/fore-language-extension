# TableStyleSetup: Плагин Report

TableStyleSetup: Плагин Report
-


# Команда TableStyleSetup


## Назначение


Создание нового стиля таблицы и вызов стандартного диалога настройки
 стиля.


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
		 стилей таблицы. Если данный параметр не указан и в таблице выделена
		 одна ячейка, то будет вызван диалог настройки стилей всей таблицы.
		 Если в таблице выделен диапазон, то будет вызван диалог настройки
		 стилей для данного диапазона.


		 Элемент 3: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm)
		 Необязательный параметр, определяющий набор стилей, стили которого
		 будут доступны для использования при настройке оформления. В качестве
		 значения можно использовать наборы из таблиц стилей репозитория,
		 либо набор стилей, установленный для регламентного отчета в свойстве
		 [StyleSheet](KeReport.chm::/Interface/IPrxReport/IPrxReport.StyleSheet.htm).


Примечание.
 Если для регламентного отчета установлен набор стилей, но данный набор
 не указан в элементе 2 массива, то стили данного набора стилей не будут
 доступны при настройке оформления.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 «UiReport1» подключен к какому-либо регламентному отчету.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Rep: IPrxReport;

	    Sheet: ITabSheet;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	Begin

	    Rep := UiReport1.Instance As IPrxReport;

	    Sheet := Rep.ActiveSheet As ITabSheet;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[3];

	    Data[0] := Sheet;

	    Data[1] := Sheet.ParseRange("A0:C10");

	    If Rep.StyleSheet <> Null Then

	        Data[2] := Rep.StyleSheet;

	    End If;

	    Context.Data := Data;

	    Target.Execute("TableStyleSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку для диапазона таблицы «A0:C10» будет создан новый
 стиль таблицы и на экран будет выведен диалог настройки его параметров.
 Если в регламентном отчете подключен какой-либо набор стилей репозитория,
 то стили данного набора будут доступны при настройке оформления вновь
 созданного стиля.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
