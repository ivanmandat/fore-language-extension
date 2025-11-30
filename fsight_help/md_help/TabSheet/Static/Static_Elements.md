# Статические методы сборки Tab

Статические методы сборки Tab
-


# Статические методы сборки Tab


## Описание


Статические методы сборки являются глобальными внутри сборки, в которой
 они реализованы. Основная часть статических функций сборки Tab
 - это статистические, математические и финансовые функции, функции для
 работы с датой и временем, а также функции для преобразования в различные
 форматы данных. Все функции оптимизированы для приема в качестве входных
 параметров - ячеек, либо диапазона ячеек. Работа с данными осуществляется
 посредством класса Variant.


Примечание.
 При работе со сборкой Tab на форме
 может возникнуть конфликт использования статических методов, имеющих наименования
 аналогичные свойствам формы (Left, Top и т.д.). Для разрешения конфликта
 необходимо за пределами класса формы реализовать пользовательскую функцию,
 в которой в свою очередь будет вызываться необходимый статический метод
 сборки Tab.


## Математические методы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [Abs](MathLib.chm::/Interface/IMath/IMath.Abs.htm)
		 Метод Abs возвращает
		 модуль (абсолютную величину) вещественного числа.


		 ![](../Sub_Image.gif)
		 [AbsD](MathLib.chm::/Interface/IMath/IMath.AbsD.htm)
		 Метод AbsD возвращает
		 модуль (абсолютную величину) десятичного числа большой точности.


		 ![](../Sub_Image.gif)
		 [AbsI](MathLib.chm::/Interface/IMath/imath.absi.htm)
		 Метод AbsI возвращает
		 модуль (абсолютную величину) целого числа.


		 ![](../Sub_Image.gif)
		 [ACos](MathLib.chm::/Interface/IMath/IMath.ACos.htm)
		 Метод ACos возвращает
		 арккосинус числа.


		 ![](../Sub_Image.gif)
		 [ACosH](MathLib.chm::/Interface/IMath/IMath.ACosH.htm)
		 Метод ACosH возвращает
		 гиперболический арккосинус числа.


		 ![](../Sub_Image.gif)
		 [ACot](MathLib.chm::/Interface/IMath/IMath.ACot.htm)
		 Метод ACot возвращает
		 арккотангенс заданного числа.


		 ![](../Sub_Image.gif)
		 [ACotH](MathLib.chm::/Interface/IMath/IMath.ACotH.htm)
		 Метод ACotH возвращает
		 гиперболический арккотангенс заданного числа.


		 ![](../Sub_Image.gif)
		 [ASin](MathLib.chm::/Interface/IMath/IMath.ASin.htm)
		 Метод ASin возвращает
		 арксинус числа.


		 ![](../Sub_Image.gif)
		 [ASinH](MathLib.chm::/Interface/IMath/IMath.ASinH.htm)
		 Метод ASinH возвращает
		 гиперболический арксинус числа.


		 ![](../Sub_Image.gif)
		 [ATan](MathLib.chm::/Interface/IMath/IMath.ATan.htm)
		 Метод ATan возвращает
		 арктангенс числа.


		 ![](../Sub_Image.gif)
		 [ATan2](MathLib.chm::/Interface/IMath/IMath.ATan2.htm)
		 Метод ATan2 возвращает
		 арктангенс для заданных координат X
		 и Y.


		 ![](../Sub_Image.gif)
		 [ATanH](MathLib.chm::/Interface/IMath/IMath.ATanH.htm)
		 Метод ATanH возвращает
		 гиперболический арктангенс числа.


		 ![](../Sub_Image.gif)
		 [Average](MathLib.chm::/Interface/IMath/IMath.Average.htm)
		 Метод Average вычисляет
		 среднее значение элементов вещественного массива.


		 ![](../Sub_Image.gif)
		 [AverageI](MathLib.chm::/Interface/IMath/imath.averagei.htm)
		 Метод AverageI вычисляет
		 среднее значение элементов целочисленного массива с округлением
		 до ближайшего целого значения.


		 ![](../Sub_Image.gif)
		 [Ceiling](MathLib.chm::/Interface/IMath/IMath.Ceiling.htm)
		 Метод Ceiling округляет
		 с избытком до ближайшего числа, кратного точности.


		 ![](../Sub_Image.gif)
		 [CeilingD](MathLib.chm::/Interface/IMath/IMath.CeilingD.htm)
		 Метод CeilingD округляет
		 с избытком до ближайшего десятичного числа большой точности.


		 ![](../Sub_Image.gif)
		 [CeilingI](MathLib.chm::/Interface/IMath/imath.ceilingi.htm)
		 Метод CeilingI округляет
		 с избытком до ближайшего целого числа, кратного точности.


		 ![](../Sub_Image.gif)
		 [CholeskyDecomposition](MathLib.chm::/Interface/IMath/IMath.CholeskyDecomposition.htm)
		 Метод CholeskyDecomposition
		 осуществляет разложение Холецкого для матрицы.


		 ![](../Sub_Image.gif)
		 [Combin](MathLib.chm::/Interface/IMath/IMath.Combin.htm)
		 Метод Combin возвращает
		 количество комбинаций для заданного числа объектов.


		 ![](../Sub_Image.gif)
		 [Cos](MathLib.chm::/Interface/IMath/IMath.Cos.htm)
		 Метод Cos возвращает
		 косинус для заданного угла.


		 ![](../Sub_Image.gif)
		 [CosH](MathLib.chm::/Interface/IMath/IMath.CosH.htm)
		 Метод CosH возвращает
		 гиперболический косинус заданного числа.


		 ![](../Sub_Image.gif)
		 [Cot](MathLib.chm::/Interface/IMath/IMath.Cot.htm)
		 Метод Cot возвращает
		 котангенс заданного угла.


		 ![](../Sub_Image.gif)
		 [CotH](MathLib.chm::/Interface/IMath/IMath.CotH.htm)
		 Метод CotH возвращает
		 гиперболический котангенс заданного числа.


		 ![](../Sub_Image.gif)
		 [Degrees](MathLib.chm::/Interface/IMath/IMath.Degrees.htm)
		 Метод Degrees возвращает
		 значение, преобразованное из радиан в градусы.


		 ![](../Sub_Image.gif)
		 [DivD](MathLib.chm::/Interface/IMath/IMath.DivD.htm)
		 Метод DivD возвращает
		 целую часть частного при делении двух десятичных чисел большой
		 точности.


		 ![](../Sub_Image.gif)
		 [Even](MathLib.chm::/Interface/IMath/IMath.Even.htm)
		 Метод Even возвращает
		 значение, округленное до ближайшего четного целого.


		 ![](../Sub_Image.gif)
		 [Exp](MathLib.chm::/Interface/IMath/IMath.Exp.htm)
		 Метод Exp возвращает
		 результат возведения числа «е» в указанную степень.


		 ![](../Sub_Image.gif)
		 [Fact](MathLib.chm::/Interface/IMath/IMath.Fact.htm)
		 Метод Fact возвращает
		 факториал указанного числа.


		 ![](../Sub_Image.gif)
		 [Floor](MathLib.chm::/Interface/IMath/IMath.Floor.htm)
		 Метод Floor возвращает
		 результат округления вещественного числа до кратного заданной
		 точности с недостатком.


		 ![](../Sub_Image.gif)
		 [FloorD](MathLib.chm::/Interface/IMath/IMath.FloorD.htm)
		 Метод FloorD возвращает
		 результат округления десятичного числа большой точности до кратного
		 заданной точности с недостатком.


		 ![](../Sub_Image.gif)
		 [FloorI](MathLib.chm::/Interface/IMath/imath.floori.htm)
		 Метод FloorI возвращает
		 результат округления целого числа до кратного заданной точности
		 с недостатком.


		 ![](../Sub_Image.gif)
		 [Gcd](MathLib.chm::/Interface/IMath/IMath.Gcd.htm)
		 Метод Gcd возвращает
		 наибольший общий делитель двух или более целых чисел.


		 ![](../Sub_Image.gif)
		 [Int](MathLib.chm::/Interface/IMath/IMath.Int.htm)
		 Метод Int округляет
		 указанное число до ближайшего меньшего целого.


		 ![](../Sub_Image.gif)
		 [IntD](MathLib.chm::/Interface/IMath/IMath.IntD.htm)
		 Метод IntD округляет
		 указанное десятичное число большой точности до ближайшего меньшего
		 целого.


		 ![](../Sub_Image.gif)
		 [Lcm](MathLib.chm::/Interface/IMath/IMath.Lcm.htm)
		 Метод Lcm возвращает
		 наименьшее общее кратное целых чисел.


		 ![](../Sub_Image.gif)
		 [Ln](MathLib.chm::/Interface/IMath/IMath.Ln.htm)
		 Метод Ln возвращает
		 натуральный логарифм для заданного числа.


		 ![](../Sub_Image.gif)
		 [Log](MathLib.chm::/Interface/IMath/IMath.Log.htm)
		 Метод Log возвращает
		 логарифм числа по заданному основанию.


		 ![](../Sub_Image.gif)
		 [Log10](MathLib.chm::/Interface/IMath/IMath.Log10.htm)
		 Метод Log10 возвращает
		 десятичный логарифм заданного числа.


		 ![](../Sub_Image.gif)
		 [Max](MathLib.chm::/Interface/IMath/IMath.Max.htm)
		 Метод Max осуществляет
		 поиск максимального значения в вещественном массиве.


		 ![](../Sub_Image.gif)
		 [Maxa](uireport.chm::/desktop/organizational_management/Function/Math/Maxa.htm)
		 Метод Maxa возвращает
		 максимальное значение в массиве ячеек, содержащем не только числовые
		 значения.


		 ![](../Sub_Image.gif)
		 [MaxI](MathLib.chm::/Interface/IMath/imath.maxi.htm)
		 Метод MaxI осуществляет
		 поиск максимального значения в целочисленном массиве.


		 ![](../Sub_Image.gif)
		 [MDeterm](MathLib.chm::/Interface/IMath/IMath.MDeterm.htm)
		 Метод MDeterm возвращает
		 определитель матрицы, хранящейся в массиве ячеек.


		 ![](../Sub_Image.gif)
		 [Min](MathLib.chm::/Interface/IMath/IMath.Min.htm)
		 Метод Min осуществляет
		 поиск минимального значения в вещественном массиве.


		 ![](../Sub_Image.gif)
		 [Mina](uireport.chm::/desktop/organizational_management/Function/Math/Mina.htm)
		 Метод Mina возвращает
		 минимальное значение в массиве ячеек, содержащем не только числовые
		 значения.


		 ![](../Sub_Image.gif)
		 [MinI](MathLib.chm::/Interface/IMath/imath.mini.htm)
		 Метод MinI осуществляет
		 поиск минимального значения в целочисленном массиве.


		 ![](../Sub_Image.gif)
		 [MInverse](MathLib.chm::/Interface/IMath/IMath.MInverse.htm)
		 Метод MInverse возвращает
		 матрицу, обратную к указанной.


		 ![](../Sub_Image.gif)
		 [MMult](MathLib.chm::/Interface/IMath/IMath.MMult.htm)
		 Метод MMult возвращает
		 произведение матриц.


		 ![](../Sub_Image.gif)
		 [Mod_](MathLib.chm::/Interface/IMath/IMath.Mod_.htm)
		 Метод Mod_ возвращает
		 остаток от деления аргумента на делитель.


		 ![](../Sub_Image.gif)
		 [ModD](MathLib.chm::/Interface/IMath/IMath.ModD.htm)
		 Метод ModD возвращает
		 остаток от деления двух десятичных чисел большой точности.


		 ![](../Sub_Image.gif)
		 [MRound](MathLib.chm::/Interface/IMath/IMath.MRound.htm)
		 Метод MRound возвращает
		 результат округления с избытком.


		 ![](../Sub_Image.gif)
		 [Msvd](MathLib.chm::/Interface/IMath/IMath.Msvd.htm)
		 Метод Msvd возвращает
		 результат сингулярного разложения матрицы.


		 ![](../Sub_Image.gif)
		 [Multinomial](MathLib.chm::/Interface/IMath/IMath.Multinomial.htm)
		 Метод Multinomial возвращает
		 отношение факториала суммы значений к произведению факториалов.


		 ![](../Sub_Image.gif)
		 [Odd](MathLib.chm::/Interface/IMath/IMath.Odd.htm)
		 Метод Odd возвращает
		 число, округленное до ближайшего нечетного целого.


		 ![](../Sub_Image.gif)
		 [Pi](MathLib.chm::/Interface/IMath/IMath.Pi.htm)
		 Метод Pi возвращает
		 математическую константу «Пи».


		 ![](../Sub_Image.gif)
		 [Power](MathLib.chm::/Interface/IMath/IMath.Power.htm)
		 Метод Power возвращает
		 результат возведения вещественного числа в вещественную степень.


		 ![](../Sub_Image.gif)
		 [PowerI](MathLib.chm::/Interface/IMath/imath.poweri.htm)
		 Метод PowerI возвращает
		 результат возведения целого числа в целую степень.


		 ![](../Sub_Image.gif)
		 [Product](MathLib.chm::/Interface/IMath/IMath.Product.htm)
		 Метод Product возвращает
		 произведение указанных чисел.


		 ![](../Sub_Image.gif)
		 [Quotient](MathLib.chm::/Interface/IMath/IMath.Quotient.htm)
		 Метод Quotient возвращает
		 целую часть результата деления с остатком.


		 ![](../Sub_Image.gif)
		 [Radians](MathLib.chm::/Interface/IMath/IMath.Radians.htm)
		 Метод Radians возвращает
		 значение аргумента, преобразованное из градусов в радианы.


		 ![](../Sub_Image.gif)
		 [Rand](MathLib.chm::/Interface/IMath/IMath.Rand.htm)
		 Метод Rand возвращает
		 равномерно распределенное случайное число из диапазона [0, 1).


		 ![](../Sub_Image.gif)
		 [RandBetween](MathLib.chm::/Interface/IMath/IMath.RandBetween.htm)
		 Метод RandBetween возвращает
		 случайное вещественное число между двумя заданными числами.


		 ![](../Sub_Image.gif)
		 [RandBetweenI](MathLib.chm::/Interface/IMath/imath.randbetweeni.htm)
		 Метод RandBetweenI
		 возвращает случайное целое число между двумя заданными числами.


		 ![](../Sub_Image.gif)
		 [RndPermutation](MathLib.chm::/Interface/IMath/IMath.RndPermutation.htm)
		 Метод RndPermutation
		 осуществляет псевдослучайную перестановку массива чисел.


		 ![](../Sub_Image.gif)
		 [RndSample](MathLib.chm::/Interface/IMath/IMath.RndSample.htm)
		 Метод RndSample осуществляет
		 псевдослучайную выборку из массива чисел.


		 ![](../Sub_Image.gif)
		 [Roman](MathLib.chm::/Interface/IMath/IMath.Roman.htm)
		 Метод Roman возвращает
		 результат преобразования арабского числа в римское, как текст.


		 ![](../Sub_Image.gif)
		 [Round](MathLib.chm::/Interface/IMath/IMath.Round.htm)
		 Метод Round возвращает
		 число, округленное до указанного количества десятичных разрядов.


		 ![](../Sub_Image.gif)
		 [RoundD](MathLib.chm::/Interface/IMath/IMath.RoundD.htm)
		 Метод RoundD возвращает
		 десятичное число большой точности, округленное до указанного количества
		 десятичных разрядов.


		 ![](../Sub_Image.gif)
		 [RoundDDown](MathLib.chm::/Interface/IMath/IMath.RoundDDown.htm)
		 Метод RoundDDown возвращает
		 десятичное число большой точности, округленное до ближайшего меньшего
		 по модулю значения.


		 ![](../Sub_Image.gif)
		 [RoundDown](MathLib.chm::/Interface/IMath/IMath.RoundDown.htm)
		 Метод RoundDown возвращает
		 число, округленное до ближайшего меньшего по модулю значения.


		 ![](../Sub_Image.gif)
		 [RoundDUp](MathLib.chm::/Interface/IMath/IMath.RoundDUp.htm)
		 Метод RoundDUp возвращает
		 десятичное число большой точности, округленное до ближайшего большего
		 по модулю.


		 ![](../Sub_Image.gif)
		 [RoundUp](MathLib.chm::/Interface/IMath/IMath.RoundUp.htm)
		 Метод RoundUp возвращает
		 число, округленное до ближайшего большего по модулю.


		 ![](../Sub_Image.gif)
		 [SeriesSum](MathLib.chm::/Interface/IMath/IMath.SeriesSum.htm)
		 Метод SeriesSum возвращает
		 сумму степенного ряда.


		 ![](../Sub_Image.gif)
		 [Sign](MathLib.chm::/Interface/IMath/IMath.Sign.htm)
		 Метод Sign определяет
		 знак вещественного числа.


		 ![](../Sub_Image.gif)
		 [Sin](MathLib.chm::/Interface/IMath/IMath.Sin.htm)
		 Метод Sin возвращает
		 синус заданного числа.


		 ![](../Sub_Image.gif)
		 [SinH](MathLib.chm::/Interface/IMath/IMath.SinH.htm)
		 Метод SinH возвращает
		 гиперболический синус заданного числа.


		 ![](../Sub_Image.gif)
		 [Sqrt](MathLib.chm::/Interface/IMath/IMath.Sqrt.htm)
		 Метод Sqrt возвращает
		 положительное значение квадратного корня.


		 ![](../Sub_Image.gif)
		 [SqrtPi](MathLib.chm::/Interface/IMath/IMath.SqrtPi.htm)
		 Метод SqrtPi возвращает
		 квадратный корень из значения выражения «Value * «Пи».


		 ![](../Sub_Image.gif)
		 [Sum](MathLib.chm::/Interface/IMath/IMath.Sum.htm)
		 Метод Sum возвращает
		 сумму элементов (вещественных чисел) указанного массива.


		 ![](../Sub_Image.gif)
		 [SumD](MathLib.chm::/Interface/IMath/IMath.SumD.htm)
		 Метод SumD возвращает
		 сумму элементов указанного массива десятичных чисел большой
		 точности.


		 ![](../Sub_Image.gif)
		 [SumI](MathLib.chm::/Interface/IMath/imath.sumi.htm)
		 Метод SumI возвращает
		 сумму элементов (целых чисел) указанного массива.


		 ![](../Sub_Image.gif)
		 [Sumif](UiReport.chm::/desktop/organizational_management/Function/Math/Sumif.htm)
		 Метод Sumif возвращает
		 сумму чисел в заданном интервале ячеек, удовлетворяющих указанному
		 условию.


		 ![](../Sub_Image.gif)
		 [SumProduct](MathLib.chm::/Interface/IMath/imath.sumproduct.htm)
		 Метод SumProduct перемножает
		 соответствующие элементы заданных массивов и возвращает сумму
		 произведений.


		 ![](../Sub_Image.gif)
		 [SumSq](MathLib.chm::/Interface/IMath/IMath.SumSq.htm)
		 Метод SumSq возвращает
		 сумму квадратов элементов массива.


		 ![](../Sub_Image.gif)
		 [SumSqD](MathLib.chm::/Interface/IMath/IMath.SumSqD.htm)
		 Метод SumSqD возвращает
		 сумму квадратов элементов указанного массива десятичных чисел
		 большой точности.


		 ![](../Sub_Image.gif)
		 [SumX2MY2](MathLib.chm::/Interface/IMath/IMath.SumX2MY2.htm)
		 Метод SumX2MY2 возвращает
		 сумму разностей квадратов соответствующих значений в двух массивах.


		 ![](../Sub_Image.gif)
		 [SumX2PY2](MathLib.chm::/Interface/IMath/IMath.SumX2PY2.htm)
		 Метод SumX2PY2 возвращает
		 сумму сумм квадратов соответствующих элементов двух массивов.


		 ![](../Sub_Image.gif)
		 [SumXMY2](MathLib.chm::/Interface/IMath/IMath.SumXMY2.htm)
		 Метод SumXM2 возвращает
		 сумму квадратов разностей соответствующих значений в двух массивах.


		 ![](../Sub_Image.gif)
		 [Tan](MathLib.chm::/Interface/IMath/IMath.Tan.htm)
		 Метод Tan возвращает
		 тангенс заданного угла.


		 ![](../Sub_Image.gif)
		 [TanH](MathLib.chm::/Interface/IMath/IMath.TanH.htm)
		 Метод TanH возвращает
		 гиперболический тангенс заданного угла.


		 ![](../Sub_Image.gif)
		 [Trunc](MathLib.chm::/Interface/IMath/IMath.Trunc.htm)
		 Метод Trunc усекает
		 число до указанного количества десятичных разрядов.


