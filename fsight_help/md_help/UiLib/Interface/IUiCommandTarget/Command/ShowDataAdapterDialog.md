# ShowDataAdapterDialog

ShowDataAdapterDialog
-


# Команда ShowDataAdapterDialog


## Назначение


Вывод стандартного диалога настройки адаптера данных для различных элементов
 карты в регламентном отчете.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчет, на странице которого создана карта.


		 Элемент 2: [IPrxMap](KeReport.chm::/Interface/IPrxMap/IPrxMap.htm)
		 Карта, для которой производится настройка.


		 Элемент 3: [IMapLayer](Map.chm::/Interface/IMapLayer/IMapLayer.htm)
		 Слой карты, для которого производится настройка.


		 Элемент 4: [IPrxMapDataAdapter](KeReport.chm::/Interface/IPrxMapDataAdapter/IPrxMapDataAdapter.htm)
		 Адаптер данных, параметры которого необходимо изменить. Если
		 элемент указан, то значения пятого и шестого элемента будут установлены
		 автоматически.

Если передается значение Null,
		 то диалог будет использоваться для настройки нового адаптера данных.
		 При этом также необходимо в пятом элементе массива указать тип
		 создаваемого адаптера.


		 Элемент 5: [PrxMapAdapter](KeReport.chm::/Enums/PrxMapAdapter.htm)
		 Тип адаптера данных.

Необязательный элемент, указывается если в четвертом
		 элементе передается значение Null.


		 Элемент 6: [PrxAdapterDataType](KeReport.chm::/Enums/PrxAdapterDataType.htm)
		 Тип расположения данных для адаптера.

Необязательный элемент. Если осуществляется редактирование
		 существующего адаптера (элемент
		 4) и задан тип расположения данных (элемент
		 6), то в диалоге не будет возможности выбрать другой тип.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет адаптер данных, описываемый интерфейсом [IPrxMapDataAdapter](KeReport.chm::/Interface/IPrxMapDataAdapter/IPrxMapDataAdapter.htm),
 если в диалоге была нажата кнопка «ОК», и пустое значение, если была нажата
 кнопка «Отмена».


Примечание.
 При закрытии диалога по кнопке «ОК» всегда возвращается новый экземпляр
 адаптера данных. Поэтому для применения изменений необходимо переприсвоить
 адаптер данных у того объекта, для которого он настраивался.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 На активном листе регламентного отчета, подключенного к компоненту «UiReport1»,
 имеется карта. Для слоя «Regions» карты создан картографический показатель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

   Report: IPrxReport;

    PrxMap: IPrxMap;

    Map: IMap;

    Layer: IMapLayer;

    VisualColor: IMapVisualColorProperty;

    Da: IPrxMapDataAdapter;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

    Result: Variant;

Begin

    Report := UiReport1.Report;

    PrxMap := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IPrxMap;

    Map := PrxMap As IMap;

    //Слой карты

    Layer := Map.Layers.FindByName("Regions");

    //Параметры заливки
 картографического показателя

    VisualColor := (Layer.Visuals.Item(0) As IMapAreaVisual).Color;

    //Адаптера для заливки картографического показателя

    Da := VisualColor.DataAdapter As IPrxMapDataAdapter;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[4];

    Data[0] := Report;

    Data[1] := Map;

    Data[2] := Layer;

    Data[3] := Da;

    Context.Data := Data;

    Result := Target.Execute("ShowDataAdapterDialog", Context);

    If Result <> Null Then

        Da := Result;

        VisualColor.DataAdapter := Da;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки адаптера
 данных. В диалоге будет настраиваться адаптер, используемый для привязки
 данных в заливке картографического показателя. Если в диалоге будет нажата
 кнопка «ОК», то адаптер будет обновлен в настройках заливки.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
