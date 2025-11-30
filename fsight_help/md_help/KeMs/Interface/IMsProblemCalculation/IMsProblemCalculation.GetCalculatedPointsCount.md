# IMsProblemCalculation.GetCalculatedPointsCount

IMsProblemCalculation.GetCalculatedPointsCount
-


# IMsProblemCalculation.GetCalculatedPointsCount


## Синтаксис


GetCalculatedPointsCount(MetaModelKey: Integer):
 Integer;


## Параметры


MetaModelKey. Ключ метамодели,
 формулы из которой привели к изменению ячеек данных.


## Описание


Метод GetCalculatedPointsCount
 возвращает [количество
 ячеек в приёмнике данных](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm#change_points_count), изменённых в результате выполнения
 формул из указанной метамодели.


## Комментарии


Свойство предназначено для удобства проверки результатов расчёта задачи
 моделирования.


## Пример


Для выполнения примера в репозитории необходимо наличие контейнера моделирования
 с идентификатором CONTAINER. В контейнере моделирования должны содержаться
 задача моделирования с идентификатором CONTAINER_TASK и метамодель с идентификатором
 CONTAINER_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MbDes1, MbDes2: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Calc: IMsProblemCalculation;

    CalcSet: IMsProblemCalculationSettings;

    PointsCount: Integer;

    MetaModel: IMsMetaModel;

    Key: Integer;

Begin

    // Получим репозиторий

    Mb := MetabaseClass.Active;

    // Получим задачу моделирования

    MbDes1 := Mb.ItemByIdNamespace("CONTAINER_TASK", Mb.GetObjectKeyById("CONTAINER"));

    Problem := MbDes1.Edit As IMsProblem;

    // Настроим параметры расчёта задачи

    CalcSet := Problem.CreateCalculationSettings;

    // Создадим объект для расчёта задачи

    Calc := Problem.Calculate(CalcSet);

    // Запустим расчёт задачи

    Calc.Run;

    // Получим метамодель

    MbDes2 := MB.ItemByIdNamespace("CONTAINER_MODEL", Mb.GetObjectKeyById("CONTAINER"));

    MetaModel := MbDes2.Edit As IMsMetaModel;

    // Получим ключ метамодели

    Key := MetaModel.Key;

    // Получим информацию о количестве ячеек
 данных, изменённых при расчёте метамодели

    PointsCount := Calc.GetCalculatedPointsCount(Key);

    // Выведем в консоль информацию о количестве изменённых ячеек
 данных

    Debug.WriteLine("Количество изменённых ячеек данных: " + PointsCount.ToString);

End Sub UserProc;


После выполнения примера будет выполнен расчёт задачи моделирования.
 В консоль будет выведена информация о количестве ячеек данных, изменённых
 в результате выполнения формул из метамодели CONTAINER_MODEL.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