## Ссылки и массивы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [Offset](UiReport.chm::/desktop/organizational_management/Function/Link_Array/UiReport_Func_LinkArray_Offset.htm)
		 Метод Offset возвращает
		 диапазон ячеек, смещенный в соответствии с заданными параметрами.
		 Смещение производится на RowCount строк, ColumnCount столбцов
		 и рассчитывается от диапазона Range. По умолчанию, высота и ширина
		 возвращаемого диапазона совпадает с шириной и высотой исходного
		 диапазона. Используя параметры Height и Width, можно задать высоту
		 и ширину возвращаемого диапазона.


		 ![](../Sub_Image.gif)
		 [Range](UiReport.chm::/desktop/organizational_management/Function/Link_Array/UiReport_Func_LinkArray_Range.htm)
		 Метод Range возвращает
		 диапазон по ссылке.


		 ![](../Sub_Image.gif)
		 [Rng](UiReport.chm::/desktop/organizational_management/Function/Link_Array/UiReport_Func_LinkArray_Rng.htm)
		 Метод Rng возвращает
		 диапазон по ссылке на ячейку.


## Поиск


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [Choose](uireport.chm::/desktop/organizational_management/Function/Find/Choose.htm)
		 Метод Choose выбирает
		 значение из списка значений по номеру индекса.


		 ![](../Sub_Image.gif)
		 [Column](uireport.chm::/desktop/organizational_management/Function/Find/Column.htm)
		 Метод Column возвращает
		 номер столбца, на который указывает ссылка.


		 ![](../Sub_Image.gif)
		 [Columns](uireport.chm::/desktop/organizational_management/Function/Find/Columns.htm)
		 Метод Columns возвращает
		 количество столбцов в ссылке.


		 ![](../Sub_Image.gif)
		 [Row](uireport.chm::/desktop/organizational_management/Function/Find/Row.htm)
		 Метод Column возвращает
		 номер столбца, на который указывает ссылка.


		 ![](../Sub_Image.gif)
		 [Rows](uireport.chm::/desktop/organizational_management/Function/Find/Rows.htm)
		 Метод Columns возвращает
		 количество столбцов в ссылке.


