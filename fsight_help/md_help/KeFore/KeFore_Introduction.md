# Введение: Сборка Fore

Введение: Сборка Fore
-


# Введение в сборку Fore


Основными интерфейсами сборки Fore
 являются:


	- [IAppServerClass](Interface/IAppServerClass/IAppServerClass.htm)
	 - интерфейс, содержащий методы для работы с планировщиком задач продукта
	 «Форсайт. Аналитическая платформа»;


	- [IDocument](Interface/IDocument/IDocument.htm) -
	 интерфейс, содержащий свойства и методы объекта репозитория [Документ](UiNavObj.chm::/UiNavObj_document.htm);


	- [IScheduledTasksContainer](Interface/IScheduledTasksContainer/IScheduledTasksContainer.htm)
	 - интерфейс, содержащий свойства и методы [контейнера запланированных
	 задач](UiAppSrv.chm::/UiAppSrv_purpose.htm);


	- [IScheduledTask](Interface/IScheduledTask/IScheduledTask.htm)
	 - интерфейс, содержащий базовые свойства и методы всех задач, создаваемых
	 в контейнере запланированных задач;


	- [IExecuteSubScheduledTask](Interface/IExecuteSubScheduledTask/IExecuteSubScheduledTask.htm)
	 - интерфейс, содержащий свойства и методы задачи, осуществляющей выполнение
	 модуля;


	- [IUiMetabaseObjectParams](Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.htm)
	 - интерфейс, содержащий свойства и методы компонента среды разработки
	 [UiMetabaseObjectParams](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMetabaseObjectParams.htm);


	- [IUiMetabaseObject](Interface/IUiMetabaseObject/IUiMetabaseObject.htm)
	 - интерфейс, содержащий базовые свойства и методы компонентов, осуществляющих
	 доступ к объектам репозитория;


	- [IForeServices](Interface/IForeServices/IForeServices.htm),
	 [IForeRuntime](Interface/IForeRuntime/IForeRuntime.htm)
	 - интерфейсы для работы со средой выполнения Fore-кода;


	- [IForeThread](Interface/IForeThread/IForeThread.htm),
	 [IForeCriticalSection](Interface/IForeCriticalSection/IForeCriticalSection.htm)
	 - интерфейсы для выполнения в отдельных параллельных потоках [пользовательских
	 методов](Interface/IForeMethod/IForeMethod.htm).


## Примеры


[Примеры реализации различных задач
 с использованием сборки Fore](Samples/KeFore_Sample.htm)


См. также:


[Интерфейсы сборки Fore](Interface/KeFore_Interface.htm)
 | [Перечисления
 сборки Fore](Enums/KeFore_Enums.htm) | [Классы сборки Fore](Class/KeFore_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
