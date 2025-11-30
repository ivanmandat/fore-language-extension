# ICalculateModelScheduledTask.SourceProblem

ICalculateModelScheduledTask.SourceProblem
-


# ICalculateModelScheduledTask.SourceProblem


## Синтаксис


SourceProblem: [IMsProblem](../IMsProblem/IMsProblem.htm);


## Описание


Свойство SourceProblem определяет
 задачу моделирования, рассчитываемую задачей в контейнере запланированных
 задач.


## Комментарии


Одна задача в контейнере запланированных задач может рассчитывать только
 одну задачу моделирования. Для расчёта нескольких задач моделирования
 используйте несколько задач в контейнере запланированных задач.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- контейнера запланированных задач с идентификатором SCHEDULEDTASKSCONTAINER;


	- контейнера моделирования с идентификатором MS, содержащим задачу
	 моделирования с идентификатором PROBLEM_ADV.


Добавьте ссылки на системные сборки: Fore, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Exe: ICalculateModelScheduledTask;

    Per: IScheduledTaskPeriodDaily;

    Prop: IScheduledTaskProperties;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Создаём задачу в контейнере запланированных задач

    CrInf := mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_TASK_CALCULATEMODEL;

    CrInf.Id := mb.GenerateId("MODELLING_TASK", mb.GetObjectKeyById("SCHEDULEDTASKSCONTAINER"));

    CrInf.Name := "Расчёт задачи моделирования";

    CrInf.Parent := mb.ItemById("SCHEDULEDTASKSCONTAINER");

    MObj := mb.CreateObject(CrInf).Edit;

    // Указываем, что задача будет рассчитывать задачу моделирования

    Exe := MObj As ICalculateModelScheduledTask;

    // Указываем рассчитываемую задачу моделирования

    Exe.SourceProblem := mb.ItemByIdNamespace("PROBLEM_ADV", mb.ItemById("MS").Key).Bind As IMsProblem;

    // Задаём периодичность расчёта задачи

    Prop := Exe.Properties;

    Per := Prop.CreatePeriod(ScheduledTaskPeriodType.Daily) As IScheduledTaskPeriodDaily;

    Per.StartDateTime := DateTime.Now;

    Prop.Period := Per;

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в контейнере запланированных задач будет
 создана задача, выполняющая расчёт задачи моделирования.


См. также:


[ICalculateModelScheduledTask](ICalculateModelScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