## Дата и время


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [Date](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Date.htm)
		 Метод Date возвращает
		 дату, составленную из указанного года, месяца и дня.


		 ![](../Sub_Image.gif)
		 [DateValue](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_DateValue.htm)
		 Метод DateValue возвращает
		 результат преобразования строки в дату.


		 ![](../Sub_Image.gif)
		 [Day](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Day.htm)
		 Метод Day возвращает
		 день в заданной дате. День возвращается как целое число в диапазоне
		 [1, 31].


		 ![](../Sub_Image.gif)
		 [Edate](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Edate.htm)
		 Метод Edate возвращает
		 дату, увеличенную/уменьшенную на заданное число месяцев.


		 ![](../Sub_Image.gif)
		 [Hour](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Hour.htm)
		 Метод Hour возвращает
		 час, соответствующий заданному времени. Час определяется как целое
		 число в диапазоне [0, 23].


		 ![](../Sub_Image.gif)
		 [Minute](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Minute.htm)
		 Метод Minute возвращает
		 минуты, соответствующие заданному времени. Минуты определяются
		 как целое число в диапазоне [0, 59].


		 ![](../Sub_Image.gif)
		 [Month](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Month.htm)
		 Метод Month возвращает
		 месяц в заданной дате. Месяц возвращается как целое число в диапазоне
		 [1, 12].


		 ![](../Sub_Image.gif)
		 [Now](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Now.htm)
		 Метод Now возвращает
		 текущую дату и время.


		 ![](../Sub_Image.gif)
		 [Second](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Second.htm)
		 Метод Second возвращает
		 секунды, соответствующие заданному времени. Секунды определяется
		 как целое число в диапазоне [0, 59].


		 ![](../Sub_Image.gif)
		 [Time](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Time.htm)
		 Метод Time возвращает
		 время, составленное по указанным часам, минутам и секундам.


		 ![](../Sub_Image.gif)
		 [TimeValue](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_TimeValue.htm)
		 Метод TimeValue возвращает
		 результат преобразования строки во время.


		 ![](../Sub_Image.gif)
		 [Today](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Today.htm)
		 Метод Today возвращает
		 текущую дату.


		 ![](../Sub_Image.gif)
		 [Weekday](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Weekday.htm)
		 Метод Weekday возвращает
		 номер дня недели по указанной дате. День недели возвращается как
		 целое число в диапазоне [1, 7].


		 ![](../Sub_Image.gif)
		 [Year](UiReport.chm::/desktop/organizational_management/Function/Date_Time/UiReport_Func_DateTime_Year.htm)
		 Метод Year возвращает
		 год по заданной дате.


