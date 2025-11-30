# MapSetup

MapSetup
-


# Команда MapSetup


## Назначение


Вызов стандартного диалога настройки свойств карты, расположенной на одном из листов регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат следующие значения:


 Тип значения
 Описание


 Элемент 1: [IPrxMap](KeReport.chm::/Interface/IPrxMap/IPrxMap.htm)
 Карта, для которой необходимо отобразить диалог настройки свойств.


 Элемент 2: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
 Регламентный отчет, на странице которого создана карта.


 Элемент 3: [PrxAdapterDataType](KeReport.chm::/Enums/PrxAdapterDataType.htm)
 Тип расположения данных для адаптера.
Необязательный элемент. Если элемент не задан, то при настройке слоев и показателей привязка может быть осуществлена как к листу с данными, так и к срезу данных.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом выполнения команды будет логическое значение True, если в диалоге была нажата кнопка «ОК» и False, если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием "Button1", компонента ReportBox и компонента UiReport с наименованием «UiReport1», являющегося источником данных для ReportBox. На активной странице регламентного отчета, подключенного к компоненту «UiReport1», имеется карта с идентификатором «PrxMap1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Rep: IPrxReport;

    Map: IPrxMap;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    Rep := UiReport1.Instance As IPrxReport;

    Map := (Rep.ActiveSheet As IPrxTable).TabSheet.Objects.Object("PrxMap1") As IPrxMap;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := Map;

    Data[1] := Rep;

    Context.Data := Data;

    Target.Execute("MapSetup", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки свойств карты. Слои и показатели могут быть привязаны к данными, расположенными на листах, или к срезам данных.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
