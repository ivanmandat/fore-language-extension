# ITsInversionInfo.Seasonality

ITsInversionInfo.Seasonality
-


# ITsInversionInfo.Seasonality


## Синтаксис


Seasonality: [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm);


## Описание


Свойство Seasonality определяет
 вид сезонности, используемой для устранения сезонности.


## Комментарии


Свойство учитывается, если [ITsInversionInfo.Inversion](ITsInversionInfo.Inversion.htm)
 = [TsInversion.SA](../../Enums/TsInversion.htm).


По умолчанию Seasonality = SeasonalityType.None,
 таким образом, вид сезонности определяется автоматически. Если в исходном
 ряде отсутствуют отрицательные и нулевые значения, то тип сезонности мультипликативный,
 если присутствуют - аддитивный.


## Пример


Использование свойства приведено в примере для [ITsInversionInfo.K](ITsInversionInfo.K.htm).


См. также:


[ITsInversionInfo](ITsInversionInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
