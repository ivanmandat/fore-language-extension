# ISlSerieInt.BinningSettings

ISlSerieInt.BinningSettings
-


# ISlSerieInt.BinningSettings


## Синтаксис


BinningSettings: [IBinningSettingsInt](../IBinningSettingsInt/IBinningSettingsInt.htm);


## Описание


Свойство BinningSettings возвращает
 параметры процедуры Binning.


## Комментарии


Binning - это процедура подготовки данных для методов интеллектуального
 анализа данных, работающих с категориальными данными.


Суть метода заключается в том, что входной массив числовых данных разбивается
 на определённое число диапазонов в соответствии с заданными правилами
 разбиения. Полученные диапазоны далее используются в методах интеллектуального
 анализ как отдельные категории.


Если рассчитывается [градиентный
 бустинг](../ISmGradientBoostedTree/ISmGradientBoostedTree.htm) или ансамбль деревьев решений [Random
 Forest](../ISmRandomForest/ISmRandomForest.htm), то для задания входного массива данных используйте свойство
 [IBinningSettingsInt.DoubleValue](../IBinningSettingsInt/IBinningSettingsInt.DoubleValue.htm),
 а для получения результатов выполнения процедуры Binning - свойство [IBinningSettingsInt.IntegerValue](../IBinningSettingsInt/IBinningSettingsInt.IntegerValue.htm).


## Пример


Использование свойства приведено в примере для [ISmGradientBoostedTree.ClassificationSummary](../ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm).


См. также:


[ISlSerieInt](ISlSerieInt.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
