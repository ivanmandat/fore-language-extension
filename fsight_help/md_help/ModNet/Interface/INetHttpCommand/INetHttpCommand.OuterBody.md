# INetHttpCommand.OuterBody

INetHttpCommand.OuterBody
-


# INetHttpCommand.OuterBody


## Синтаксис


OuterBody: Boolean;


## Описание


Свойство OuterBody определяет,
 будут ли к выполняемому запросу добавляться базовые тэги SOAP-запросов.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом к запросу добавляются заголовок <soapenv:Envelope
 xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Body>,
 затем следует сам запрос, переданный в метод [INetCommand.Start](../INetCommand/INetCommand.Start.htm),
 после этого добавляются закрывающие тэги </soapenv:Body></soapenv:Envelope>.


При установке свойству значения True
 тэги к запросу добавлены не будут. Значение True
 используется, когда нет необходимости дополнять запрос тэгами, например,
 при выполнении GET-запросов, если указываемый запрос полностью сформирован
 или при отправке Json-запросов.


## Пример


Пример использования приведён в описании свойства [INetHttpCommand.Credential](INetHttpCommand.Credential.htm).


См. также:


[INetHttpCommand](INetHttpCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
