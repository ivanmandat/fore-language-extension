# IPrimaryPostgresSPLD.SupportBinaryProtocol

IPrimaryPostgresSPLD.SupportBinaryProtocol
-


# IPrimaryPostgresSPLD.SupportBinaryProtocol


## Синтаксис


SupportBinaryProtocol: Boolean;


## Описание


Свойство SupportBinaryProtocol
 определяет, будут ли для работы с сервером использоваться запросы в бинарном
 виде.


## Комментарии


Допустимые значения:


	- True. Для работы с сервером
	 используются запросы, приведённые к бинарному виду. Использование
	 бинарных запросов позволяет сократить объем трафика, который требуется
	 для отправки запросов и получения данных с сервера;


	- False. Значение по умолчанию.
	 Для работы с сервером используются текстовые запросы.


Примечание.
 Возможность использовать бинарные запросы доступна, если на сервере СУБД
 используется PostgreSQL версии 9.3 и выше.


## Пример


Пример использования приведён в описании свойства [IPrimaryPostgresSPLD.Database](IPrimaryPostgresSPLD.Database.htm).


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
