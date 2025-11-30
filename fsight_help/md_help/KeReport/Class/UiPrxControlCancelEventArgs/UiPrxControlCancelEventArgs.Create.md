# UiPrxControlCancelEventArgs.Create

UiPrxControlCancelEventArgs.Create
-


# UiPrxControlCancelEventArgs.Create


## Синтаксис


Create(UiRep: [IUiReport](../../Interface/IUiReport/IUiReport.htm);
 Control: [IPrxControl](../../Interface/IPrxControl/IPrxControl.htm);
 Cancel: Boolean);


## Параметры


UiRep. Параметры компонента
 среды разработки [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm);


Control. Элемент управления;


Cancel. Параметр, отвечающий
 за удаление элемента управления.


## Описание


Конструктор Create создаёт аргумент
 события, происходящего перед удалением элемента управления.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Элемент управления
	 будет удалён;


	- False. Элемент управления
	 не будет удалён.


См. также:


[UiPrxControlCancelEventArgs](UiPrxControlCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
