# MapLegendSetup

MapLegendSetup
-


# Команда MapLegendSetup


## Назначение


Вызов стандартного диалога настройки параметров легенды карты, расположенной
 на одном из листов регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IPrxMapLegend](KeReport.chm::/Interface/IPrxMapLegend/IPrxMapLegend.htm)
		 Легенда карты, для которой необходимо отобразить диалог настройки
		 параметров.


		 Элемент 2: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчет, на странице которого создана карта и легенда.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 На активной странице регламентного отчета, подключенного к компоненту
 «UiReport1», имеется карта и легенда карты с идентификатором «PrxMapLegend1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Rep: IPrxReport;

    Legend: IPrxMapLegend;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    Rep := UiReport1.Instance As IPrxReport;

    Legend := (Rep.ActiveSheet As IPrxTable).TabSheet.Objects.Object("PrxMapLegend1") As IPrxMapLegend;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := Legend;

    Data[1] := Rep;

    Context.Data := Data;

    Target.Execute("MapLegendSetup", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки параметров
 легенды карты.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
