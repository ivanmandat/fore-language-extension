# IScheduledTaskValidationChecker

IScheduledTaskValidationChecker
-


# IScheduledTaskValidationChecker


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskValidationChecker
 предназначен для настройки правила валидации, при выполнении которого
 будет выполняться задача.


## Иерархия наследования


           [IScheduledTaskChecker](../IScheduledTaskChecker/IScheduledTaskChecker.htm)


           IScheduledTaskValidationChecker


## Комментарии


Для настройки модуля, при выполнении которого будет выполняться задача,
 используйте интерфейс [IScheduledTaskModuleChecker](../IScheduledTaskModuleChecker/IScheduledTaskModuleChecker.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](IScheduledTaskValidationChecker.Condition.htm)
		 Свойство Condition
		 определяет тип исключения.


		 ![](../../Property_Image.gif)
		 [ExceptionCount](IScheduledTaskValidationChecker.ExceptionCount.htm)
		 Свойство ExceptionCount определяет
		 число исключений из правила.


		 ![](../../Property_Image.gif)
		 [Validation](IScheduledTaskValidationChecker.Validation.htm)
		 Свойство Validation определяет
		 правило валидации, при выполнении которого будет выполняться задача.


## Свойства, унаследованные от [IScheduledTaskChecker](../IScheduledTaskChecker/IScheduledTaskChecker.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckMsg](../IScheduledTaskChecker/IScheduledTaskChecker.CheckMsg.htm)
		 Свойство CheckMsg возвращает
		 текст ошибки, возникшей при выполнении задачи.


		 ![](../../Property_Image.gif)
		 [Type](../IScheduledTaskChecker/IScheduledTaskChecker.Type.htm)
		 Свойство Type возвращает
		 тип условия выполнения задачи.


## Методы, унаследованные от [IScheduledTaskChecker](../IScheduledTaskChecker/IScheduledTaskChecker.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Check](../IScheduledTaskChecker/IScheduledTaskChecker.Check.htm)
		 Метод Check устанавливает
		 признак выполнения задачи по наступлению события.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
