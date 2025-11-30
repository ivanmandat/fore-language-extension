# IMsProblemCalculation.SaveZeros

IMsProblemCalculation.SaveZeros
-


# IMsProblemCalculation.SaveZeros


## Синтаксис


		SaveZeros: Boolean;


## Описание


Свойство SaveZeros
 определяет признак выгрузки рассчитанных нулей в базу данных при расчёте
 [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Нулевые значения, полученные при расчете задачи, будут выгружены в
	 базу данных;


	- False. После расчета
	 задачи в базу данных сохраняются только ненулевые значения.


Примечание.
 Свойства IMsProblemCalculation.SaveZeros
 и [IMsModel.SaveZeros](../IMsModel/IMsModel.SaveZeros.htm)
 работают совместно по условию И.
 Например, если для модели SaveZeros
 установлено в True, а для задачи,
 рассчитывающую данную модель SaveZeros
 установлено в False, то после
 расчета задачи в базу данных сохраняются только ненулевые значения.

Данная возможность позволяет управлять сохранением нулевых значений как
 отдельно для каждой модели, так и для всех моделей, рассчитываемых задачей.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором PROBLEM_SAVEZEROS.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Problem: IMsProblem;

		    CalcSett: IMsProblemCalculationSettings;

		    Calculation: IMsProblemCalculation;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("PROBLEM_SAVEZEROS", MB.ItemById("MS").Key).Bind;

		    Problem := MObj As IMsProblem;

		    CalcSett := Problem.CreateCalculationSettings;

		    Calculation := Problem.Calculate(CalcSett);

		    Calculation.SaveZeros := False;

		    Calculation.SaveData := True;

		    Calculation.Run;

		End Sub UserProc;


В результате выполнения примера задача будет рассчитана, в базу данных
 будут сохранены только ненулевые значения.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
