# IVZBaseFormatter.Format

IVZBaseFormatter.Format
-


# IVZBaseFormatter.Format


## Синтаксис


Format(Value: String, params: [IVZDataArray](../IVZDataArray/IVZDataArray.htm),
 DefaultFormat: String): String;


## Параметры


Value. Исходная строка;


params. Массив объектов для
 подстановки текстовых эквивалентов их значений в исходную строку;


DefaultFormat. Формат данных
 по умолчанию.


## Описание


Метод Format заменяет каждый
 элемент формата в указанной строке текстовым эквивалентом значения соответствующего
 объекта из указанного массива.


## Комментарии


Для пузырькового дерева [IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm)
 в исходной строке могут быть использованы следующие объекты (параметры):
 Name (наименование пузырька), SizeTitle (наименование размерного показателя),
 SizeValue (значение размерного показателя), ColorTitle (наименование цветового
 показателя), ColorValue (значение цветового показателя), TextTitle (наименование
 текстового показателя), TextValue (значение текстового показателя), ChildsCount
 (количество дочерних элементов у пузырька).


Для плоского дерева [IVZTreeMap](../IVZTreeMap/IVZTreeMap.htm)
 в исходной строке могут быть использованы следующие объекты (параметры):
 Name (наименование пузырька), SizeTitle (наименование размерного показателя),
 SizeValue (значение размерного показателя), HeightTitle (наименование
 высотного показателя), HeightValue (значение высотного показателя ), ColorTitle
 (наименование цветового показателя), ColorValue (значение цветового показателя),
 TextTitle (наименование текстового показателя), TextValue (значение текстового
 показателя), ChildsCount (количество дочерних элементов у пузырька).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_IVZBASEFORMATTER, в котором находится пузырьковое
 дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Formatter: IVZBaseFormatter;

	    Format: String;

	    Params: IVZDataArray;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_IVZBASEFORMATTER").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    { Получим наименование региона по его идентификатору и

	    значение по цветовой шкале }

	    Formatter := BubbleTree.Formatter;

	    Format := Formatter.FormatById("Регион: {%Name}, " +

	        "значение элемента по цветовой шкале: {%ColorValue}", "17", "данных нет");

	    Debug.WriteLine(Format);

	    // Получим процентное выражение числа 0.425

	    Format := Formatter.FormatByParam("{0}", 0.425, "0.00%");

	    Debug.WriteLine("Число 0.42, выраженное в процентах: " + Format);

	    { Получим экспоненциальную форму записи числа 2011 и

	    запись числа 15258.2 с двумя десятичными знаками }

	    Format := Formatter.FormatByParams("Экспоненциальная форма записи числа 2011: " +

	        "{0:0E+0}, запись с двумя десятичными знаками: {1}", 2011, 15258.2, "0.00");

	    Debug.WriteLine(Format);

	    // Получим записи двух телефонных номеров в удобном для восприятия формате

	    Params := New VZDataArray.Create;

	    Params.Add(89209242536);

	    Params.Add(84922444090);

	    Format := Formatter.Format("Контактные телефоны: {0}; {1:#(####)##-##-##}", Params, "#-###-###-##-##");

	    Debug.WriteLine(Format);

	End Sub UserProc;


В результате выполнения примера в консоли среды разработки будут выведены:


	- наименование региона с идентификатором 17 и его значение по
	 цветовой шкале;


	- процентное выражение числа 0,425, число 2011 в экспоненциальной
	 форме записи и число 15258,2 в форме записи с двумя десятичными знаками;


	- два телефонных номера в удобном для восприятия формате.


См. также:


[IVZBaseFormatter](IVZBaseFormatter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
