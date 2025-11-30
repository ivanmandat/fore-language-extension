# IPrjContradictionsCollection.Remove

IPrjContradictionsCollection.Remove
-


# IPrjContradictionsCollection.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс расхождения срока
 выполнения задачи.


## Описание


Метод Remove удаляет расхождение
 из коллекции по индексу.


## Комментарии


Расхождение срока возникает при прогнозируемом
 построении сроков выполнения задач с разными [типами
 связей](../../Enums/PrjTaskDependencyType.htm) между ними.


Для получения коллекции расхождений срока
 выполнения задачи используйте свойство [IPrjProject.Contradictions](../IPrjProject/IPrjProject.Contradictions.htm).


Для определения расхождения срока выполнения
 задачи используйте интерфейс [IPrjContradiction](../IPrjContradiction/IPrjContradiction.htm).


Важно. Устранение
 расхождения срока выполнения задачи выполняется вручную. Удаление расхождения
 не устраняет возникшую проблему.


См. также:


[IPrjContradictionsCollection](IPrjContradictionsCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
