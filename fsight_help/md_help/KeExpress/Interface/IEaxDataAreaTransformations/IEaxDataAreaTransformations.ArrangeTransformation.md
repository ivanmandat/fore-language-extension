# IEaxDataAreaTransformations.ArrangeTransformation

IEaxDataAreaTransformations.ArrangeTransformation
-


# IEaxDataAreaTransformations.ArrangeTransformation


## Синтаксис


ArrangeTransformation(Value: [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm));


## Параметры


Value. Формула преобразования
 данных.


## Описание


Метод ArrangeTransformation
 для указанной формулы преобразования определяет место в цепочке расчета
 в соответствии с её зависимостями.


## Комментарии


При определении места в цепочке расчета метод работает по тому же алгоритму
 и учитывает те же критерии, что и метод [IEaxDataAreaTransformations.Arrange](IEaxDataAreaTransformations.Arrange.htm).
 Отличием является выполнение только для одной указанной формулы преобразования.


Для автоматического выстраивания всех формул преобразования в цепочке
 расчета используйте метод [IEaxDataAreaTransformations.Arrange](IEaxDataAreaTransformations.Arrange.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS. В измерении по строкам создайте два вычисляемых
 элемента с наименованиями «Вычисляемый_1», «Вычисляемый_2». Для вычисляемых
 элементов заданы произвольные формулы. Само измерение построено на основе
 справочника, не являющегося календарным.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

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

	    //Срез аналитической области данных

	    DArea := Express.DataArea;

	    Slice := DArea.Slices.Item(0);

	    //Формулы преобразования данных в аналитической области

	    CalcTrs := Slice.CalcTransformations;

	    //Получим формулу преобразования и изменим её выражение

	    CalcTr := CalcTrs.Item(0);

	    Debug.WriteLine("Индекс в цепочке расчета до автоматического выстраивания: " + CalcTrs.IndexOf(CalcTr).ToString);

	    //Изменение формулы

	    CalcTr.Expression.AsString := "{Вычисляемый_2[t]}";

	    //Автоматическое выстраивание цепочки расчета

	    CalcTrs.ArrangeTransformation(CalcTr);

	    Debug.WriteLine("Индекс в цепочке расчета после автоматического выстраивания: " + CalcTrs.IndexOf(CalcTr).ToString);

	End Sub UserProc;


При выполнении примера для первого вычисляемого элемента будет изменена
 формула преобразования - новая формула будет получать значение второго
 вычисляемого элемента. Вызов метода ArrangeTransformation позволяет перестроить
 всю цепочку расчета с учётом появившейся зависимости. Индексы формулы
 преобразования в цепочке расчета до изменения выражения и после будут
 выведены в консоль среды разработки.


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
