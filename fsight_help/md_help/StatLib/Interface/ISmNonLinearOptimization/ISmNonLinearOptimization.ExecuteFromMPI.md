# ISmNonLinearOptimization.ExecuteFromMPI

ISmNonLinearOptimization.ExecuteFromMPI
-


# ISmNonLinearOptimization.ExecuteFromMPI


## Синтаксис


ExecuteFromMPI(Path: String; NumberOfVariables:
 Integer): Integer;


## Параметры


Path. Путь к mpi-файлу, содержащему
 задачу LINDO;


NumberOfVariables. Количество
 переменных в задаче.


## Описание


Метод ExecuteFromMPI выполняет
 нелинейную оптимизацию задачи из указанного файла с помощью LINDO.


## Комментарии


Все параметры задачи передаются с помощью указанного mpi-файла.


Для корректного расчета в свойстве [ISmNonLinearOptimization.LindoSettings](ISmNonLinearOptimization.LindoSettings.htm)
 необходимо указать путь к библиотеке и лицензии LINDO.


Примечание.
 Для использования модуля LINDO его необходимо предварительно установить.
 Получить подробную информацию о модуле LINDO и его условиях его использования
 можно на сайте [www.lindo.com](http://www.lindo.com/).


Для получения файла, в который будет выгружена задача LINDO, используйте
 свойство [ILindoSettings.MPIPath](../ILindoSettings/ILindoSettings.MPIPath.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 «c:\Problem.mpi», содержащего задачу LINDO.


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    nlo: ISmNonLinearOptimization;

    LindoSettings: ILindoSettings;

    i, res: Integer;

    Warnings: Array Of String;

    OptVal: Double;

Begin

    // Создаем объект для решения задачи оптимизации

    nlo := New SmNonLinearOptimization.Create;

    // Указываем, что задача будет решаться с помощью модуля LINDO

    nlo.SolverType := NLOSolverType.Lindo;

    // Получаем параметры модуля

    LindoSettings := nlo.LindoSettings;

    // Указываем пути к библиотеке и лицензии LINDO

    LindoSettings.DLLPath := "c:\Lindoapi\bin\win32\lindo8_0.dll";

    LindoSettings.LicensePath := "c:\Lindoapi\license\lndapi80.lic";

    // Указываем файл, из которого будет загружена задача
 и выполняем расчет

    res := nlo.ExecuteFromMPI("c:\Problem.mpi", 4);

    If (res <> 0) Or (LindoSettings.nErrorCode <> 0) Then

        Debug.WriteLine(nlo.Errors);

        Debug.WriteLine("Код ошибки LINDO: " + LindoSettings.nErrorCode.ToString);

        Debug.WriteLine("Текст ошибки LINDO: " + LindoSettings.MessageString);

    Else

        // Получаем предупреждения, возникшие при расчете и выводим их

        Warnings := LindoSettings.Warnings;

        For i := 0 To Warnings.Length - 1 Do

            Debug.WriteLine("Предупреждение: " + Warnings[i]);

        End For;

        // Выводим результаты расчета

        Debug.WriteLine("== Значение целевой функции ==");

        OptVal := nlo.OptimalFunctionValue;

        Debug.WriteLine(OptVal.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера была рассчитана задача LINDO из указанного
 файла. Результаты расчета выведены в окно консоли.


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
