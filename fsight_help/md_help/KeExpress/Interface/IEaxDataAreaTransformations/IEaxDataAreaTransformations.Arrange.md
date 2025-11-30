# IEaxDataAreaTransformations.Arrange

IEaxDataAreaTransformations.Arrange
-


# IEaxDataAreaTransformations.Arrange


## Синтаксис


Arrange;


## Описание


Метод Arrange автоматически
 выстраивает цепочку расчета формул преобразования в соответствии с их
 зависимостями.


## Комментарии


При выстраивании цепочки расчета учитываются следующие критерии:


	- зависимость одних формул преобразования от других формул преобразования;


	- зависимость формул преобразования от агрегированных данных;


	- зависимость формул преобразования от итоговых данных.


В соответствии с выявленными зависимостями формулы преобразования будут
 переставлены в общей цепочке расчета таким образом, чтобы при вычислении
 каждой формулы уже были доступны все необходимые данные. Также для формул
 преобразования автоматически будет установлено значение свойства [IEaxDataAreaTransformation.CalculationMode](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.CalculationMode.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS. В измерении по строкам создайте два вычисляемых
 элемента с наименованиями «Вычисляемый_1», «Вычисляемый_2». Для вычисляемых
 элементов заданы произвольные формулы. Само измерение построено на основе
 справочника, не являющегося календарным.


Подключите системные сборки: Express, Metabase.


	Sub UserProc;

	    Sub ShowCalulations(Calcs: IEaxDataAreaTransformations);

	    Var

	        Calc: IEaxDataAreaTransformation;

	        i: Integer;

	    Begin

	        Debug.Indent;

	        For i := 0 To Calcs.Count - 1 Do

	            Calc := Calcs.Item(i);

	            Debug.WriteLine(Calc.Expression.AsString + '(' + Calc.Element.ToString + ')');

	        End For;

	        Debug.Unindent;

	    End Sub ShowCalulations;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    CalcTrs: IEaxDataAreaTransformations;

	    CalcTr: IEaxDataAreaTransformation;

	Begin

	    //Получим репозиторий

	    MB := MetabaseClass.Active;

	    //Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    //Срез источника данных

	    DArea := Express.DataArea;

	    Slice := DArea.Slices.Item(0);

	    //Формулы преобразования данных в аналитической области

	    CalcTrs := Slice.CalcTransformations;

	    //Получим формулу преобразования и изменим её выражение

	    CalcTr := CalcTrs.Item(0);

	    Debug.WriteLine("Порядок вычисления формул до автоматического выстраивания цепочки расчета:");

	    ShowCalulations(CalcTrs);

	    //Изменение формулы

	    CalcTr.Expression.AsString := "{Вычисляемый_2[t]}";

	    //Автоматическое выстраивание цепочки расчета

	    CalcTrs.Arrange;

	    Debug.WriteLine("Порядок вычисления формул после автоматического выстраивания цепочки расчета:");

	    ShowCalulations(CalcTrs);

	End Sub UserProc;


При выполнении примера для первого вычисляемого элемента будет изменена
 формула преобразования - новая формула будет получать значение второго
 вычисляемого элемента. Вызов метода Arrange позволяет перестроить всю
 цепочку расчета с учётом появившейся зависимости. Порядок формул до и
 после выстраивания будет выведен в консоль среды разработки. Для формул
 будут выведены выражение для расчёта и индексы вычисляемых элементов в
 измерении.


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
