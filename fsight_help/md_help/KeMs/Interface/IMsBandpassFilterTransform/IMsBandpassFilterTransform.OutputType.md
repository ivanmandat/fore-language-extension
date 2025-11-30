# IMsBandpassFilterTransform.OutputType

IMsBandpassFilterTransform.OutputType
-


# IMsBandpassFilterTransform.OutputType


## Синтаксис


		OutputType: [MsBPFOutputType](../../Enums/MsBPFOutputType.htm);


## Описание


Свойство OutputType определяет
 компоненту, выгружаемую в моделируемую переменную после расчёта метода.


## Комментарии


По умолчанию выгружается циклическая компонента, т.е. OutputType
 = MsBPFOutputType.CycleSeries.


Для выгрузки циклической компоненты в дополнительную переменную используйте
 свойство [IMsBandpassFilterTransform.CycleTerm](IMsBandpassFilterTransform.CycleTerm.htm),
 для выгрузки нециклической компоненты - [IMsBandpassFilterTransform.NonCyclicalTerm](IMsBandpassFilterTransform.NonCyclicalTerm.htm).


## Пример


Использование свойства приведено в примере для [IMsBandpassFilterTransform.WeightsMatrix](IMsBandpassFilterTransform.WeightsMatrix.htm).


См. также:


[IMsBandpassFilterTransform](IMsBandpassFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
