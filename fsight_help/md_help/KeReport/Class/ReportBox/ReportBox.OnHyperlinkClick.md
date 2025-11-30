# ReportBox.OnHyperlinkClick

ReportBox.OnHyperlinkClick
-


# ReportBox.OnHyperlinkClick


## Синтаксис


OnHyperlinkClick(Sender: Object; Args: [IReportHyperlinkClickEventArgs](../../Interface/IReportHyperlinkClickEventArgs/IReportHyperlinkClickEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnHyperlinkClick наступает
 при щелчке кнопки мыши по гиперссылке, расположенной в ячейке таблицы.


## Комментарии


Если в ячейке с изображением настроена гиперссылка, то при щелчке по
 изображению сначала будет отрабатывать событие OnHyperlinkClick, а затем
 [OnCellPictureClick](ReportBox.OnCellPictureClick.htm).


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
