# UiPrxEaxGridCancelEventArgs.Create

UiPrxEaxGridCancelEventArgs.Create
-


# UiPrxEaxGridCancelEventArgs.Create


## Синтаксис


Create(UiRep: [IUiReport](../../Interface/IUiReport/IUiReport.htm);
 EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm);
 Cancel: Boolean);


## Параметры


UiRep. Параметры компонента
 среды разработки [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm);


EaxGrid. Параметры аналитической
 области данных;


Cancel. Признак допустимости
 обновления аналитической области данных.


## Описание


Конструктор Create создает аргумент
 события, в котором присутствует возможность отменить обновление аналитической
 области данных.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Будет произведено
	 обновление аналитической области данных;


	- False. Не будет произведено
	 обновление аналитической области данных.


Для создания аргумента события, происходящего при удалении/добавлении
 аналитической области данных, используйте конструктор [UiPrxEaxGridEventArgs.CreateArgs](../UiPrxEaxGridEventArgs/UiPrxEaxGridEventArgs.CreateArgs.htm).


См. также:


[UiPrxEaxGridCancelEventArgs](UiPrxEaxGridCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
