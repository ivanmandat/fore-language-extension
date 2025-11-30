# ITabCellStyle.FormulaHidden

ITabCellStyle.FormulaHidden
-


# ITabCellStyle.FormulaHidden


## Синтаксис


FormulaHidden: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство FormulaHidden определяет признак видимости формулы при редактировании ячейки.


## Комментарии


Данное свойство актуально только для ячеек, содержащих формулы. По умолчанию свойству установлено значение [TriState.OffOption](ForeSys.chm::/Enums/TriState.htm) и при переводе ячейки в режим редактирования в ячейке отображается формула. Если свойству установить значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm), то при переводе ячейки в режим редактирования в ячейке будет отображаться рассчитанное значение. Возможность изменить формулу будет только через свойство [Formula](../ITabRange/ITabRange.Formula.htm).


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
