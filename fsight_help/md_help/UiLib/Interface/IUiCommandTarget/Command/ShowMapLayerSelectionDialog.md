# ShowMapLayerSelectionDialog

ShowMapLayerSelectionDialog
-


# Команда ShowMapLayerSelectionDialog


## Назначение


Вызов диалога для выбора [состава карты](UiReport.chm::/Desktop/Maps/Map_Structure.htm).


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IPrxMap](KeReport.chm::/Interface/IPrxMap/IPrxMap.htm)
		 Карта, для которой вызывается диалог.


## Особенности применения


Команда может применяться только для карт в регламентных отчетах. Результатом
 выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «ОК»
 и False, если была нажата кнопка
 «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ReportBox с идентификатором «ReportBox1»
 и компонента UiReport с идентификатором
 «UiReport1», являющегося источником данных для «ReportBox1». В компонент
 «UiReport1» должна быть загружен регламентный отчет с картой.


Добавьте ссылку на системную сборку UI.


			Sub UserProc;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    Map: IPrxMap;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Report := UiReport1.Report;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(0).Extension As IPrxMap;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := Map;

    Target.Execute("ShowMapLayerSelectionDialog", Context);

End Sub UserProc;


В результате выполнения примера будет отображен диалог для выбора [состава карты](UiReport.chm::/Desktop/Maps/Map_Structure.htm).


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
