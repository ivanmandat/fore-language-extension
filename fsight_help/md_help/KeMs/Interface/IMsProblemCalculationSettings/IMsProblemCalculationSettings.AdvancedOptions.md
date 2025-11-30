# IMsProblemCalculationSettings.AdvancedOptions

IMsProblemCalculationSettings.AdvancedOptions
-


# IMsProblemCalculationSettings.AdvancedOptions


## Синтаксис


AdvancedOptions: [MsProblemCalculationOptions](../../Enums/MsProblemCalculationOptions.htm);


## Описание


Свойство AdvancedOptions
 определяет дополнительные параметры расчета задачи.


## Комментарии


Используя данное свойство можно сократить время расчета задачи моделирования.


Если AdvancedOptions содержит
 значение:


	- MsProblemCalculationOptions.SkipOutputDataLoad.
	 Могут некорректно рассчитываться задачи, у которых в выходных переменных
	 уже есть какие-либо данные: точки, на которые выгрузились значения
	 NAN, не будут записаны в базу данных;


	- MsProblemCalculationOptions.CacheCoords.
	 Будет некорректно рассчитана агрегация и некоторые модели на переменных
	 со срезами.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим задачу моделирования с
 идентификатором PROBLEM_ADV.


Добавьте ссылки на системные сборки: Metabase, Ms.


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

	    Problem := Mb.ItemByIdNamespace("PROBLEM_ADV", ModelSpaceD.Key).Bind As IMsProblem;

	    // Получаем параметры расчета задачи

	    CalcSett := Problem.CreateCalculationSettings;

	    // Включаем в расчет сценарий «Факт»

	    CalcSett.FactIncluded := True;

	    // Задаем периоды расчета задачи

	    CalcSett.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

	    CalcSett.Period.IdentificationEndDate := DateTime.ComposeDay(2004, 12, 31);

	    CalcSett.Period.ForecastStartDate := DateTime.ComposeDay(2005, 1, 1);

	    CalcSett.Period.ForecastEndDate := DateTime.ComposeDay(2007, 12, 31);

	    // Задаем дополнительные параметры расчета

	    CalcSett.AdvancedOptions := MsProblemCalculationOptions.SkipOutputDataLoad Or MsProblemCalculationOptions.CacheCoords;

	    // Выполняем расчет

	    Problem.Calculate(CalcSett).Run;

	End Sub UserProc;


В результате выполнения примера будет рассчитана задача моделирования
 без загрузки данных по выходным переменным и с кешированием координат
 срезов переменных.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
