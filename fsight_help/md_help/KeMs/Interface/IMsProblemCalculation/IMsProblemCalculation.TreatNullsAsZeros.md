# IMsProblemCalculation.TreatNullsAsZeros

IMsProblemCalculation.TreatNullsAsZeros
-


# IMsProblemCalculation.TreatNullsAsZeros


## Синтаксис


		TreatNullsAsZeros: Boolean;


## Описание


Свойство TreatNullsAsZeros
 определяет признак замены пустых значений нулями при расчёте [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Пустое значение - это Null.


Допустимые значения TreatNullsAsZeros:


	- True. Пустые значения
	 в данных переменных будут заменены нулями при расчёте задачи моделирования.
	 Обратите внимание, что не будет работать [обработка
	 пропусков](UiModelling.chm::/Web/SidePanel/UiModelling_w_pp_MissingData.htm);


	- False. Значение
	 по умолчанию. При расчёте задачи моделирования к пустым значениям
	 в данных переменных будут применяться только методы обработки пропусков.


После расчёта задачи моделирования свойству устанавливается значение
 False.


Примечание.
 Свойства [IMsModel.TreatNullsAsZeros](../IMsModel/IMsModel.TreatNullsAsZeros.htm)
 и IMsProblemCalculation.TreatNullsAsZeros
 работают совместно по условию ИЛИ.
 Например, если для модели TreatNullsAsZeros
 установлено в False, а для задачи,
 рассчитывающую данную модель TreatNullsAsZeros
 установлено в True, то при расчете
 задачи в модели пустые значения будут заменены нулями.

Данная возможность позволяет управлять заменой пустых значений нулями как
 отдельно для каждой модели, так и для всех моделей, рассчитываемых задачей.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором PROBLEM.


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

		    MObj := MB.ItemByIdNamespace("PROBLEM", MB.ItemById("MS").Key).Edit;

		    Problem := MObj As IMsProblem;

		    CalcSett := Problem.CreateCalculationSettings;

		    Calculation := Problem.Calculate(CalcSett);

		    Calculation.TreatNullsAsZeros := True;

		    Calculation.SaveHistory := True;

		    Calculation.Run;

		    MObj.Save;

		End Sub UserProc;


История расчёта задачи, произведённого в процессе выполнения примера
 с заменой пустых значений нулями, сохранится в контейнере моделирования.
 При расчёте некорректной задачи история расчёта задачи сохранена не будет.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
