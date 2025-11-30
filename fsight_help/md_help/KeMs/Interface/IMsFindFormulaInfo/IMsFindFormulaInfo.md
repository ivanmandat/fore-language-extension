# IMsFindFormulaInfo

IMsFindFormulaInfo
-


# IMsFindFormulaInfo


Сборка: Ms;


## Описание


Интерфейс IMsFindFormulaInfo
 предназначен для задания условий поиска формул.


## Иерархия наследования


           IMsFindFormulaInfo


## Комментарии


Условия поиска возвращают свойства [IMsMetaModel.CreateFormulaFindInfo](../IMsMetaModel/IMsMetaModel.CreateFormulaFindInfo.htm),
 [ICalcAlgorithm\ICalcAlgorithm.CreateFormulaFindInfo](KeAlgo.chm::/Interface/ICalcAlgorithm/ICalcAlgorithm.CreateFormulaFindInfo.htm).
 Для поиска используйте методы [IMsMetaModel.FindFormulas](../IMsMetaModel/IMsMetaModel.FindFormulas.htm),
 [ICalcAlgorithm.FindFormulas](KeAlgo.chm::/Interface/ICalcAlgorithm/ICalcAlgorithm.FindFormulas.htm).


Для поиска обязательно должно быть определено свойство [IMsFindFormulaInfo.Stub](IMsFindFormulaInfo.Stub.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ParametrizedDims](IMsFindFormulaInfo.ParametrizedDims.htm)
		 Свойство ParametrizedDims
		 возвращает настройки параметрических измерений.


		 ![](../../Property_Image.gif)
		 [Selection](IMsFindFormulaInfo.Selection.htm)
		 Свойство Selection
		 определяет отметку элементов измерений, которые будут искаться
		 в термах формул.


		 ![](../../Property_Image.gif)
		 [Stub](IMsFindFormulaInfo.Stub.htm)
		 Свойство Stub определяет
		 источник данных, на котором должны быть основана искомые термы
		 в формулах.


		 ![](../../Property_Image.gif)
		 [UseParamDims](IMsFindFormulaInfo.UseParamDims.htm)
		 Свойство UseParamDims
		 определяет признак учёта параметрических измерений в срезах при
		 поиске.


		 ![](../../Property_Image.gif)
		 [VarKind](IMsFindFormulaInfo.VarKind.htm)
		 Свойство VarKind определяет
		 тип переменных, к которым должен относиться [указанный
		 источник](IMsFindFormulaInfo.Stub.htm).


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
