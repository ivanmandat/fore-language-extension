# IPrxDataIslandHeaderCommon.AutoIndent

IPrxDataIslandHeaderCommon.AutoIndent
-


# IPrxDataIslandHeaderCommon.AutoIndent


## Синтаксис


AutoIndent: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AutoIndent определяет,
 будут ли использованы автоматические отступы для элементов.


## Комментарии


Элементам проставляется отступ в зависимости от их уровня вложенности
 по иерархии измерений заголовка относительно других элементов этого столбца/строки.
 По умолчанию автоматические отступы используются (OnOption). Значение
 отступа определяет свойство [IPrxDataIslandHeader.HierarchyIndent](../IPrxDataIslandHeader/IPrxDataIslandHeader.HierarchyIndent.htm).


Отступы в области данных могут быть отображены, даже если автоматические
 отступы не используются (OffOption). Это возможно в случае, если свойство
 установлено в OffOption и:


	- свойство [IPrxDataIslandProperties.UseStyleFormatting](../IPrxDataIslandProperties/IPrxDataIslandProperties.UseStyleFormatting.htm)
	 установлено в False, то будет
	 использовано существующее оформление листа отчета. То есть в области
	 данных будут проставлены отступы, если они заданы для ячеек листа
	 отчета.


	- заданы отступы в оформлении для заголовков области данных.


См. также:


[IPrxDataIslandHeaderCommon](IPrxDataIslandHeaderCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