## Текстовые методы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [_T](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_T.htm)
		 Метод _T определяет,
		 может ли значение быть преобразовано к строковому типу. Если да,
		 то возвращает текст, если нет - пустую строку.


		 ![](../Sub_Image.gif)
		 [Concatenate](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Concatenate.htm)
		 Метод Concatenate возвращает
		 результат объединения двух или более текстовых строк в одну.


		 ![](../Sub_Image.gif)
		 [Exact](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Exact.htm)
		 Метод Exact сравнивает
		 с учетом регистра две строки текста и возвращает True,
		 если они в точности совпадают, и False
		 - в противном случае.


		 ![](../Sub_Image.gif)
		 [Find](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Find.htm)
		 Метод Find возвращает
		 индекс первого вхождения в исходную строку искомой подстроки,
		 относительно начала исходной строки.


		 ![](../Sub_Image.gif)
		 [Fixed](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Fixed.htm)
		 Метод Fixed округляет
		 число до заданного числа знаков после запятой и возвращает результат
		 в виде строки с запятыми или без.


		 ![](../Sub_Image.gif)
		 [Left](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Left.htm)
		 Метод Left возвращает
		 указанное число символов от начала строки.


		 ![](../Sub_Image.gif)
		 [Len](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Len.htm)
		 Метод Len возвращает
		 количество символов в строке.


		 ![](../Sub_Image.gif)
		 [Lower](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Lower.htm)
		 Метод Lower преобразует
		 все символы строки к нижнему регистру.


		 ![](../Sub_Image.gif)
		 [Mid](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Mid.htm)
		 Метод Mid извлекает
		 подстроку указанной длины из исходной строки с заданной начальной
		 позиции.


		 ![](../Sub_Image.gif)
		 [Replace](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Replace.htm)
		 Метод Replace заменяет
		 указанную часть одной строки другой строкой.


		 ![](../Sub_Image.gif)
		 [Rept](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Rept.htm)
		 Метод Rept возвращает
		 строку, повторенную заданное число раз.


		 ![](../Sub_Image.gif)
		 [Right](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Right.htm)
		 Метод Right возвращает
		 указанное число символов с конца строки.


		 ![](../Sub_Image.gif)
		 [Trim](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Trim.htm)
		 Метод Trim удаляет
		 пробелы в начале и в конце указанной строки.


		 ![](../Sub_Image.gif)
		 [Upper](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Upper.htm)
		 Метод Upper преобразует
		 все символы строки к верхнему регистру.


		 ![](../Sub_Image.gif)
		 [Value](UiReport.chm::/desktop/organizational_management/Function/Text/UiReport_Func_Text_Value.htm)
		 Метод Value возвращает
		 результат преобразования текстового представления числа к числовому
		 виду.


## Работа с отчётом


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [GetCubeValue](UiReport.chm::/Web/organizational_management/Function/Report/GetCubeValue.htm)
		 Метод GetCubeValue
		 возвращает значение по указанной координате в кубе.


