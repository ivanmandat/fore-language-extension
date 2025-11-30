# IEaxDataAreaTransformations.AddFunction

IEaxDataAreaTransformations.AddFunction
-


# IEaxDataAreaTransformations.AddFunction


## Синтаксис


AddFunction(FunctionName: String; Value: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 CombineElement: Boolean; Args: Variant);


## Параметры


FunctionName. Наименованию
 функции для вычисления итогов («Total»,
 «SubTotal»);


Value. Отметка элементов, по
 которым необходимо получить итоговые данные;


CombineElement. Признак совмещения
 с исходными элементами;


Args. Метод вычисления итоговых
 данных.


## Описание


Метод AddFunction добавляет
 формулу преобразования данных, которая вычисляет итог/промежуточный итог.


## Комментарии


Описание различных видов итогов и параметров их расчета представлено
 в подразделе «[Расчет
 итоговых значений](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm)».


Обязательным требованием для работы формулы преобразования является
 включение расчета необходимых итогов для [строк](KePivot.chm::/Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.RowTypes.htm)/[столбцов](KePivot.chm::/Interface/IPivotEvaluatorTotals/IPivotEvaluatorTotals.ColumnTypes.htm)
 таблицы. Если итоги не рассчитываются, то формула преобразования вернет
 пустые значения.


Если параметру CombineElement
 установлено значение, True то
 создаваемый элемент будет совмещен с элементом, по которому считаются
 итоги: создаваемый элемент будет являться родительским по отношению к
 исходному элементу. При значении False
 элемент создается ниже исходного элемента и располагается на одном с ним
 уровне.


В качестве значения параметра Args необходимо
 указать наименование одного из видов итогов, которые рассчитываются для
 таблицы. Наименования совпадают с наименованиями элементов перечисления
 [PivotEvaluatorElementType](KePivot.chm::/Enums/PivotEvaluatorElementType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS. Источник данных отчета в своей структуре имеет
 измерение с идентификатором Regions, в отчете данное измерение расположено
 по строкам.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    DimSel: IDimSelection;

	    CalcTrs: IEaxDataAreaTransformations;

	    Totals: IPivotEvaluatorTotals;

	    Element: Integer;

	Begin

	    //Получим репозиторий

	    MB := MetabaseClass.Active;

	    //Получим экспресс-отчет

	    Express := MB.ItemById("Express").Edit As IEaxAnalyzer;

	    //Срез источника данных

	    DArea := Express.DataArea;

	    Slice := DArea.Slices.Item(0);

	    //Итоги по столбцам

	    Totals := Express.Pivot.Evaluator.Totals;

	    Totals.ColumnTypes := PivotEvaluatorElementType.Sum;

	    Totals.LevelTotals := True;

	    Totals.HierarchyTotals := True;

	    //Формулы преобразования данных в аналитической области

	    CalcTrs := Slice.CalcTransformations;

	    //Добавим функцию для вычисления итогов

	    DimSel := Express.Pivot.Selection.FindById("Regions").CreateCopy;

	    Element := DimSel.FirstDimElement;

	    DimSel.DeselectAll;

	    DimSel.SelectElement(Element, False);

	    CalcTrs.AddFunction("Total", DimSel, False, "Sum");

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для первого отмеченного элемента измерения
 Regions будет добавлен вычисляемый элемент, осуществляющий подсчет итогов.
 Для работы этого элемента в таблице по столбцам также будет включен подсчет
 итогов (сумма).


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
