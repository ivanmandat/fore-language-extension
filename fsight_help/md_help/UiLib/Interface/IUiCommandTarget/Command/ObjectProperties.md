# ObjectProperties

ObjectProperties
-


# Команда ObjectProperties


## Назначение


Вызов стандартного диалога настройки свойств объекта/объектов листа.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения
		 Описание


		 [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm)
		 Объект листа, для которого необходимо отобразить диалог настройки
		 свойств.


		 Array
		 Массив типа Variant.
		 Каждый элемент массива - объект листа, описываемый интерфейсом
		 [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm).
		 Если тип элемента массива не [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm),
		 то элемент игнорируется.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 На активном листе регламентного отчета, который подключен к компоненту
 «UiReport1», имеется минимум один объект.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    Sheet: ITabSheet;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Report := UiReport1.Instance As IPrxReport;

    Sheet := (Report.ActiveSheet As IPrxTable).TabSheet;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := Sheet.Objects.Item(0);

    Target.Execute("ObjectProperties", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог настройки параметров первого
 объекта, расположенного на активном листе отчета.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
