# Exception.Create

Exception.Create
-


# Exception.Create


## Синтаксис


Create(Value: String);


## Параметры


Value. Описание ошибки.


## Описание


Метод Create создает экземпляр
 ошибки.


## Комментарии


Описание ошибки, обрабатываемое системой и выводимое в свойстве [IException.Message](../../Interface/IException/IException.Message.htm),
 передается посредством параметра Value.


## Пример


	Sub UserProc;

	Begin

	    Try

	        Raise New Exception.Create("Исключение");

	    Except On E: Exception Do

	        Debug.WriteLine("Блок except. Текст сообщения: ");

	        Debug.WriteLine(e.Message);

	    End Try;

	End Sub UserProc;


После выполнения примера будет сгенерирована исключительная
 ситуация.


См. также:


[Exception](Exception.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
