# IMsProblemCalculationSettings.DefaultLevel

IMsProblemCalculationSettings.DefaultLevel
-


# IMsProblemCalculationSettings.DefaultLevel


## Синтаксис


DefaultLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство DefaultLevel определяет
 уровень календарной динамики, используемый по умолчанию при расчете задачи.


## Комментарии


Значение по умолчанию DimCalendarLevel.None.


Если элемент цепочки наследует период и динамику расчета родительского
 элемента, т.е.[ IMsCalculationChainEntry.InheritModelPeriod](../IMsCalculationChainEntry/IMsCalculationChainEntry.InheritModelPeriod.htm)
 установлено в True, но при расчете
 данная информация не была получена от родителя, то элемент цепочки будет
 использовать период [IMsProblemCalculationSettings.Period](IMsProblemCalculationSettings.Period.htm)
 и календарный уровень [IMsProblemCalculationSettings.DefaultLevel](IMsProblemCalculationSettings.DefaultLevel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу трансформации
 с идентификатором «PROBLEM».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpaceD: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

Begin

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpaceD := Mb.ItemById("MS");

    // Получаем задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM", ModelSpaceD.Key).Bind As IMsProblem;

    // Создаем настройки расчета задачи

    CalcSett := Problem.CreateCalculationSettings;

    // Задаем периоды расчета задачи

    CalcSett.Period.IdentificationStartDate := DateTime.Parse("01.01.2000");

    CalcSett.Period.IdentificationEndDate := DateTime.Parse("31.12.2004");

    CalcSett.Period.ForecastStartDate := DateTime.Parse("01.01.2005");

    CalcSett.Period.ForecastEndDate := DateTime.Parse("31.12.2007");

    // Задаем динамику расчета задачи

    CalcSett.DefaultLevel := DimCalendarLevel.Year;

    // Задаем параметры расширения дат

    CalcSett.CorrectStubPeriod := MsCorrectStubPeriod.CorrectProblemPeriod;

    // Выполняем расчет

    Problem.Calculate(CalcSett).Run;

End Sub UserProc;


В результате выполнения примера для задачи моделирования будут установлены:
 параметры расширения дат, период расчета и календарная динамика, используемые
 по умолчанию. Задача будет рассчитана.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
