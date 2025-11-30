# IMsCustomTerm.Time

IMsCustomTerm.Time
-


# IMsCustomTerm.Time


## Синтаксис


		Time([StartDate: String = "";]


		     [CustomFrequency:
		 [MsFrequency](../../Enums/MsFrequency.htm) = 0]): Variant;


## Параметры


StartDate. Опорная дата для
 формирования значений;


CustomFrequency. Динамика,
 для которой формируются значения.


## Описание


Метод Time возвращает временной
 ряд, значение которого для каждого последующего наблюдения увеличивается
 на единицу.


## Комментарии


Временная переменная Time может
 содержать положительные и отрицательные значения. Предположим, что дата
 начала периода идентификации модели - «01.01.2003», дата окончания - «01.01.2009».
 Значение параметра StartDate
 - «01.01.2006». Переменная будет содержать значения:


		 Год


		 2003


		 2004


		 2005


		 2006


		 2007


		 2008


		 2009


		 Значение Time


		 -3


		 -2


		 -1


		 0


		 1


		 2


		 3


Особенности задания параметров:


	- StartDate. Наблюдение
	 в данной точке будет иметь нулевое значение. Параметр необязательный
	 на Fore. Значение по умолчанию совпадает с датой начала периода идентификации
	 модели;


	-  CustomFrequency.
	 Необязательный параметр на Fore. По умолчанию динамика не задана и
	 совпадает с динамикой модели.


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

		    Determ.Expression.AsString := "Time(""" + "01.01.2006" + """)";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в уравнении модели будет использоваться
 временная переменная.


См. также:


[IMsCustomTerm](IMsCustomTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
