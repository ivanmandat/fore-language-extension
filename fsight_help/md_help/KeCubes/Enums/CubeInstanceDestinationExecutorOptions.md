# CubeInstanceDestinationExecutorOptions

CubeInstanceDestinationExecutorOptions
-


# CubeInstanceDestinationExecutorOptions


## Описание


Перечисление CubeInstanceDestinationExecutorOptions
 используется для выбора варианта применения закешированных данных для
 расчёта отстроенного куба.


Используется следующими методами:


	- [ICubeInstanceDestinationExecutor.PerformExecuteO](../Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PerformExecuteO.htm);


	- [ICubeInstanceDestination.CreateExecutorO](../Interface/ICubeInstanceDestination/ICubeInstanceDestination.CreateExecutorO.htm);


	- [IInMemManager.GetMatrix](../Interface/IInMemManager/IInMemManager.GetMatrix.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 -2147483648
		 RWMutex. Включить поддержку
		 блокировок для матрицы с результатами расчёта куба.


		 0
		 None. Не использовать
		 закешированные данные для расчёта куба.


		 1
		 AffectOnly. Не предназначено
		 для использования в прикладном коде. Оставлено для совместимости
		 с предыдущими версиями платформы.


		 2048
		 MarkAggregationsUnitsMismatch.
		 Отмечать в результирующей матрице отдельным флагом данные, агрегированные
		 по показателям с разными единицами измерения. Значение флага будет
		 доступно в свойстве [IMatrixIterator.ValueFlag](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm).

Для учёта показателей с разными единицами измерения
		 свойству [IStandardCubeDestination.MarkCalculatedUnitsMismatch](../Interface/IStandardCubeDestination/IStandardCubeDestination.MarkCalculatedUnitsMismatch.htm)
		 должно быть установлено значение True.


		 8192
		 KeepSourceMatrices.
		 Расчёт куба с возможностью получения доступа к матрицам источников
		 куба. Используется при работе с виртуальными кубами, которые имеют
		 несколько источников.


		 16384
		 UseCombinedCubeExecutor.
		 Использовать параллельное вычисление кубов при расчёте. Значение
		 актуально при работе с виртуальным кубом, который построен на
		 стандартных кубах. Для того, чтобы была возможность параллельного
		 вычисления, стандартные кубы должны удовлетворять требованиям,
		 которые указаны в описании интерфейса [ICubeCombinedExecutor](../Interface/ICubeCombinedExecutor/ICubeCombinedExecutor.htm).


		 65536
		 MCEMain. Зарезервировано
		 для внутреннего использования.


		 131072
		 MCEAgg. Зарезервировано
		 для внутреннего использования.


		 524288
		 MatrixWOFixed. Не включать
		 в список измерений матрицы фиксированные измерения источника.
		 Данный режим используется для сокращения объёма результирующей
		 матрицы и применяется только при работе с кубами ADOMD.


		 2097152
		 UseTempTables.
		 Использовать временные таблицы. Данное значение актуально для
		 использования, если производится расчёт вычисляемого куба с установленным
		 альтернативным кубом. После расчёта сразу же производится сохранение
		 данных в альтернативный куб. При этом сначала все данные вставляются
		 во временную таблицу, затем на сервере СУБД осуществляется проверка
		 и перенос недостающих данных в основную таблицу.
		Примечание.
		 Для использования временных таблиц, таблица, в которой хранятся
		 данные альтернативного куба, должна быть построена на уникальных
		 индексах.


		 8388608
		 MatrixProxy. Использовать
		 объект-посредник типа [IMatrixWritableProxy](KeMatrix.chm::/Interface/IMatrixWritableProxy/IMatrixWritableProxy.htm)
		 матрицы данных, что позволяет сохранять раздельно матрицу с исходными
		 данными и матрицу с изменёнными данными.


		 16777216
		 MarkAggregationsAndCalcs.
		 Отмечать в результирующей матрице агрегированные данные и вычисляемые
		 показатели отдельным флагом, значение которого будет доступно
		 в свойстве [IMatrixIterator.ValueFlag](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.ValueFlag.htm).
		 Отметка флагом в дальнейшем позволяет сохранять раздельно матрицу
		 с фактическими данным и расчётными (агрегированными). Может способствовать
		 ускорению сохранения данных.


		 134217728
		 DrillThrough. Использовать
		 детализацию запросов при расчёте куба.


		 268435456
		 Cached. Использовать
		 закешированные данные для расчёта куба.


		 536870912
		 Reload. Перезагрузить
		 данные в кеш из СУБД перед расчётом куба.


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
