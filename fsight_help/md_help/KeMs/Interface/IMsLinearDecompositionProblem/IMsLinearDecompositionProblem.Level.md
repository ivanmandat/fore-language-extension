# IMsLinearDecompositionProblem.Level

IMsLinearDecompositionProblem.Level
-


# IMsLinearDecompositionProblem.Level


## Синтаксис


Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство Level определяет уровень
 календаря, по которому будет осуществляться расчет задачи.


## Пример


Для выполнения примера необходимо наличие в репозитории контейнера моделирования
 с идентификатором CONT_MODEL. В данном контейнере должна присутствовать
 метамодель с идентификатором META_MODEL. Календарь контейнера должен начинаться
 ранее 2003 года, а заканчиваться позже 2010 года.


			Sub UserProc;

Var

    MB: IMetabase;

    Cont: IMetabaseObjectDescriptor;

    ModelKey: Integer;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    LnDecProblem: MsLinearDecompositionProblem;

    Period: IMsModelPeriod;

Begin

    MB := MetabaseClass.Active;

    Cont := Mb.ItemById("CONT_MODEL").Bind;

    ModelKey := Cont.Key;

    // Создаем объект «Задача»

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

    CrInf.Id := "New_ForwardLookingProblem";

    CrInf.Name := "New_ForwardLookingProblem";

    CrInf.Parent := Cont;

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    Problem := MObj As IMsProblem;

    // Добавляем метамодель

    Problem.MetaModel := MB.ItemByIdNamespace("META_MODEL", ModelKey).Bind As IMsMetaModel;

    // Определяем тип задачи - «Forward-looking прогнозирование»

    LnDecProblem := New MsLinearDecompositionProblem.Create;

    Problem.Details := LnDecProblem;

    // Определяем уровень календаря, по которому будет осуществляться расчет задачи

    LnDecProblem.Level := DimCalendarLevel.Month;

    // Определяем параметры периодов, на которых будет производиться расчет задачи

    Period := LnDecProblem.Period;

    Period.IdentificationStartDate := DateTime.ComposeDay(2003, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

    Period.ForecastStartDate := DateTime.ComposeDay(2008, 1, 1);

    Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    MObj.Save;

End Sub UserProc;


После выполнения примера, в контейнере моделирования будет создана новая
 задача типа Forward-looking прогнозирование с идентификатором New_ForwardLookingProblem.
 В задачу будет добавлена метамодель, определены уровень календаря и параметры
 периодов, необходимые для расчета задачи.


См. также:


[IMsLinearDecompositionProblem](IMsLinearDecompositionProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
