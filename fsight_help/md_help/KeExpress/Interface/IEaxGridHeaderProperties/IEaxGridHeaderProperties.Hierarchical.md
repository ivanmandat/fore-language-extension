# IEaxGridHeaderProperties.Hierarchical

IEaxGridHeaderProperties.Hierarchical
-


# IEaxGridHeaderProperties.Hierarchical


## Синтаксис


Hierarchical: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Hierarchical определяет,
 используются ли [экспандеры](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#expander)
 в заголовке.


## Комментарии


Если свойству установлено значение TriState.OnOption,
 то будут использоваться экспандеры в заголовке. При значении TriState.OffOption
 экспандеры не используются.


Если свойство принимает неопределенное значение TriState.Undefined,
 то признак использования экспандеров наследуется от родительского заголовка.
 При этом эффективное значение с учетом наследования вернет свойство [IEaxGridHeaderProperties.IsHierarchical](IEaxGridHeaderProperties.IsHierarchical.htm).


По умолчанию свойству установлено значение TriState.OnOption.


## Пример


Использование свойства приведено в примере для [IEaxGridHeaderProperties.AutoIndent](IEaxGridHeaderProperties.AutoIndent.htm).


См. также:


[IEaxGridHeaderProperties](IEaxGridHeaderProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
