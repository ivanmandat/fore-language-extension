# IMsCustomTerm.Seas

IMsCustomTerm.Seas
-


# IMsCustomTerm.Seas


## Синтаксис


		Seas(Index: Integer;


		    [CustomFrequency:
		 [MsFrequancy](../../Enums/MsFrequency.htm) = 0]): Variant;


## Параметры


Index. Периоды года;


CustomFrequency. Динамика,
 для которой формируются значения.


## Описание


Метод Seas возвращает фиктивную
 переменную, каждый элемент которой соответствует признаку принадлежности
 наблюдения указанному периоду в течение текущего года. Год разделён согласно
 календарной динамике ряда.


## Комментарии


Метод доступен только для моделей с квартальной или месячной динамикой.


Seas(4)


Предположим, что модель имеет квартальную динамику, дата начала периода
 идентификации - «01.01.2003», дата окончания - «31.12.2004». Метод применяется
 для определения, принадлежит ли наблюдение четвертому кварталу. Фиктивная
 переменная будет содержать значения:


		 Год


		 I квартал 2003


		 II квартал 2003


		 III квартал 2003


		 IV квартал 2003


		 I квартал 2004


		 II квартал 2004


		 III квартал 2004


		 IV квартал 2004


		 Значение моделируемой
		 переменной


		 0,12


		 0,13


		 0,11


		 0,14


		 0,38


		 0,47


		 0,67


		 0,64


		 Значение Seas


		 0


		 0


		 0


		 1


		 0


		 0


		 0


		 1


Особенности задания параметров:


	- Index. Значения для
	 моделей с квартальной динамикой находятся в диапазоне [1, 4], для
	 моделей с месячной динамикой - [1, 12];


	- CustomFrequency.
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

		    Determ.Expression.AsString := "Seas(4)";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в уравнении модели будет применяться
 фиктивная переменная для определения признака принадлежности наблюдения
 четвёртому кварталу.


См. также:


[IMsCustomTerm](IMsCustomTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
