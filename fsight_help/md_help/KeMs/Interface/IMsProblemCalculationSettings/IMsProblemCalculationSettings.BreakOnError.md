# IMsProblemCalculationSettings.BreakOnError

IMsProblemCalculationSettings.BreakOnError
-


# IMsProblemCalculationSettings.BreakOnError


## Синтаксис


BreakOnError: Boolean;


## Описание


Свойство BreakOnError определяет,
 прерывать ли расчет задачи моделирования при возникновении ошибки.


## Комментарии


Допустимые значения:


	- True. При возникновении
	 ошибки расчет задачи моделирования будет прерван;


	- False. Значение
	 по умолчанию. При возникновении ошибки расчет задачи моделирования
	 будет продолжен.


Значение свойства учитывается только на этапе расчета задачи. Если ошибка
 возникла на этапах загрузки данных или инициализации, то расчет будет
 прерван независимо от значения BreakOnError.


## Пример


Для выполнения примера предполагается наличие задачи моделирования с
 ключом «13380». Добавьте ссылки на системные сборки «Metabase», «Ms».
 Также в примере используется класс MCallback,
 описание которого приведено в [IMsProblemCalculationCallback.OnWarning](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnWarning.htm).


			Sub UserProc;

Var

    mb: IMetabase;

    Problem: IMsProblem;

    Calculation: IMsProblemCalculation;

    CallBack: MCallback;

    CalcSettings: IMsProblemCalculationSettings;

Begin

    mb := MetabaseClass.Active;

    Problem := mb.Item(13380).Bind As IMsProblem;

    CallBack := New MCallback.Create;

    CalcSettings := Problem.CreateCalculationSettings;

    CalcSettings.Callback := CallBack;

    CalcSettings.FactIncluded := True;

    CalcSettings.BreakOnError := True;

    Calculation := Problem.Calculate(CalcSettings);

    Calculation.Run;

End Sub UserProc;


После выполнения примера задача будет рассчитана. Если возникнет ошибка,
 то расчет будет остановлен. Обработчиком событий, возникающих при расчете
 задачи, является класс MCallback.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
