# IMsCustomTerm.IsPeriod

IMsCustomTerm.IsPeriod
-


# IMsCustomTerm.IsPeriod


## Синтаксис


		IsPeriod(StartDate: String;


		        [EndDate:
		 String = "[SameDate](IMsCustomTerm.SameDate.htm)";]


		        [CustomFrequency:
		 [MsFrequancy](../../Enums/MsFrequency.htm) = 0]): Variant;


## Параметры


StartDate. Дата начала периода;


EndDate. Дата окончания периода;


CustomFrequency. Динамика,
 для которой формируются значения.


## Описание


Метод IsPeriod возвращает фиктивную
 переменную, определяющую признак расположения наблюдения в указанном периоде.


## Комментарии


В рамках данного метода возможна реализация следующих фиктивных переменных:


	- разовый скачок. Из всех
	 значений ряда нужно сделать акцент только на одном. Например, в ряде
	 с месячной динамикой нужно выделить значение за июль 2008, тогда переменная
	 будет иметь вид: IsPeriod ("2008M07");


	- скачок на отдельный период.
	 Из всех значений ряда нужно сделать акцент только на тех значениях,
	 которые попадают в указанный диапазон. Например, в ряде с месячной
	 динамикой нужно выделить значения c июля 2008 по июль 2009, тогда
	 переменная будет иметь вид: IsPeriod ("2008M07","2009M07");


	- скачок начиная с конкретной
	 даты и до конца. Например, в ряде с месячной динамикой нужно
	 выделить значения с июля 2008, тогда переменная будет иметь вид: IsPeriod
	 ("2008M07",NoDate);


	- скачок до конкретной даты.
	 Например, в ряде с месячной динамикой нужно выделить значения с начала
	 наблюдений до июля 2008, тогда оператор будет иметь вид: IsPeriod
	 (NoDate,"2008M07").


Особенности задания параметров:


	- EndDate. Необязательный
	 параметр на Fore. Значение по умолчанию совпадает с датой начала периода.
	 Данное значение возвращает метод [IMsCustomTerm.SameDate](IMsCustomTerm.SameDate.htm);


	- Context. Необязательный
	 параметр на Fore. По умолчанию динамика не задана и совпадает с динамикой
	 модели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, содержащего модель детерминированного
 уравнения с идентификатором DUMMIES_DETERM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transf: IMsFormulaTransform;

		    Determ: IMsDeterministicTransform;

		Begin

		    mb := MetabaseClass.Active;

		    MsDescr := mb.ItemById("CONT_MODEL");

		    Model := mb.ItemByIdNamespace("DUMMIES_DETERM", MsDescr.Key).Edit As IMsModel;

		    Transf := Model.Transform;

		    Determ := Transf.FormulaItem(0).Method As IMsDeterministicTransform;

		    Determ.Expression.AsString := "IsPeriod(""" + "2000A" + """,NoDate)";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в уравнении модели будут использоваться
 фиктивные переменные IsPeriod
 и [NoDate](IMsCustomTerm.NoDate.htm).
 Фиктивная переменная будет выделять значения с 2000 года и до конца периода
 идентификации.


См. также:


[IMsCustomTerm](IMsCustomTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
