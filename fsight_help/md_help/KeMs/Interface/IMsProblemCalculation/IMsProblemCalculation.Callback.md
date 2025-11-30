# IMsProblemCalculation.Callback

IMsProblemCalculation.Callback
-


# IMsProblemCalculation.Callback


## Синтаксис


		Callback: [IMsProblemCalculationCallback](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.htm);


## Описание


Свойство Callback определяет
 объект для обработки событий, происходящих во время расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


При расчёте задачи возможны следующие события:


	- сработала точка останова;


	- возникла ошибка;


	- расчёт завершён;


	- подготавливается расчёт;


	- начат новый шаг расчёта;


	- выполнен шаг расчёта;


	- возникло предупреждение;


	- подготовка к сохранению данных;


	- сохранение данных.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором MODEL_SPACE, содержащего задачу моделирования с идентификатором
 PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


Также в примере используется класс MCallback,
 описание которого приведено в [IMsProblemCalculationCallback.OnWarning](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnWarning.htm).


					Sub ProblemCalc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Problem: IMsProblem;

		    Calculation: IMsProblemCalculation;

		    CallBack: MCallback;

		    CalcSettings: IMsProblemCalculationSettings;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем задачу моделирования

		    MsKey := mb.GetObjectKeyById("MODEL_SPACE");

		    Problem := mb.ItemByIdNamespace("PROBLEM", MsKey).Bind As IMsProblem;

		    // Задаем параметры расчёта задачи

		    CalcSettings := Problem.CreateCalculationSettings;

		    CalcSettings.FactIncluded := True;

		    CalcSettings.BreakOnError := True;

		    Calculation := Problem.Calculate(CalcSettings);

		    // Задаем обработчик событий

		    CallBack := New MCallback.Create;

		    Calculation.Callback := CallBack;

		    // Выполняем расчёт

		    Calculation.Run;

		End Sub ProblemCalc;


После выполнения примера задача будет рассчитана. Если возникнет ошибка,
 то расчёт будет остановлен. Обработчиком событий, возникающих при расчёте
 задачи, является класс MCallback.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