## Финансовые методы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [AccrintM](MathLib.chm::/Interface/IFinance/IFinance.AccrintM.htm)
		 Метод AccrintM возвращает
		 накопленный процент по ценным бумагам, процент по которым выплачивается
		 в срок погашения.


		 ![](../Sub_Image.gif)
		 [CoupDayBs](MathLib.chm::/Interface/IFinance/IFinance.CoupDayBs.htm)
		 Метод CoupDayBs возвращает
		 количество дней от начала действия купона до даты соглашения.


		 ![](../Sub_Image.gif)
		 [CoupDays](MathLib.chm::/Interface/IFinance/IFinance.CoupDays.htm)
		 Метод CoupDays возвращает
		 число дней в периоде купона, который содержит дату расчета.


		 ![](../Sub_Image.gif)
		 [CoupDaysNc](MathLib.chm::/Interface/IFinance/IFinance.CoupDaysNc.htm)
		 Метод CoupDaysNc возвращает
		 число дней от даты расчета до срока следующего купона.


		 ![](../Sub_Image.gif)
		 [CoupNcd](MathLib.chm::/Interface/IFinance/IFinance.CoupNcd.htm)
		 Метод CoupNcd возвращает
		 число, являющееся следующей датой купона после даты расчета.


		 ![](../Sub_Image.gif)
		 [CoupNum](MathLib.chm::/Interface/IFinance/IFinance.CoupNum.htm)
		 Метод CoupNum возвращает
		 количество купонов, которые могут быть оплачены между датой расчета
		 и сроком погашения, округленное до ближайшего целого количества
		 купонов.


		 ![](../Sub_Image.gif)
		 [CoupPcd](MathLib.chm::/Interface/IFinance/IFinance.CoupPcd.htm)
		 Метод CoupPcd возвращает
		 число, соответствующее предыдущей дате купона перед датой расчета.


		 ![](../Sub_Image.gif)
		 [CumIpmt](MathLib.chm::/Interface/IFinance/IFinance.Cumipmt.htm)
		 Метод CumIpmt возвращает
		 накопленный доход по займу между двумя периодами выплат.


		 ![](../Sub_Image.gif)
		 [Cumprinc](MathLib.chm::/Interface/IFinance/IFinance.Cumprinc.htm)
		 Метод Cumprinc возвращает
		 кумулятивную (нарастающим итогом) сумму, выплачиваемую в погашение
		 основной суммы займа в промежутке между двумя периодами.


		 ![](../Sub_Image.gif)
		 [Db](MathLib.chm::/Interface/IFinance/IFinance.Db.htm)
		 Метод Db возвращает
		 величину амортизации актива для заданного периода, рассчитанную
		 методом фиксированного уменьшения остатка.


		 ![](../Sub_Image.gif)
		 [Ddb](MathLib.chm::/Interface/IFinance/IFinance.Ddb.htm)
		 Метод Ddb возвращает
		 значение амортизации актива за данный период, используя метод
		 двойного уменьшения остатка или иной явно указанный метод.


		 ![](../Sub_Image.gif)
		 [Disc](MathLib.chm::/Interface/IFinance/IFinance.Disc.htm)
		 Метод Disc возвращает
		 ставку дисконтирования для ценных бумаг.


		 ![](../Sub_Image.gif)
		 [DollarDe](MathLib.chm::/Interface/IFinance/IFinance.DollarDe.htm)
		 Метод DollarDe преобразует
		 цену в рублях, выраженную в виде дроби, в цену в рублях, выраженную
		 десятичным числом.


		 ![](../Sub_Image.gif)
		 [DollarFr](MathLib.chm::/Interface/IFinance/IFinance.DollarFr.htm)
		 Метод DollarFr преобразует
		 цену в рублях, выраженную десятичным числом, в цену в рублях,
		 выраженную в виде дроби.


		 ![](../Sub_Image.gif)
		 [Effect](MathLib.chm::/Interface/IFinance/IFinance.Effect.htm)
		 Метод Effect возвращает
		 эффективную (фактическую) годовую процентную ставку, если заданы
		 номинальная годовая процентная ставка и количество периодов в
		 году, за которые начисляются сложные проценты.


		 ![](../Sub_Image.gif)
		 [Fv](MathLib.chm::/Interface/IFinance/IFinance.Fv.htm)
		 Метод Fv возвращает
		 будущую стоимость инвестиции на основе периодических постоянных
		 (равных по величине сумм) платежей и постоянной процентной ставки.


		 ![](../Sub_Image.gif)
		 [FvSchedule](MathLib.chm::/Interface/IFinance/IFinance.FvSchedule.htm)
		 Метод FvSchedule возвращает
		 будущую стоимость первоначальной основной суммы после применения
		 ряда (плана) ставок сложных процентов.


		 ![](../Sub_Image.gif)
		 [Intrate](MathLib.chm::/Interface/IFinance/IFinance.Intrate.htm)
		 Метод Intrate возвращает
		 процентную ставку для полностью инвестированных ценных бумаг.


		 ![](../Sub_Image.gif)
		 [Ipmt](MathLib.chm::/Interface/IFinance/IFinance.Ipmt.htm)
		 Метод Ipmt возвращает
		 сумму платежей процентов по инвестиции за данный период на основе
		 постоянства сумм периодических платежей и постоянства процентной
		 ставки.


		 ![](../Sub_Image.gif)
		 [Irr](MathLib.chm::/Interface/IFinance/IFinance.Irr.htm)
		 Метод Irr возвращает
		 внутреннюю ставку доходности для ряда потоков денежных средств,
		 представленных их численными значениями.


		 ![](../Sub_Image.gif)
		 [Ispmt](MathLib.chm::/Interface/IFinance/IFinance.Ispmt.htm)
		 Метод Ispmt возвращает
		 проценты, выплачиваемые за определенный инвестиционный период.


		 ![](../Sub_Image.gif)
		 [MIrr](MathLib.chm::/Interface/IFinance/IFinance.Mirr.htm)
		 Метод Mirr возвращает
		 модифицированную внутреннюю ставку доходности для ряда периодических
		 денежных потоков.


		 ![](../Sub_Image.gif)
		 [Nominal](MathLib.chm::/Interface/IFinance/IFinance.Nominal.htm)
		 Метод Nominal возвращает
		 номинальную годовую ставку, если заданы эффективная (фактическая)
		 ставка и число периодов в году, за которые начисляются сложные
		 проценты.


		 ![](../Sub_Image.gif)
		 [NPer](MathLib.chm::/Interface/IFinance/IFinance.NPer.htm)
		 Метод NPer возвращает
		 общее количество периодов выплаты для инвестиции на основе периодических
		 постоянных выплат и постоянной процентной ставки.


		 ![](../Sub_Image.gif)
		 [Npv](MathLib.chm::/Interface/IFinance/IFinance.Npv.htm)
		 Метод Npv возвращает
		 величину чистой приведенной стоимости инвестиции, используя ставку
		 дисконтирования, а также стоимости будущих выплат (отрицательные
		 значения) и поступлений (положительные значения).


		 ![](../Sub_Image.gif)
		 [Pmt](MathLib.chm::/Interface/IFinance/IFinance.Pmt.htm)
		 Метод Pmt возвращает
		 сумму периодического платежа для аннуитета на основе постоянства
		 сумм платежей и постоянства процентной ставки.


		 ![](../Sub_Image.gif)
		 [Ppmt](MathLib.chm::/Interface/IFinance/IFinance.Ppmt.htm)
		 Метод Ppmt возвращает
		 величину платежа в погашение основной суммы по инвестиции за данный
		 период на основе постоянства периодических платежей и постоянства
		 процентной ставки.


		 ![](../Sub_Image.gif)
		 [Price](MathLib.chm::/Interface/IFinance/IFinance.Price.htm)
		 Метод Price возвращает
		 цену за 100 рублей номинальной стоимости ценных бумаг, по которым
		 выплачивается периодический процент.


		 ![](../Sub_Image.gif)
		 [PriceDisc](MathLib.chm::/Interface/IFinance/IFinance.PriceDisc.htm)
		 Метод PriceDisc возвращает
		 цену за 100 рублей номинальной стоимости ценных бумаг, на которые
		 сделана скидка.


		 ![](../Sub_Image.gif)
		 [PriceMat](MathLib.chm::/Interface/IFinance/IFinance.PriceMat.htm)
		 Метод PriceMat возвращает
		 цену за 100 рублей номинальной стоимости ценных бумаг, по которым
		 процент выплачивается в срок погашения.


		 ![](../Sub_Image.gif)
		 [Pv](MathLib.chm::/Interface/IFinance/IFinance.Pv.htm)
		 Метод Pv возвращает
		 приведенную (к текущему моменту) стоимость инвестиции.


		 ![](../Sub_Image.gif)
		 [Rate](MathLib.chm::/Interface/IFinance/IFinance.Rate.htm)
		 Метод Rate возвращает
		 процентную ставку по аннуитету за один период.


		 ![](../Sub_Image.gif)
		 [Received](MathLib.chm::/Interface/IFinance/IFinance.Received.htm)
		 Метод Received возвращает
		 сумму, полученную к сроку погашения полностью обеспеченных ценных
		 бумаг.


		 ![](../Sub_Image.gif)
		 [Sln](MathLib.chm::/Interface/IFinance/IFinance.Sln.htm)
		 Метод Sln возвращает
		 величину амортизации актива за один период, рассчитанную линейным
		 методом.


		 ![](../Sub_Image.gif)
		 [Syd](MathLib.chm::/Interface/IFinance/IFinance.Syd.htm)
		 Метод Syd возвращает
		 величину амортизации актива за данный период, рассчитанную методом
		 «суммы (годовых) чисел».


		 ![](../Sub_Image.gif)
		 [TBillEq](MathLib.chm::/Interface/IFinance/IFinance.TBillEq.htm)
		 Метод TBillEq возвращает
		 эквивалентный облигации доход по казначейскому векселю.


		 ![](../Sub_Image.gif)
		 [TBillPrice](MathLib.chm::/Interface/IFinance/IFinance.TBillPrice.htm)
		 Метод TBillPrice возвращает
		 цену на 100 рублей номинальной стоимости для казначейского чека.


		 ![](../Sub_Image.gif)
		 [TBillYield](MathLib.chm::/Interface/IFinance/IFinance.TBillYield.htm)
		 Метод TBillYield возвращает
		 доход по казначейскому чеку.


		 ![](../Sub_Image.gif)
		 [Vdb](MathLib.chm::/Interface/IFinance/IFinance.Vdb.htm)
		 Метод Vdb возвращает
		 величину амортизации актива для любого выбранного периода, в том
		 числе для частичных периодов, с использованием метода двойного
		 уменьшения остатка или иного указанного метода.


		 ![](../Sub_Image.gif)
		 [XIrr](MathLib.chm::/Interface/IFinance/IFinance.XIrr.htm)
		 Метод Xirr возвращает
		 внутреннюю ставку доходности для графика денежных потоков, которые
		 не обязательно носят периодический характер.


		 ![](../Sub_Image.gif)
		 [Xnpv](MathLib.chm::/Interface/IFinance/IFinance.Xnpv.htm)
		 Метод Xnpv возвращает
		 чистую приведенную стоимость для денежных потоков, которые не
		 обязательно являются периодическими.


		 ![](../Sub_Image.gif)
		 [YieldF](MathLib.chm::/Interface/IFinance/IFinance.YieldF.htm)
		 Метод YieldF возвращает
		 доходность ценных бумаг, по которым производятся периодические
		 выплаты процентов.


		 ![](../Sub_Image.gif)
		 [YieldMat](MathLib.chm::/Interface/IFinance/IFinance.YieldMat.htm)
		 Метод YieldMat возвращает
		 годовую доходность ценных бумаг, по которым проценты выплачиваются
		 при наступлении срока погашения.


