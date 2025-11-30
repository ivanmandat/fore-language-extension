# IMsProblemCalculationSettings.RemoteCalc

IMsProblemCalculationSettings.RemoteCalc
-


# IMsProblemCalculationSettings.RemoteCalc


## Синтаксис


		RemoteCalc: [MsProblemRemoteCalc](../../Enums/MsProblemRemoteCalc.htm);


## Описание


Свойство RemoteCalc определяет,
 используется ли удалённый расчёт задачи моделирования на BI-сервере.


## Комментарии


Если свойство имеет значение:


	- MsProblemRemoteCalc.Disable.
	 Задача моделирования рассчитывается локально;


	- MsProblemRemoteCalc.Enable.
	 Задача моделирования рассчитывается удалённо на BI-сервере, указанном
	 в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


	- MsProblemRemoteCalc.EnableBySources.
	 Задача моделирования рассчитывается удалённо на BI-сервере, указанном
	 в свойстве [IMsProblemCalculationProxy.Address](../IMsProblemCalculationProxy/IMsProblemCalculationProxy.Address.htm).
	 Если свойство не задано, то для расчёта используется BI-сервер, указанный
	 в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_REMOTECALC, содержащего задачу моделирования
 с идентификатором CALC_PROBLEM. Также по адресу http://10.9.172.46/FPBI_App_v10.x/axis2/services/PP.SOM.Som
 должен быть развёрнут BI-сервер.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Problem: IMsProblem;

		    Calculation: IMsProblemCalculationProxy;

		    CalcSettings: IMsProblemCalculationSettings;

		Begin

		    // Получаем текущий репозиторий

		    Mb := MetabaseClass.Active;

		    // Получаем задачу моделирования

		    Problem := Mb.ItemByIdNamespace("CALC_PROBLEM", Mb.GetObjectKeyById("MS_REMOTECALC")).Bind As IMsProblem;

		    // Задаем параметры расчёта задачи

		    CalcSettings := Problem.CreateCalculationSettings;

		    // Указываем, что расчёт выполняется на указанном BI-сервере

		    CalcSettings.RemoteCalc := MsProblemRemoteCalc.Enable;

		    // Задаем параметры подключения к BI-серверу

		    Calculation := Problem.Calculate(CalcSettings) As IMsProblemCalculationProxy;

		    Calculation.Address := "http://10.9.172.46/FPBI_App_v10.x/axis2/services/PP.SOM.Som";

		    // Если настройки удаленного расчёта задачи заданы успешно, то выполняем расчёт задачи

		    If Calculation.IsRemoteCalc Then

		        Calculation.Run;

		        Debug.WriteLine("Выполнен удаленный расчёт задачи '" + Problem.Name + "'");

		    Else

		        Debug.WriteLine("Удаленный расчёт задачи '" + Problem.Name + "' не выполнен");

		    End If;

		End Sub UserProc;


В результате выполнения примера расчёт задачи моделирования будет выполнен
 удалённо на указанном BI-сервере.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
