# TabSheet.getCalculatedElements

TabSheet.getCalculatedElements
-


# TabSheet.getCalculatedElements


## Синтаксис


getCalculatedElements();


## Описание


Метод getCalculatedElements
 возвращает рассчитанные размеры и положения [редакторов
 значений](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension) в ячейках таблицы.


## Комментарии


Данный метод актуален при расчёте размеров и положений редакторов значений
 в ячейках таблицы для корректного отображения в [стороннем
 приложении](Setup.chm::/UiWebSetup/03_Setup_Web/Connecting_objects_web.htm), например, в react-приложении. Для
 расчёта размеров и положений редакторов значений используйте свойство
 TabSheetSettings.IsCalculateElements
 со значением True.


Расчёт доступен только для типа редакторов значений «[Раскрывающийся
 список справочника](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension)».


Метод возвращает объект типа PP.Ui.TabSheetCalculatedElements.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