## Статистические методы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [_Frequency](StatLib.chm::/Interface/IStatistics/IStatistics.Frequency.htm)
		 Метод Frequency вычисляет
		 частоту появления значений в интервале значений и возвращает массив
		 цифр.


		 ![](../Sub_Image.gif)
		 [AveDev](StatLib.chm::/Interface/IStatistics/IStatistics.AveDev.htm)
		 Метод AveDev возвращает
		 среднее абсолютных значений отклонений точек данных от среднего.


		 ![](../Sub_Image.gif)
		 [BetaDist](StatLib.chm::/Interface/IStatistics/IStatistics.BetaDist.htm)
		 Метод BetaDist возвращает
		 интегральную функцию плотности бета-вероятности.


		 ![](../Sub_Image.gif)
		 [BetaInv](StatLib.chm::/Interface/IStatistics/IStatistics.BetaInv.htm)
		 Метод BetaInv возвращает
		 обратную функцию к интегральной функции плотности бета-вероятности.


		 ![](../Sub_Image.gif)
		 [BinomDist](StatLib.chm::/Interface/IStatistics/IStatistics.BinomDist.htm)
		 Метод BinomDist возвращает
		 отдельное значение биномиального распределения.


		 ![](../Sub_Image.gif)
		 [ChiDist](StatLib.chm::/Interface/IStatistics/IStatistics.ChiDist.htm)
		 Метод ChiDist возвращает
		 одностороннюю вероятность распределения хи-квадрат.


		 ![](../Sub_Image.gif)
		 [ChiInv](StatLib.chm::/Interface/IStatistics/IStatistics.ChiInv.htm)
		 Метод ChiInv возвращает
		 значение, обратное к односторонней вероятности распределения хи-квадрат.


		 ![](../Sub_Image.gif)
		 [ChiTest](StatLib.chm::/Interface/IStatistics/IStatistics.ChiTest.htm)
		 Метод ChiTest возвращает
		 значение для распределения хи-квадрат.


		 ![](../Sub_Image.gif)
		 [Confidence](StatLib.chm::/Interface/IStatistics/IStatistics.Confidence.htm)
		 Метод Confidence возвращает
		 доверительный интервал для среднего генеральной совокупности.


		 ![](../Sub_Image.gif)
		 [Correl](StatLib.chm::/Interface/IStatistics/IStatistics.Correl.htm)
		 Метод Correl возвращает
		 коэффициент корреляции между A1 и A2.


		 ![](../Sub_Image.gif)
		 [Covar](StatLib.chm::/Interface/IStatistics/IStatistics.Covar.htm)
		 Метод Covar возвращает
		 ковариацию, то есть среднее произведений отклонений для каждой
		 пары точек данных.


		 ![](../Sub_Image.gif)
		 [CritBinom](StatLib.chm::/Interface/IStatistics/IStatistics.CritBinom.htm)
		 Метод CritBinom возвращает
		 наименьшее значение, для которого интегральное биномиальное распределение
		 больше или равно заданному критерию.


		 ![](../Sub_Image.gif)
		 [DevSq](StatLib.chm::/Interface/IStatistics/IStatistics.DevSq.htm)
		 Метод DevSq возвращает
		 сумму квадратов отклонений точек данных от их среднего.


		 ![](../Sub_Image.gif)
		 [Dispersion](StatLib.chm::/Interface/IStatistics/IStatistics.Dispersion.htm)
		 Метод Dispersion оценивает
		 дисперсию по выборке.


		 ![](../Sub_Image.gif)
		 [DispersionP](StatLib.chm::/Interface/IStatistics/IStatistics.DispersionP.htm)
		 Метод DispersionP вычисляет
		 дисперсию для генеральной совокупности.


		 ![](../Sub_Image.gif)
		 [ExponDist](StatLib.chm::/Interface/IStatistics/IStatistics.ExponDist.htm)
		 Метод ExponDist возвращает
		 экспоненциальное распределение.


		 ![](../Sub_Image.gif)
		 [FDist](StatLib.chm::/Interface/IStatistics/IStatistics.FDist.htm)
		 Метод FDist возвращает
		 F-распределение вероятности.


		 ![](../Sub_Image.gif)
		 [FInv](StatLib.chm::/Interface/IStatistics/IStatistics.FInv.htm)
		 Метод FInv возвращает
		 обратное значение для F-распределения вероятностей.


		 ![](../Sub_Image.gif)
		 [Fisher](StatLib.chm::/Interface/IStatistics/IStatistics.Fisher.htm)
		 Метод Fisher возвращает
		 преобразование Фишера.


		 ![](../Sub_Image.gif)
		 [FisherInv](StatLib.chm::/Interface/IStatistics/IStatistics.FisherInv.htm)
		 Метод FisherInv возвращает
		 обратное преобразование Фишера.


		 ![](../Sub_Image.gif)
		 [Forecast](StatLib.chm::/Interface/IStatistics/IStatistics.Forecast.htm)
		 Метод Forecast вычисляет
		 будущее значение по существующим значениям.


		 ![](../Sub_Image.gif)
		 [FTest](StatLib.chm::/Interface/IStatistics/IStatistics.FTest.htm)
		 Метод FTest возвращает
		 результат F-теста.


		 ![](../Sub_Image.gif)
		 [GammaDist](StatLib.chm::/Interface/IStatistics/IStatistics.GammaDist.htm)
		 Метод GammaDist возвращает
		 гамма-распределение.


		 ![](../Sub_Image.gif)
		 [GammaInv](StatLib.chm::/Interface/IStatistics/IStatistics.GammaInv.htm)
		 Метод GammaInv возвращает
		 обратное гамма-распределение.


		 ![](../Sub_Image.gif)
		 [GammaLn](StatLib.chm::/Interface/IStatistics/IStatistics.GammaLn.htm)
		 Метод GammaLn возвращает
		 натуральный логарифм гамма-функции.


		 ![](../Sub_Image.gif)
		 [GeoMean](StatLib.chm::/Interface/IStatistics/IStatistics.GeoMean.htm)
		 Метод GeoMean возвращает
		 среднее геометрическое значений массива положительных чисел.


		 ![](../Sub_Image.gif)


		 [Growth](StatLib.chm::/Interface/IStatistics/IStatistics.Growth.htm)
		 Метод Growth рассчитывает
		 прогнозируемый экспоненциальный рост на основании имеющихся данных.


		 ![](../Sub_Image.gif)
		 [HarMean](StatLib.chm::/Interface/IStatistics/IStatistics.HarMean.htm)
		 Метод HarMean возвращает
		 среднее гармоническое множества данных.


		 ![](../Sub_Image.gif)
		 [HypGeomDist](StatLib.chm::/Interface/IStatistics/IStatistics.HypGeomDist.htm)
		 Метод HypGeomDist возвращает
		 гипергеометрическое распределение.


		 ![](../Sub_Image.gif)
		 [Intercept](StatLib.chm::/Interface/IStatistics/IStatistics.Intercept.htm)
		 Метод Intercept вычисляет
		 точку пересечения линии с осью y.


		 ![](../Sub_Image.gif)
		 [JarqueBeraStat](StatLib.chm::/Interface/IStatistics/IStatistics.JarqueBeraStat.htm)
		 Метод JarqueBeraStat
		 возвращает статистику Жака-Бера.


		 ![](../Sub_Image.gif)
		 [Kurt](StatLib.chm::/Interface/IStatistics/IStatistics.Kurt.htm)
		 Метод Kurt возвращает
		 эксцесс множества данных.


		 ![](../Sub_Image.gif)
		 [Large](StatLib.chm::/Interface/IStatistics/IStatistics.Large.htm)
		 Метод Large возвращает
		 k-ое по величине значение из множества данных.


		 ![](../Sub_Image.gif)
		 [Linest](StatLib.chm::/Interface/IStatistics/IStatistics.Linest.htm)
		 Метод Linest рассчитывает
		 статистику для ряда с применением метода наименьших квадратов,
		 чтобы вычислить прямую линию, которая наилучшим образом аппроксимирует
		 имеющиеся данные.


		 ![](../Sub_Image.gif)
		 [Logest](StatLib.chm::/Interface/IStatistics/IStatistics.Logest.htm)
		 Метод Logest вычисляет
		 экспоненциальную кривую, аппроксимирующую данные, и возвращается
		 массив значений, описывающий эту кривую.


		 ![](../Sub_Image.gif)
		 [LogInv](StatLib.chm::/Interface/IStatistics/IStatistics.LogInv.htm)
		 Метод LogInv возвращает
		 обратную функцию логарифмического нормального распределения.


		 ![](../Sub_Image.gif)
		 [LogNormDist](StatLib.chm::/Interface/IStatistics/IStatistics.LogNormDist.htm)
		 Метод LogNormDist возвращает
		 интегральное логарифмическое нормальное распределение.


		 ![](../Sub_Image.gif)
		 [Median](StatLib.chm::/Interface/IStatistics/IStatistics.Median.htm)
		 Метод Median возвращает
		 медиану заданных чисел.


		 ![](../Sub_Image.gif)
		 [Mode](StatLib.chm::/Interface/IStatistics/IStatistics.Mode.htm)
		 Метод Mode возвращает
		 моду - наиболее часто встречающееся значение в массиве данных.


		 ![](../Sub_Image.gif)
		 [NegBinomDist](StatLib.chm::/Interface/IStatistics/IStatistics.NegBinomDist.htm)
		 Метод NegBinomDist
		 возвращает отрицательное биномиальное распределение.


		 ![](../Sub_Image.gif)
		 [NormDist](StatLib.chm::/Interface/IStatistics/IStatistics.NormDist.htm)
		 Метод NormDist возвращает
		 нормальную функцию распределения для указанного среднего и стандартного
		 отклонения.


		 ![](../Sub_Image.gif)
		 [NormInv](StatLib.chm::/Interface/IStatistics/IStatistics.NormInv.htm)
		 Метод NormInv возвращает
		 обратное нормальное распределение.


		 ![](../Sub_Image.gif)
		 [NormsDist](StatLib.chm::/Interface/IStatistics/IStatistics.NormsDist.htm)
		 Метод NormsDist возвращает
		 стандартное нормальное интегральное распределение.


		 ![](../Sub_Image.gif)
		 [NormsInv](StatLib.chm::/Interface/IStatistics/IStatistics.NormsInv.htm)
		 Метод NormsInv возвращает
		 обратное значение стандартного нормального распределения.


		 ![](../Sub_Image.gif)
		 [Pearson](StatLib.chm::/Interface/IStatistics/IStatistics.Pearson.htm)
		 Метод Pearson возвращает
		 коэффициент корреляции Пирсона (r).


		 ![](../Sub_Image.gif)
		 [Percentile](StatLib.chm::/Interface/IStatistics/IStatistics.Percentile.htm)
		 Метод Percentile возвращает
		 k-ую процентиль для значений из интервала.


		 ![](../Sub_Image.gif)
		 [PercentRank](StatLib.chm::/Interface/IStatistics/IStatistics.PercentRank.htm)
		 Метод PercentRank возвращает
		 категорию значения в наборе данных как процентное содержание в
		 наборе данных.


		 ![](../Sub_Image.gif)
		 [Permut](StatLib.chm::/Interface/IStatistics/IStatistics.Permut.htm)
		 Метод Permut возвращает
		 количество перестановок для заданного числа объектов.


		 ![](../Sub_Image.gif)
		 [Poisson](StatLib.chm::/Interface/IStatistics/IStatistics.Poisson.htm)
		 Метод Poisson возвращает
		 распределение Пуассона.


		 ![](../Sub_Image.gif)
		 [Prob](StatLib.chm::/Interface/IStatistics/IStatistics.Prob.htm)
		 Метод Prob возвращает
		 вероятность того, что значение из интервала находится внутри заданных
		 пределов.


		 ![](../Sub_Image.gif)
		 [Quartile](StatLib.chm::/Interface/IStatistics/IStatistics.Quartile.htm)
		 Метод Quartile возвращает
		 квартиль множества данных.


		 ![](../Sub_Image.gif)
		 [Rank](StatLib.chm::/Interface/IStatistics/IStatistics.Rank.htm)
		 Метод Rank возвращает
		 ранг числа в массиве чисел.


		 ![](../Sub_Image.gif)
		 [Rsq](StatLib.chm::/Interface/IStatistics/IStatistics.Rsq.htm)
		 Метод Rsq возвращает
		 квадрат коэффициента корреляции Пирсона.


		 ![](../Sub_Image.gif)
		 [Skew](StatLib.chm::/Interface/IStatistics/IStatistics.Skew.htm)
		 Метод Skew возвращает
		 асимметрию распределения.


		 ![](../Sub_Image.gif)
		 [Slope](StatLib.chm::/Interface/IStatistics/IStatistics.Slope.htm)
		 Метод Slope возвращает
		 наклон линии линейной регрессии.


		 ![](../Sub_Image.gif)
		 [Small](StatLib.chm::/Interface/IStatistics/IStatistics.Small.htm)
		 Метод Small возвращает
		 k-ое наименьшее значение в множестве данных.


		 ![](../Sub_Image.gif)
		 [Standardize](StatLib.chm::/Interface/IStatistics/IStatistics.Standardize.htm)
		 Метод Standardize возвращает
		 нормализованное значение для распределения, характеризуемого средним
		 и стандартным отклонением.


		 ![](../Sub_Image.gif)
		 [StDev](StatLib.chm::/Interface/IStatistics/IStatistics.StDev.htm)
		 Метод StDev оценивает
		 стандартное отклонение по выборке.


		 ![](../Sub_Image.gif)
		 [StDevP](StatLib.chm::/Interface/IStatistics/IStatistics.StDevP.htm)
		 Метод StDevP вычисляет
		 стандартное отклонение по генеральной совокупности.


		 ![](../Sub_Image.gif)
		 [SteYX](StatLib.chm::/Interface/IStatistics/IStatistics.SteYX.htm)
		 Метод SteYX возвращает
		 стандартную ошибку предсказанных значений Y для каждого значения
		 X в регрессии.


		 ![](../Sub_Image.gif)
		 [TDist](StatLib.chm::/Interface/IStatistics/IStatistics.TDist.htm)
		 Метод TDist возвращает
		 процентные точки (вероятность) для t-распределения Стьюдента.


		 ![](../Sub_Image.gif)
		 [TInv](StatLib.chm::/Interface/IStatistics/IStatistics.TInv.htm)
		 Метод TInv возвращает
		 t-значение распределения Стьюдента как функцию вероятности и числа
		 степеней свободы.


		 ![](../Sub_Image.gif)
		 [Trend](StatLib.chm::/Interface/IStatistics/IStatistics.Trend.htm)
		 Метод Trend возвращает
		 значения в соответствии с линейным трендом.


		 ![](../Sub_Image.gif)
		 [TrimMean](StatLib.chm::/Interface/IStatistics/IStatistics.TrimMean.htm)
		 Метод TrimMean возвращает
		 среднее внутренности множества данных.


		 ![](../Sub_Image.gif)
		 [TTest](StatLib.chm::/Interface/IStatistics/IStatistics.TTest.htm)
		 Метод TTest возвращает
		 вероятность, соответствующую критерию Стьюдента.


		 ![](../Sub_Image.gif)
		 [Weibull](StatLib.chm::/Interface/IStatistics/IStatistics.Weibull.htm)
		 Метод Weibull возвращает
		 распределение Вейбулла.


		 ![](../Sub_Image.gif)
		 [ZTest](StatLib.chm::/Interface/IStatistics/IStatistics.Ztest.htm)
		 Метод ZTest возвращает
		 двустороннее P-значение z-теста.


