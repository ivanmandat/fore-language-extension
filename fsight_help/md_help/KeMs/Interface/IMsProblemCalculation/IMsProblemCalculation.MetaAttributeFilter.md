# IMsProblemCalculation.MetaAttributeFilter

IMsProblemCalculation.MetaAttributeFilter
-


# IMsProblemCalculation.MetaAttributeFilter


## Синтаксис


		MetaAttributeFilter: [IMsMetaAttributeFilter](../IMsMetaAttributeFilter/IMsMetaAttributeFilter.htm);


## Описание


Свойство MetaAttributeFilter
 возвращает объект, содержащий фильтр, применяемый при расчёте [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


По умолчанию применяется пустой фильтр.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором PROBLEM_METAFILTER. В базе данных временных рядов, являющейся
 источником данных для контейнера моделирования, должен присутствовать
 атрибут рядов CITY, ссылающийся
 на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Descr: IMetabaseObjectDescriptor;

		    Problem: IMsProblem;

		    CalcSettings: IMsProblemCalculationSettings;

		    Calculation: IMsProblemCalculation;

		    Ruby: IRubricator;

		    MetaAttr: IMetaAttribute;

		    MetaVals: IMsMetaAttributeValues;

		    Dict: IMetabaseObject;

		    DI: IDimInstance;

		    Sel: IDimSelection;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    Descr := MB.ItemById("MS");

		    // Получаем задачу моделирования

		    Problem := MB.ItemByIdNamespace("PROBLEM_METAFILTER", Descr.Key).Edit As IMsProblem;

		    // Создаем настройки расчета задачи

		    CalcSettings := Problem.CreateCalculationSettings;

		    // Указываем, что расчет будет по сценарию «Факт»

		    CalcSettings.FactIncluded := True;

		    // Создаем объект для расчета задачи

		    Calculation := Problem.Calculate(CalcSettings);

		    // Получаем базу данных временных рядов, являющуюся источником данных для контейнера моделирования

		    Ruby := (Descr.Bind As IMsModelSpace).DefaultObject.Bind As IRubricator;

		    // Получаем атрибут рядов «CITY»

		    MetaAttr := Ruby.Facts.Attributes.FindById("CITY");

		    // Добавляем фильтрацию по данному атрибуту

		    MetaVals := Calculation.MetaAttributeFilter.Add(MetaAttr);

		    // Создаём отметку атрибута «CITY»

		    Dict := MetaAttr.ValuesObject.Bind;

		    DI := Dict.Open(Null) As IDimInstance;

		    Sel := DI.CreateSelection;

		    Sel.SelectElement(0, False);

		    // Устанавливаем отметку в фильтр

		    MetaVals.Selection := Sel;

		    // Выполняем расчет

		    Calculation.Run;

		    // Сохраняем изменения в задаче моделирования

		    (Problem As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для задачи моделирования будет настроена
 фильтрация и произведен расчёт.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
