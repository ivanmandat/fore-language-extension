# IScheduledTaskModuleChecker

IScheduledTaskModuleChecker
-


# IScheduledTaskModuleChecker


Сборка: Fore;


## Описание


Интерфейс IScheduledTaskModuleChecker
 предназначен для настройки модуля, при выполнении которого будет выполняться
 задача.


## Иерархия наследования


           [IScheduledTaskChecker](../IScheduledTaskChecker/IScheduledTaskChecker.htm)


           IScheduledTaskModuleChecker


## Комментарии


Для настройки правила валидации, при выполнении которого будет выполняться
 задача, используйте интерфейс [IScheduledTaskValidationChecker](../IScheduledTaskValidationChecker/IScheduledTaskValidationChecker.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ExpectedResult](IScheduledTaskModuleChecker.ExpectedResult.htm)
		 Свойство ExpectedResult
		 определяет ожидаемый результат выполнения модуля.


		 ![](../../Property_Image.gif)
		 [Macro](IScheduledTaskModuleChecker.Macro.htm)
		 Свойство Macro определяет
		 функцию, определённую в сборке, модуле или форме.


		 ![](../../Property_Image.gif)
		 [Module](IScheduledTaskModuleChecker.Module.htm)
		 Свойство Module определяет
		 сборку, модуль или форму, при выполнении которых будет выполняться
		 задача.


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
