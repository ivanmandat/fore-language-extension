# IMsFindFormulaInfo.Selection

IMsFindFormulaInfo.Selection
-


# IMsFindFormulaInfo.Selection


## Синтаксис


		Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection определяет
 отметку элементов измерений, которые будут искаться в термах формул.


## Комментарии


В отметку должны быть включены единичные отметки одного или нескольких
 измерений источника, который задаётся в свойстве [IMsFindFormulaInfo.Stub](IMsFindFormulaInfo.Stub.htm).
 Если отметка Selection не задана,
 то будут искаться все формулы, в которых имеются термы, основанные на
 источнике [IMsFindFormulaInfo.Stub](IMsFindFormulaInfo.Stub.htm).


## Пример


Использование свойства приведено в примере для метода [IMsMetaModel.FindFormulas](../IMsMetaModel/IMsMetaModel.FindFormulas.htm).


См. также:


[IMsFindFormulaInfo](IMsFindFormulaInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
