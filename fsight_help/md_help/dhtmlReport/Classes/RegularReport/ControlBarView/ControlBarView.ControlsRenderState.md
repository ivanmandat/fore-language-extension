# ControlBarView.ControlsRenderState

ControlBarView.ControlsRenderState
-


# ControlBarView.ControlsRenderState


## Синтаксис


ControlsRenderState: [PP.Mb.TriState](dhtmlMetabase.chm::/Enums/PP.Mb.TriState.htm)


## Описание


Свойство ControlsRenderState
 определяет, будут ли отрисовываться элементы управления регламентного
 отчета на панели «Элементы управления».


## Комментарии


По умолчанию для свойства установлено значение PP.Mb.[TriState](dhtmlMetabase.chm::/Enums/PP.Mb.TriState.htm).OnOption.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Регламентный отчет должен содержать
 элементы управления. Определим, что для на панели «Элементы управления»
 при отрисовке регламентного отчета не будут отрисовываться и создаваться
 элементы управления:


        controlBar = reportBox.getDataView().getControlBar();
        controlBar.setControlsRenderState(0);
После выполнения примера на странице будет размещен регламентный отчет,
 на панели «Элементы управления»
 которого не будут отрисованы имеющиеся элементы управления.


См. также:


[ControlBarView](ControlBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
