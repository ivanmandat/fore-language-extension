# IMsStringGenerator.Coord

IMsStringGenerator.Coord
-


# IMsStringGenerator.Coord


## Синтаксис


Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


## Описание


Свойство Coord определяет координату для оцененных коэффициентов модели.


## Комментарии


Если задана координата и свойство [IMsStringGenerator.ShowEstimatedCoeffs](IMsStringGenerator.ShowEstimatedCoeffs.htm) установлено в True, то будут генерироваться идентифицированные уравнения для следующих моделей:


-
ARIMA (если [IMsStringGenerator.AdvancedOptions](IMsStringGenerator.AdvancedOptions.htm) = MsStringGeneratorOptions.ExpandArimaName);


-
Линейная регрессия (оценка МНК);


-
Линейная регрессия (метод инструментальных переменных);


-
Нелинейная регрессия.


## Пример


Использование свойства приведено в примере для [IMsStringGenerator.AdvancedOptions](IMsStringGenerator.AdvancedOptions.htm).


См. также:


[IMsStringGenerator](IMsStringGenerator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
