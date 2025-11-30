# IPrjTask.ForecastPeriod

IPrjTask.ForecastPeriod
-


# IPrjTask.ForecastPeriod


## Синтаксис


ForecastPeriod: [IPrjTaskPeriod](../IPrjTaskPeriod/IPrjTaskPeriod.htm);


## Описание


Свойство ForecastPeriod определяет
 прогнозируемый срок выполнения задачи.


## Комментарии


Если задан [фактический](IPrjTask.FactPeriod.htm) срок выполнения
 задачи, то при расчёте проекта прогнозируемый срок выполнения задачи будет
 совпадать с фактическим.


Если используется [ручной
 тип планирования](../../Enums/PrjTaskWorkOutTypes.htm) и определены хотя бы два параметра из трех: продолжительность
 срока выполнения задачи, дата начала выполнения задачи, дата окончания
 задачи, то при расчёте проекта прогнозируемый срок выполнения задачи будет
 совпадать с [планируемым](IPrjTask.PlanPeriod.htm). Для определения
 параметров используйте свойства интерфейса [IPrjTaskPeriod](../IPrjTaskPeriod/IPrjTaskPeriod.htm).


## Пример


Использование свойства приведено в примере для [IPrjProject.Tasks](../IPrjProject/IPrjProject.Tasks.htm).


См. также:


[IPrjTask](IPrjTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
