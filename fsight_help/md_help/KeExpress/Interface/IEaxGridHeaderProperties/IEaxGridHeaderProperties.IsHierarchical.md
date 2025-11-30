# IEaxGridHeaderProperties.IsHierarchical

IEaxGridHeaderProperties.IsHierarchical
-


# IEaxGridHeaderProperties.IsHierarchical


## Синтаксис


IsHierarchical: Boolean;


## Описание


Свойство IsHierarchical возвращает
 эффективное значение, отражающее использование [экспандеров](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#expander)
 в заголовке.


## Комментарии


Если свойству [IEaxGridHeaderProperties.IsHierarchical](IEaxGridHeaderProperties.IsHierarchical.htm)
 установлено значение TriState.OnOption
 или TriState.OffOption, то свойство
 IsHierarchical вернет True
 или False соответственно. Эффективное
 значение рассчитывается если свойству [IEaxGridHeaderProperties.IsHierarchical](IEaxGridHeaderProperties.IsHierarchical.htm)
 установлено значение TriState.Undefined.
 При этом если для родительского заголовка используются экспандеры, то
 свойство IsHierarchical вернет
 значение True, если не используются
 - False.


## Пример


Использование свойства приведено в примере для [IEaxGridHeaderProperties.AutoIndent](IEaxGridHeaderProperties.AutoIndent.htm).


См. также:


[IEaxGridHeaderProperties](IEaxGridHeaderProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
