# IEaxGridHeaderProperties.IsAutoIndent

IEaxGridHeaderProperties.IsAutoIndent
-


# IEaxGridHeaderProperties.IsAutoIndent


## Синтаксис


IsAutoIndent: Boolean;


## Описание


Свойство IsAutoIndent возвращает
 эффективное значение, отражающее использование [отступов
 элементов уровня](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm) в заголовке.


## Комментарии


Если свойству [IEaxGridHeaderProperties.AutoIndent](IEaxGridHeaderProperties.AutoIndent.htm)
 установлено значение TriState.OnOption
 или TriState.OffOption, то свойство
 IsAutoIndent вернет True
 или False соответственно. Эффективное
 значение рассчитывается если свойству [IEaxGridHeaderProperties.AutoIndent](IEaxGridHeaderProperties.AutoIndent.htm)
 установлено значение TriState.Undefined.
 При этом если для родительского заголовка используются отступы, то свойство
 IsAutoIndent вернет значение True, если не используются - False.


См. также:


[IEaxGridHeaderProperties](IEaxGridHeaderProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