## Логические методы


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [_And](UiReport.chm::/desktop/organizational_management/Function/Logical/UiReport_Func_Logical_And.htm)
		 Метод _And возвращает
		 значение True, если все
		 аргументы имеют значение True.


		 ![](../Sub_Image.gif)
		 [_Not](UiReport.chm::/desktop/organizational_management/Function/Logical/UiReport_Func_Logical_Not.htm)
		 Метод _Not меняет логическое
		 значение своего аргумента на противоположное.


		 ![](../Sub_Image.gif)
		 [_Or](UiReport.chm::/desktop/organizational_management/Function/Logical/UiReport_Func_Logical_Or.htm)
		 Метод _Or возвращает
		 значение True, если хотя
		 бы один аргумент имеют значение True.


		 ![](../Sub_Image.gif)
		 [IfError](UiReport.chm::/Desktop/organizational_management/Function/Logical/IfError.htm.htm)
		 Метод IfError возвращает
		 значение ячейки, если оно не содержит ошибки, иначе заданное значение.


		 ![](../Sub_Image.gif)
		 [Ifs](UiReport.chm::/Desktop/organizational_management/Function/Logical/Ifs.htm.htm)
		 Метод Ifs проверяет
		 соответствие одному или нескольким условиям и возвращает значение
		 для первого условия, принимающего значение TRUE.


		 ![](../Sub_Image.gif)
		 [Iif](UiReport.chm::/desktop/organizational_management/Function/Logical/UiReport_Func_Logical_IIf.htm)
		 Метод Iif выполняет
		 проверку условия и возвращает указанное логическое значение.


		 ![](../Sub_Image.gif)
		 [IsEmpty](UiReport.chm::/desktop/organizational_management/Function/Logical/UiReport_Func_Logical_IsEmpty.htm)
		 Метод IsEmpty возвращает
		 True, если аргументом
		 является ссылка на пустую ячейку, в противном случае возвращает
		 False.


		 ![](../Sub_Image.gif)
		 [IsErr](UiReport.chm::/Desktop/organizational_management/Function/Logical/IsErr.htm.htm)
		 Метод IsErr проверяет,
		 является ли значение ошибкой и отличается ли от недоступного #Н/Д.


		 ![](../Sub_Image.gif)
		 [IsError](UiReport.chm::/Desktop/organizational_management/Function/Logical/IsError.htm.htm)
		 Метод IsError проверяет,
		 является ли значение ошибкой.


		 ![](../Sub_Image.gif)
		 [ISLOGICAL](UiReport.chm::/Desktop/organizational_management/Function/Logical/islogical.htm.htm)
		 Метод ISLOGICAL проверяет,
		 является ли значение логическим.


		 ![](../Sub_Image.gif)
		 [ISNA](UiReport.chm::/Desktop/organizational_management/Function/Logical/isna.htm.htm)
		 Метод ISNA проверяет,
		 является ли значение недоступным #Н/Д.


		 ![](../Sub_Image.gif)
		 [ISNONTEXT](UiReport.chm::/Desktop/organizational_management/Function/Logical/ISNONTEXT.htm.htm)
		 Метод ISNONTEXT проверяет,
		 не является ли значение текстовым.


		 ![](../Sub_Image.gif)
		 [ISNUMBER](UiReport.chm::/Desktop/organizational_management/Function/Logical/ISNUMBER.htm.htm)
		 Метод ISNUMBER проверяет,
		 является ли значение числовым.


		 ![](../Sub_Image.gif)
		 [ISTEXT](UiReport.chm::/Desktop/organizational_management/Function/Logical/ISTEXT.htm.htm)
		 Метод ISTEXT проверяет,
		 является ли значение текстовым.


## Python


		 Имя метода
		 Краткое описание


		 ![](../Sub_Image.gif)
		 [PythonInvoke](UiReport.chm::/desktop/organizational_management/Function/Python/Func_PythonInvoke.htm)
		 Метод PythonInvoke
		 выполняет функцию на языке Python и возвращает её результат. Код
		 функции располагается в файле на диске.


		 ![](../Sub_Image.gif)
		 [PythonInvokeModule](UiReport.chm::/desktop/organizational_management/Function/Python/Func_PythonInvokeModule.htm)
		 Метод PythonInvokeModule
		 выполняет функцию на языке Python и возвращает её результат. Код
		 функции располагается в Python-модуле в репозитории.


См. также:


[Интерфейсы сборки Tab](../Interface/TabSheet_Interface.htm)
 | [Перечисления
 сборки Tab](../Enums/TabSheet_Enums.htm) | [Классы сборки Tab](../Class/TabSheet_Class.htm)
 | [Делегаты
 сборки Tab](../Delegate/TabSheet_Delegate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
