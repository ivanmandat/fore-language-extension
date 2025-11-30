# IDefCalculationAlgorithm.SaveDataOption

IDefCalculationAlgorithm.SaveDataOption
-


# IDefCalculationAlgorithm.SaveDataOption


## Синтаксис


		SaveDataOption: Boolean;


## Описание


Свойство SaveDataOption определяет,
 будут ли сохраняться данные при их изменении с помощью алгоритма расчёта.


## Комментарии


Свойство может быть изменено, если алгоритм имеет [блок
 расчёта](IDefCalculationAlgorithm.HasCalcBlock.htm).


Если свойству установлено значение True,
 то данные, изменённые при применении алгоритма расчёта, будут сохранены
 в источник при сохранении данных или формы ввода.


При значении свойства False
 данные, изменённые алгоритмом расчёта, не сохраняются в источник, но могут
 быть сохранены в самой форме ввода.


## Пример


Пример использования приведён в описании метода [IDefCalculationAlgorithmsCollection.Add](../IDefCalculationAlgorithmsCollection/IDefCalculationAlgorithmsCollection.Add.htm).


См. также:


[IDefCalculationAlgorithm](IDefCalculationAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
