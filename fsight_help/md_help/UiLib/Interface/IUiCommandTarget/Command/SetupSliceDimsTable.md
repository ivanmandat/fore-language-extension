# SetupSliceDimsTable

SetupSliceDimsTable
-


# Команда SetupSliceDimsTable


## Назначение


Вызов стандартного диалога настройки измерений среза данных.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IPrxDataIsland](KeReport.chm::/Interface/IPrxDataIsland/IPrxDataIsland.htm)
		 или [IPrxChart](KeReport.chm::/Interface/IPrxChart/IPrxChart.htm)
		 Область данных или диаграмма, построенная на области данных,
		 для которой необходимо отобразить диалог настройки измерений среза
		 данных.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории должен быть создан
 регламентный отчет с идентификатором «REG_REPORT», в отчете имеется область
 данных. Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылки на системные сборки «Metabase», «Report», «Ui».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Report: IPrxReport;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    MB := MetabaseClass.Active;

    Report := mb.ItemById("REG_REPORT").Open(Null) As IPrxReport;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := Report.DataIslands.Item(0);

    Target.Execute("SetupSliceDimsTable", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог настройки измерений среза
 данных.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
